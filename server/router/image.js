const Router = require("koa-router");
const ImageModel = require("../db/image.db");
const route = new Router({
  prefix: "/api"
});

route.get("/list/image/:type/:page", async ctx => {
  let count = 20;
  let page = ctx.params.page <= 0 ? 0 : ctx.params.page - 1;
  let skip = count * page;
  let data = await ImageModel.find(
    { type: ctx.params.type },
    { url: 0, __v: 0 }
  )
    .sort({ date: -1 })
    .limit(count)
    .skip(skip);
  let rd = data.map(value => {
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
  ctx.body = rd;
});
route.get("/image/:id", async ctx => {
  let id = ctx.params.id;
  let data = await ImageModel.findOne({ _id: id });
  ctx.body = data;
});
module.exports = route;
