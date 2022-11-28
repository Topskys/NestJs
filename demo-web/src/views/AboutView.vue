<!--
 * @Author: Topskys
 * @Date: 2022-11-26 15:53:55
 * @LastEditTime: 2022-11-27 19:25:17
-->
<template>
  <div class="about">
    <button @click="download">下载</button>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  data() {
    return {
    }
  },
  methods: {
    // 配合后端stream方法下载zip文件
    download: async () => {
      // window.open("http://localhost:3000/upload/export");
      // 或者
      //  res不能再为json，应转为ArrayBuffer、Blob（responseType） 
      const res = await fetch("http://localhost:3000/upload/stream").then(res => res.arrayBuffer());
      const blob = new Blob([res]);
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "xiaoman.zip";
      a.click();
    }
  }
});
</script>



     
<style>
* {
  padding: 0;
  margin: 0;
}
</style>
