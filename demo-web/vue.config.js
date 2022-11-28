/*
 * @Author: Topskys
 * @Date: 2022-11-26 15:53:55
 * @LastEditTime: 2022-11-28 13:15:44
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 代理
  devServer: {
    port: 3001,
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        // rewrite: path => path.replace(/^\/api/, ''),
        pathRewrite: { "^/api": '' }
      }
    },
  }

})
