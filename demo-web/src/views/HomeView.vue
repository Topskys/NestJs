<!--
 * @Author: Topskys
 * @Date: 2022-11-26 15:53:55
 * @LastEditTime: 2022-11-26 17:03:07
-->
<template>
  <div class="wraps">
    <el-form label-position="right" label-width="100px" :model="form" style="max-width: 460px">
      <el-form-item label="账号">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.password" />
      </el-form-item>
      <el-form-item label="验证码">
        <div style="display:flex">
          <el-input v-model="form.code" />
          <img @click="resetCode" :src="codeUrl" alt="">
        </div>
      </el-form-item>
      <el-form-item>
        <el-button @click="submit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  data() {
    return {
      form: {
        username: '',
        password: '',
        code: '',
      },
      codeUrl: '/api/user/code',
    }
  },
  methods: {
    resetCode() {
      this.codeUrl = this.codeUrl + '?' + Math.random()
    },
    async submit() {
      await fetch('/api/user/create', {
        method: "POST",
        body: JSON.stringify(this.form), // 传json需要序列化
        headers: {
          'content-type': 'application/json'
        }
      }).then(res => {
        console.log(res.json())
      })
    },
  }
});
</script>



     
<style>
* {
  padding: 0;
  margin: 0;
}

.wraps {
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
}

html,
body,
#app {
  height: 100%;
}
</style>