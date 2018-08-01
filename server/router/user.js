const Router = require("koa-router");
const UserModel = require("../db/user.db");
const jwt = require("jsonwebtoken");
const yError = require("../util/error.js");
const { jwtSecret } = require("../setting");
const router = new Router({
  prefix: "/api/"
});

router.use(async (ctx, next) => {
  console.log(ctx.url);
  if (
    ctx.url.startsWith("/api/user/login") ||
    ctx.url.includes("/api/user/register")
  ) {
    await next();
    return;
  }
  try {
    const token = ctx.request.headers["x-access-token"];
    let user = jwt.verify(token, jwtSecret);
    if (user) {
      ctx.info = user;
      await next();
      return;
    }
  } catch (e) {
    console.log(e);

    throw new yError(401, "invalid token");
  }
  throw new yError(401, "invalid token");
});

router.get("user/star", async ctx => {
  let { _id } = ctx.info;
  let r = await UserModel.findOne({ _id: _id }, { star: 1 });
  ctx.body = r["star"];
});
router.post("user/star", async ctx => {
  let { _id } = ctx.info;
  let { title, id, type, date } = ctx.request.body;
  async function update() {
    return await UserModel.updateOne(
      { _id: _id, "star.type": type },
      { $push: { "star.$.data": { title, id, date } } }
    );
  }
  let r = await update();
  if (!r.n) {
    await UserModel.updateOne(
      { _id: _id },
      { $push: { star: { type: type, data: [] } } }
    );
    await update();
  }
  console.log(r);
});
router.get("user/record", async ctx => {
  let { _id } = ctx.info;
  let r = await UserModel.findOne({ _id: _id }, { record: 1 });
  ctx.body = r["record"];
});
router.post("user/record", async ctx => {
  let { _id } = ctx.info;
  let { key, data } = ctx.request.body;
  let obj = { key: key, data: data };
  await UserModel.updateOne({ _id: _id }, { $push: { record: obj } });
});
router.post("user/record/position", async ctx => {
  let { _id } = ctx.info;
  let { key, position } = ctx.request.body;
  await UserModel.updateOne(
    { _id: _id, "record.key": key },
    {
      $set: {
        "record.$.data.position": position,
        "record.$.data.date": Date.now()
      }
    }
  );
});
router.post("user/login", async ctx => {
  const { username, password } = ctx.request.body;
  let r = await UserModel.findOne({ username: username, password: password });
  if (!r) {
    throw new yError(402);
  }
  let { _id } = r;
  let timeout = Date.now().valueOf() + 1000 * 60 * 60 * 1;
  const token = jwt.sign({ _id, username }, jwtSecret, {
    expiresIn: 60 * 60 * 1
  });
  ctx.body = {
    token: token,
    expire: timeout
  };
});
router.post("user/register", async ctx => {
  const { username, password, email } = ctx.request.body;
  let flag =
    /^[\u4E00-\u9FA5A-Za-z]{1}[\u4E00-\u9FA5A-Za-z0-9_]{0,9}$/.test(username) &&
    /^[a-zA-Z]\w{5,17}$/.test(password) &&
    (email
      ? /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email)
      : true);
  if (!flag) throw new yError(406);
  let r = await UserModel.findOne({ username: username });
  if (r) {
    throw new yError(405);
  }
  r = await UserModel.create({
    username: username,
    password: password,
    email: email
  });
  if (!r) throw new yError(409);
});
// router.post("user/logout", async ctx => {});
router.post("user/refresh", async ctx => {
  const { _id, username } = ctx.info;
  const token = jwt.sign({ _id, username }, jwtSecret, {
    expiresIn: 60 * 60 * 1
  });
  let expire = Date.now().valueOf() + 1000 * 60 * 60 * 1;
  ctx.body = { token, expire };
});
module.exports = router;
