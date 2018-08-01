const Router = require("koa-router");
const router = new Router();
const user = require("./user");
const text = require("./text");
const image = require("./image");
const video = require("./video");
const home = require("./home");
router.use(async (ctx, next) => {
  let result = {
    code: 200,
    msg: "",
    data: null
  };
  try {
    await next();
    result.msg = "ok";
    result.data = ctx.body;
  } catch (e) {
    console.log("router error:", e);
    result.msg = e.message;
    result.code = e.code;
  }
  ctx.body = result;
});

router.use(user.routes(), user.allowedMethods());
router.use(home.routes(), home.allowedMethods());
router.use(text.routes(), text.allowedMethods());
router.use(image.routes(), image.allowedMethods());
router.use(video.routes(), video.allowedMethods());
module.exports = router;
