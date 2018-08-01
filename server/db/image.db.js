const db = require("./index");
const ImageScheam = db.Schema({
  title: String,
  target: String,
  url: {
    type: String,
    unique: true
  },
  date: Date,
  type: String,
  images: Array,
  browseNumber: Number,
  length: Number,
  crawlDate: Date,
  star: Number
});
let ImageModel = db.model("Image", ImageScheam, "image");

module.exports = ImageModel;
