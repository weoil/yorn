const IconvLite = require("iconv-lite");
const Request = require("request-promise");
const setting = require("../setting.js");

const { proxy } = setting;
module.exports = async function request(url, options = {}) {
  const defultOption = {
    proxy: proxy,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36"
    },
    jar: false,
    encoding: null
  };
  let resp = await Request.get(url, { ...defultOption, ...options });
  let body = encoding(resp);
  return body;
};

function encoding(body, encoding) {
  //自动推断charset
  let content = null;
  if (!encoding) {
    try {
      content = body.toString();
      let charset = /charset\=[^"].*"|charset\="[^"].*"/.exec(content)[0];
      encoding = charset
        .replace("charset=", "")
        .replace(/"/g, "")
        .trim();
    } catch (e) {
      encoding = "UTF8";
    }
  }
  if (encoding.toUpperCase().replace("-", "") === "UTF8") {
    return content ? content : body.toString();
  } else {
    return IconvLite.decode(body, encoding);
  }
}
