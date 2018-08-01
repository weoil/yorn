const Router = require("koa-router");
const ImageModel = require("../db/image.db");
const VideoModel = require("../db/video.db");
const TextModel = require("../db/text.db");
const route = new Router({
  prefix: "/api"
});

route.get("/home", async ctx => {
  let image = await ImageModel.find({})
    .limit(10)
    .sort({ date: -1 });
  image = image.map(value => {
    return {
      title: value.title,
      length: value.length,
      target: value.target,
      date: value.date,
      crawlDate: value.crawlDate,
      poster: value.images[0],
      id: value._id,
      browseNumber: value.browseNumber || 0
    };
  });
  let videoGc = await VideoModel.find({ type: "gczp" })
    .limit(8)
    .sort({ date: -1 });
  videoGc = videoGc.map(d => {
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
  let videoPorn = await VideoModel.find({ type: "porn" })
    .limit(8)
    .sort({ date: -1 });
  videoPorn = videoPorn.map(d => {
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
  let text = await TextModel.find()
    .limit(20)
    .sort({ date: -1 });
  text = text.map(d => {
    return {
      title: d["title"],
      type: d["type"],
      date: d["date"],
      target: d["target"],
      browseCount: d["browseCount"],
      id: d["_id"]
    };
  });
  ctx.body = { image, video: { videoGc, videoPorn }, text };
});
route.get("/search/:search/:page", async ctx => {
  let { search, page } = ctx.params,
    image,
    video,
    text,
    total,
    videoQuery,
    imageQuery,
    textQuery;
  search = decodeURIComponent(search);
  let { num = 60, sort = -1 } = ctx.request.query;
  videoQuery = {
    $or: [
      { title: { $regex: search } },
      { keyWords: { $in: [search] } },
      { publisher: { $regex: search } },
      { performer: { $in: [search] } }
    ]
  };
  imageQuery = {
    $or: [
      {
        title: { $regex: search }
      }
    ]
  };
  textQuery = {
    $or: [
      {
        title: { $regex: search }
      }
    ]
  };
  let count = num / 3,
    skip = (page - 1) * count,
    add = 0;
  video = await VideoModel.find(videoQuery)
    .limit(count)
    .skip(skip)
    .sort({ date: sort });
  add = count - video.length;
  image = await ImageModel.find(imageQuery, {
    images: { $slice: 1 },
    title: 1,
    date: 1,
    target: 1,
    type: 1
  })
    .limit(add + count)
    .skip(skip)
    .sort({ date: sort });
  add = add + count - image.length;
  text = await TextModel.find(textQuery, { url: 0 })
    .limit(add + count)
    .skip(skip)
    .sort({ date: sort });
  total =
    (await VideoModel.find(videoQuery).count()) +
    (await ImageModel.find(imageQuery).count()) +
    (await TextModel.find(textQuery).count());
  ctx.body = {
    total,
    video,
    image,
    text
  };
});
module.exports = route;
