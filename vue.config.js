const path = require("path")
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src")
      }
    }
  }
  // pluginOptions: {
  //   "style-resources-loader": {
  //     // preProcessor: "less"
  //     patterns: [resolve("./assets/base.less")]
  //   }
  // }
}
