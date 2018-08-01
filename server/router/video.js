const Router = require("koa-router");
const VideoModel = require("../db/video.db");
const request = require("../util/request");
const match = require("../util/match");
const dayjs = require("dayjs");
const route = new Router({
  prefix: "/api/"
});
route.get("list/video/:type/:page", async ctx => {
  let { type, page } = ctx.params;
  let doc = { type: type };
  let { keywords, publisher, performer, count = 20 } = ctx.request.query;
  page = page <= 0 ? 0 : page - 1;
  console.log(page, type);
  if (publisher) doc["publisher"] = publisher;
  if (performer) doc["performer"] = performer;
  if (keywords) {
    let keys = keywords.split(";");
    doc["keyWords"] = { $all: keys };
  }
  let skip = count * page;
  let data = await VideoModel.find(doc, { url: 0, __v: 0 })
    .sort({ date: -1 })
    .limit(count)
    .skip(skip);
  data = data.map(d => {
    return {
      title: d["title"],
      type: d["type"],
      poster: d["poster"],
      cover: d["cover"],
      target: d["target"],
      date: d["date"],
      browseCount: d["browseCount"],
      duration: d["duration"],
      id: d["_id"]
    };
  });
  ctx.body = data;
});
route.get("video/:id", async ctx => {
  let id = ctx.params.id,
    update = {};
  let data = await VideoModel.findOne({ _id: id });
  let t = Date.now();
  let body = {
    id: data.id,
    title: data.title,
    duration: data.duration,
    date: data.date,
    video: data.video,
    target: data.target,
    type: data.type,
    cover: data.poster ? data.poster : data.cover,
    browseCount: data.browseNumber,
    star: data.star,
    poster: data.cover ? data.cover : data.poster, //封面
    description: data.description, //简介
    publisher: data.publisher, //发行商
    keyWords: data.keyWords, //关键字
    performer: data.performer //演员
  };
  update["$set"] = { browseNumber: data.browseNumber + 1 };
  if (data.video && data.timeout && t < data.timeout) {
    body["video"] = data.video;
  } else {
    let url = data.url;
    let res = await request(url, { jar: false });
    let result = await match(url, res);
    let video = [];
    let videos = null;
    let timeout = 0;
    switch (data.target) {
      case "91porn":
        timeout = add(5, "h");
        videos = result.video;
        if (videos instanceof Array) {
          video = videos.map(v => {
            return {
              src: v,
              type: "video/mp4"
            };
          });
        } else {
          video = [
            {
              src: videos,
              type: "video/mp4"
            }
          ];
        }
        break;
      case "javdoe":
        timeout = add(1, "h");
        videos = result.videos;
        video = videos.map(v => {
          return {
            src: v.file,
            type: "video/" + v.type,
            label: v.label
          };
        });
        break;
    }
    if (timeout)
      update["$set"] = {
        ...update["$set"],
        video: video,
        poster: result.poster,
        timeout: timeout
      };
    body["video"] = video;
    body["poster"] = result.poster || data.cover;
  }
  VideoModel.updateOne({ _id: id }, update).then(() => {});
  ctx.body = body;
});
module.exports = route;
function add(num, type) {
  return dayjs()
    .add(num, type)
    .valueOf();
}
