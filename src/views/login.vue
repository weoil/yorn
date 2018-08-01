<template>
  <div class="login">
    <Form class="form">
      <div class="title">
        Y o R n
      </div>
      <FormItem>
        <Input v-model="username" placeholder="请输入用户名" type="text" size="large" autofocus ref="username" />
      </FormItem>
      <FormItem>
        <Input v-model="password" placeholder="请输入密码" type="password" size="large" @on-enter="login" />
      </FormItem>
      <div class="btns">
        <Button type="info" long @click="login" :loading="loginLoading">登陆</Button>
        <Button type="success" long>注册</Button>
      </div>
    </Form>
  </div>
</template>

<script>
export default {
  name: "login",
  props: {},
  data() {
    return {
      username: "weoil",
      password: "123456",
      loginLoading: false,
      registerLoading: false
    };
  },
  methods: {
    async login() {
      this.loginLoading = true;
      console.log(this.username, this.password);
      let r = await this.$xhr.post("/user/login", {
        username: this.username,
        password: this.password
      });
      this.loginLoading = false;
      if (r.code === 402) {
        this.$Message.error("用户名或密码错误");
        this.username = this.password = "";
        this.$refs.username.focus();
      }
      if (r.code === 200) {
        let { token, expire } = r.data;
        this.$store.dispatch("token", { token, expire });
        this.$router.push(this.redirect);
      }

      console.log(r);
    }
  },
  components: {},
  computed: {
    redirect() {
      return this.$store.state.user.redirect;
    }
  },
  mounted() {
    this.$sr.reveal(".form", {
      duration: 1000,
      rotate: { x: 10, y: 100, z: 60 }
    });
  }
};
</script>

<style scoped lang="scss">
.login {
  height: 100%;
  background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533056881780&di=561f9c053171a68793b1c0f1bf86e123&imgtype=0&src=http%3A%2F%2Fpic.3h3.com%2Fup%2F2015-9%2F201599991030162113.jpg");
  background-size: cover;
}
.form {
  width: 350px;
  margin: 0 auto 0 auto;
  padding-top: 100px;
  // box-shadow: 1px 2px 4px rgb(141, 141, 141);
  // overflow: hidden;
}
.title {
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: rgb(255, 255, 255);
  text-shadow: 1px 1px 2px #000;
}
.btns {
  // display: flex;
  // justify-content: space-between;
  // flex-wrap: nowrap;
  button {
    margin-bottom: 10px;
    // width: 40%;
  }
}
</style>
<style>
.login .ivu-form-item {
  margin-bottom: 10px;
}
.login .ivu-input-large {
  height: 45px;
  font-size: 18px;
}
.login .ivu-btn {
  height: 45px;
  line-height: 45px;
  padding-top: 0;
  font-size: 18px;
}
</style>
