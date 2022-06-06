// 定义数据库
const mongoose = require('mongoose')
const mongdbUrl = 'mongodb://localhost:27017/login'

// 抛出连接
module.exports = app => {
  // 连接数据库
  mongoose.connect(mongdbUrl, () => {
    console.log('mongodb connect')
  })
}
