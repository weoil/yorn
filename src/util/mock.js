import Mock from "mockjs";
const Random = Mock.Random;
Mock.setup({
  timeout: "100-500"
});
Mock.mock(/list\/image\/.*\/.*/, function() {
  return Mock.mock({
    code: 200,
    "data|20": [
      {
        id: () => Random.string("lower", 18),
        title: () => Random.cparagraph(1),
        cover: () => Random.image(),
        poster: () => Random.image(),
        date: () => Random.date(),
        lenght: () => Random.integer(5, 30),
        browseCount: () => Random.integer(1, 30)
      }
    ]
  });
});
Mock.mock(/list\/video\/.*\/.*/, function() {
  return Mock.mock({
    code: 200,
    "data|20": [
      {
        id: () => Random.string("lower", 18),
        title: () => Random.cparagraph(1),
        cover: () => Random.image(),
        date: () => Random.date(),
        lenght: () => Random.integer(5, 30),
        browseCount: () => Random.integer(1, 30)
      }
    ]
  });
});
Mock.mock(/list\/text\/.*\/.*/, function() {
  return Mock.mock({
    code: 200,
    "data|20": [
      {
        id: () => Random.string("lower", 18),
        title: () => Random.cparagraph(1),
        date: () => Random.date(),
        lenght: () => Random.integer(5, 30),
        browseCount: () => Random.integer(1, 30)
      }
    ]
  });
});
Mock.mock(/video\/.*/, function() {
  return Mock.mock({
    code: 200,
    data: {
      title: () => Random.cparagraph(1),
      cover: () => Random.image(),
      date: () => Random.date(),
      video: [
        {
          src: "http://www.w3school.com.cn/i/movie.mp4",
          type: "mp4/video"
        }
      ],
      target: "91porn",
      duration: () => Random.date("hh:mm:ss"),
      browseCount: () => Random.integer(1, 30)
    }
  });
});
Mock.mock(/image\/.*/, function() {
  return Mock.mock({
    code: 200,
    data: {
      title: () => Random.cparagraph(1),
      date: () => Random.date(),
      "images|10-20": [() => Random.image()],
      target: "caoliu",
      length: () => Random.integer(10, 20),
      browseCount: () => Random.integer(1, 30)
    }
  });
});
Mock.mock(/text\/.*/, function() {
  return Mock.mock({
    code: 200,
    data: {
      title: () => Random.cparagraph(1),
      date: () => Random.date(),
      text: () => Random.cparagraph(30, 100),
      target: "sis001",
      length: () => Random.integer(2000, 6000),
      browseCount: () => Random.integer(1, 30)
    }
  });
});
Mock.mock(/\/user\/star/, option => {
  return {
    code: 200,
    data: []
  };
});
Mock.mock(/\/user\/record/, option => {
  return {
    code: 200,
    data: []
  };
});
Mock.mock(/\/user\/record\/position/, option => {
  if (option.type === "POST") {
    return {
      code: 200,
      data: []
    };
  }
});
