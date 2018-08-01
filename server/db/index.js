const Mongoose = require("mongoose");
const setting = require("../setting.js");

Mongoose.connect(setting.db.url);
module.exports = Mongoose;
