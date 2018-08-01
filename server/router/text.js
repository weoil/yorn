const Router = require("koa-router");
const TextModel = require("../db/text.db");
const request = require("../util/request");
const match = require("../util/match");
const route = new Router({
  prefix: "/api/"
});

route.get("list/text/:type/:page", async ctx => {
  let count = 20;
  let page = ctx.params.page <= 0 ? 0 : ctx.params.page - 1;
  let skip = count * page;
  let data = await TextModel.find({ type: ctx.params.type }, { url: 0, __v: 0 })
    .sort({ date: -1 })
    .limit(count)
    .skip(skip);
  // let size = await TextModel.find({ type: ctx.params.type }).countDocuments();
  data = data.map(d => {
    return {
      title: d["title"],
      type: d["type"],
      date: d["date"],
      target: d["target"],
      browseCount: d["browseCount"],
      id: d["_id"]
    };
  });
  ctx.body = data;
});
route.get("text/:id", async ctx => {
  let id = ctx.params.id;
  let data = await TextModel.findOne({ _id: id });
  let url = data.url;
  let body = await request(url);
  let r = await match(url, body, "sis001text");
  ctx.body = r;
});
module.exports = route;
