// 引入express
const express = require('express')
// 定义应用
const app = new express()
// 引入路由
const routes = require('./router')
// 引入数据库连接
const mongo = require('./config/db')
// 定义端口
const port = 3333

// 将post请求数据解析为对象
app.use(express.urlencoded({ extended: false }))
// 应用数据库
mongo(app)
// 挂载路由
routes(app)
// 创建服务
app.listen(port, () => console.log(`server listen at ${port}`))
