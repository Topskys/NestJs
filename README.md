<!--
 * @Author: Topskys
 * @Date: 2022-11-25 15:55:06
 * @LastEditTime: 2022-11-26 15:30:53
-->
# Nest.js

[B站-小满](https://www.bilibili.com/video/BV1NG41187Bs/?p=3&spm_id_from=pageDriver&vd_source=f72f2ba9c041e7d811515312b7d7456a)


安装ts-node
```
npm i ts-node -g
```
运行ts文件
```
ts-node index.ts
```

```
# 返回上一级文件夹
cd ..
```
使用tsc --init生成一个typescript配置文件tsconfig.json



## Nest.js脚手架
```bash
# Nest.js脚手架
Nestjs> npm i -g @nestjs/cli

# 安装完脚手架，就可以使用脚手架创建nest.js项目
Nestjs> nest new demo

# 进入项目文件夹
Nestjs> cd demo
# 运行
Nestjs/demo> npm run start:dev
```


## 常用命令
```bash
# 快速生成一个模板，REST API ，y
nest g resource user
```


## RESTfull 接口风格、版本控制、code规范

code码规范
```ts
// 成功
200 
// Not Modified 协商缓存了
304
// Bad Request 参数错误
400
// Unauthorized token 错误
401
// Forbidden referer origin 验证失败
403
// Not Found 接口不存在
404
// Internal Server Error 服务器错误
500
// Bad Gateway 网关错误，上游接口有问题或服务器问题
```


## 装饰器



## Session



## Providers 提供者 


## 共享模块、全局模块、全局动态模块


## 中间件
```bash
# 生成日志中间件
nest g mi logger
```



## 后端解决跨域
```bash
npm i cors
# cors声明文件
npm i @types/cors -D
```


## multer 上传图片与静态文件访问
```bash
# multer nestJs自带了 
npm i multer -S
# 声明文件
npm i @types/multer -D
# 创建上传文件模块
nest g res upload
```


## 图片下载


## RxJs
RxJs 使用的是观察者模式，用来编写异步队列和事件处理。


## 响应拦截器


## 修改管道pipe

```bash
# uuid生成器
npm i uuid -S
# 
npm i @types/uuid -D
```


## 管道验证
```bash
# 新建模块
nest g res  login
# 转到login模块下
cd ./src/login
# 新建管道
nest g pi login
```


## 爬虫
```bash
npm i cheerio axios -S
# 新建模块
nest g res  spider
```


## 守卫
```bash
# 新建模块
nest g res guard
# 转移
cd ./src/guard
# 
nest g gu role
```


## 自定义装饰器
```bash
# 转移
cd ./src/guard
# 
nest g d role
```

## swagger 
```bash
npm install  @nestjs/swagger swagger-ui-express
```

## 连接数据库
```bash
npm install --save @nestjs/typeorm typeorm mysql2
# vscode 安装数据库可视化database client
# 终端连接数据库 -- mysql
mysql> mysql -uroot -p
password:******
# 查看所有数据库
show databases;
# 进入哪一个数据库
use test;
# 展示该数据库中的所有表
show tables;
# 进入guard表
desc guard;
```


## CURD

