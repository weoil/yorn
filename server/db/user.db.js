const db = require("./index");
const StarType = db.Schema({
  type: String,
  data: [
    {
      title: String,
      id: String,
      date: Date
    }
  ]
});
const RecordType = db.Schema({
  key: String,
  data: {
    title: String,
    date: Date,
    position: String
  }
});
const UserScheam = db.Schema({
  username: String,
  password: String,
  star: [StarType],
  record: [RecordType],
  registerDate: Date,
  token: String,
  email: String,
  lastLoginDate: Date,
  setting: Object,
  poster: String,
  introduction: String,
  level: Number,
  vip: Boolean,
  vipLevel: Number
});
let UserModel = db.model("User", UserScheam, "user");
module.exports = UserModel;
