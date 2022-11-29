<!--
 * @Author: Topskys
 * @Date: 2022-11-26 15:54:10
 * @LastEditTime: 2022-11-29 15:12:59
-->
# demo-web

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



### 调式
```js
$$('.markdown ul li a').map(el=>el.innerHTML).splice(5)
``` 


### 模型关联
数据库表存在关联，模型没有关联会报错，require-all可以把modes在数据库匹配处运行一遍
```bash
# 安装
npm i require-all
``` 
```js
module.exports=app=>{
    const mongoose=require('mongoose');
    mongoose.connect('mongodb://localhost:27017/test',{
        useNewUrlParser:true
    });
    require('require-all')(__dirname,'/../models');
}
```


### 生成随机ID
```js
 Math.random().toString(16).slice(2) //'afed67937a962'
```


### 按钮左右抖动
```css
@keyframes shake { 
  10%, 90% { transform: translate3d(-1px, 0, 0); }
  20%, 80% { transform: translate3d(2px, 0, 0); }
  30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
  40%, 60% { transform: translate3d(4px, 0, 0); }
}
.apply-shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}
```
```js
function(){
  this.shakeFlag = true
  if (that.timer) {
    clearTimeout(that.timer)
    that.timer=null
  }
  that.timer =  setTimeout(() => {
    that.shakeFlag = false
  }, 820);
}

```