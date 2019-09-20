<template>
  <div>
    <van-cell-group>
      <van-field v-model="account" clearable label="用户名" placeholder="请输入用户名" />
      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" />
    </van-cell-group>
    <van-cell-group>
      <van-button type="primary" size='large' @click="register">注册</van-button>
    </van-cell-group>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'Register',
    data() {
      return {
        account: '',
        password: ''
      }
    },
    methods: {
      register: function () {
        var self = this;
        if (!this.account) {
          this.$notify('用户名不能为空');
          return;
        }
        if (!this.password) {
          this.$notify('密码不能为空');
          return;
        }
        const users = {
          account: this.account,
          password: this.password
        }
        axios({
          method: 'POST',
          url: 'http://localhost:3000/users/register',
          data: users
        }).then(
          function (res) {
            if (res.data.state) {
              self.$toast('注册成功');
            } else {
              self.$toast(res.message);
            }
          }).catch(function (err) {
          if (err) {
            self.$toast(err.message);
          }
        });
      }
    },
  }

</script>
<style lang="">
  .van-button--large {
    width: 80%;
    height: 40px;
    line-height: 40px;
    margin-top: 10px;
    border-radius: 8px;
  }

</style>
