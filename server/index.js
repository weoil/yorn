const Koa = require("koa2");
const Cors = require("koa2-cors");
const Parser = require("koa-parser");
const router = require("./router/index");
const Setting = require("./setting.js");

const App = new Koa();

App.use(Cors());
App.use(Parser());
App.use(router.routes());

App.listen(Setting.port, () => {
  console.log(`server listen port ${Setting.port}`);
});
