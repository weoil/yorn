module.exports = class yError extends Error {
  constructor(code, msg = "") {
    if (!msg) {
      msg = CodeMap[code];
    }
    super(msg);
    this.code = code;
  }
};
const CodeMap = {
  200: "Success",
  401: "Unauthorized",
  402: "Username Or Password Error",
  403: "Forbidden",
  404: "Not Found",
  405: "Username Existence",
  406: "Not Meet The Requirements",
  409: "unknown Error"
};
