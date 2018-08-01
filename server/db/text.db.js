const db = require("./index");
const TextScheam = db.Schema({
  title: String,
  target: String,
  url: {
    type: String,
    unique: true
  },
  date: Date,
  type: String,
  star: Number,
  wordNumber: Number,
  browseNumber: Number,
  crawlDate: Date
});
let TextModel = db.model("Text", TextScheam, "text");
module.exports = TextModel;
