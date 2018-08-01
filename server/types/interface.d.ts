interface Image {
  id: String;
  title: String;
  url?: String;
  poster: String;
  images: Array<String>;
  date: Date;
  browseCount: Number;
  type: String;
  target: String;
  crawlDate?: Date;
  length: Number;
  star: Number;
}

interface Video {
  id: String;
  title: String;
  url?: String;
  poster: String;
  cover: String;
  video: Array<any>;
  date: Date;
  browseCount: Number;
  star: Number;
  type: String;
  target: String;
  crawlDate?: Date;
  duration: String | Date | Number;
  description?: String; //简介
  publisher?: String; //发行商
  keyWords?: String[]; //关键字
  performer?: String[]; //演员
}

interface Text {
  id: String;
  title: String;
  url?: String;
  date: Date;
  browseCount: Number;
  type: String;
  target: String;
  crawlDate?: Date;
  length: Number;
  text: String;
  star: Number;
}
