const db = require("./index");
const VideoSchema = db.Schema({
  title: String,
  target: String,
  browseNumber: Number,
  poster: String,
  url: {
    type: String,
    unique: true
  },
  date: Date,
  crawlDate: Date,
  duration: String,
  star: Number,
  type: String,
  video: Array,
  timeout: Date,
  keyWords: Array,
  publisher: String,
  cover: String,
  performer: Array,
  description: String
});

const VideoModel = db.model("Video", VideoSchema, "video");
module.exports = VideoModel;
