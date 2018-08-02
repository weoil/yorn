<template>
  <div class="userTop" :style="`height:${height}px`">
    <div class="portrait">
      <img src="https://avatars3.githubusercontent.com/u/24948543?s=88&v=4" alt="">
    </div>
    <div class="info">
      <div class="userinfo">
        <span class="username">
          username
        </span>
        <div class="notice">
          <span class="btns">
            <span class="ico">
              ❤️
            </span>

            <float-box title="喜欢" class="floatBox">
              <div v-for="(value,index) in star" :key="index" class="float-box-item">
                {{value.type}}
                <div class="type" v-for="(item,i) in value.data" :key="i">
                  {{item.title}}
                </div>
              </div>
            </float-box>
          </span>
          <span class="btns">
            <span class="ico">
              📚
            </span>
            <float-box title="历史" class="floatBox" color="#ffcc66">
              <div v-for="(value,index) in record" :key="index" class="record-item">
                <div class="title">{{value.data.title}}</div>
                <div class="type">
                  {{getRecordType(value.key)}}
                </div>
              </div>
            </float-box>
          </span>
          <span class="btns">
            <span class="ico setting">
              ⚙️
            </span>
            <float-box title="设定" class="floatBox" color="#B03060">
              <div>
                dadadas
              </div>
              <div>
                dasdsa
              </div>
            </float-box>
          </span>

        </div>
      </div>
      <div class="out">
        <Button type="error">LOGOUT</Button>
      </div>
    </div>

  </div>
</template>

<script>
import floatBox from "@/components/box/floatBox";
export default {
  name: "userTop",
  props: {
    height: {
      type: Number,
      default: 60
    }
  },
  data() {
    return {};
  },
  methods: {
    getRecordType(id) {
      let type = id.split(":")[0];
      switch (type) {
        case "image":
          return "图";
        case "video":
          return "影";
        case "text":
          return "文";
      }
    }
  },
  components: {
    floatBox
  },
  computed: {
    star() {
      return this.$store.state.user.star;
    },
    record() {
      let record = this.$store.state.user.record.slice(0);
      record.sort((a, b) => {
        return new Date(a["data"]["date"]) < new Date(b["data"]["date"]);
      });
      return record.slice(0, 5);
    }
  },
  mounted() {}
};
</script>

<style scoped lang="scss">
.userTop {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & > div {
    margin-left: 10px;
  }
  padding: 0 10px;
}
.portrait {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  overflow: hidden;
  background: $primaryColor;
  transition: box-shadow 0.5s;
  cursor: pointer;
  &:hover {
    box-shadow: 1px 1px 2px $textSubColor;
    animation: rotate 1s linear infinite;
  }
  img {
    height: 100%;
    width: 100%;
  }
}
.info {
  display: flex;
  width: 300px;
  justify-content: space-between;
  @media screen and (max-width: 996px) {
    display: none;
  }
}
.userinfo {
  display: flex;
  flex-direction: column;
  color: darken($primaryColor, 10%);
}
.username {
  line-height: 30px;
}
.notice {
  display: flex;
  line-height: 30px;
  justify-content: space-around;
  .btns {
    position: relative;

    cursor: pointer;
    &:hover {
      .floatBox {
        opacity: 1;
        visibility: visible;
      }
      .ico {
        display: block;
        position: relative;
        animation: rotate 1s linear infinite;
      }
      .setting {
        animation: rotate360 3s linear infinite;
      }
    }
    .floatBox {
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.5s, visibility 0.3s;
      font-size: 16px;
      color: rgb(117, 117, 117);
      cursor: pointer;
      .record-item {
        display: flex;
        justify-content: space-between;
        .title {
          width: 80%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .type {
          color: $primaryColor;
        }
      }
    }
  }
}
.out {
  margin-right: 30px;
}
</style>
