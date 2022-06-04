// 数据库配置文件

// 引入mongose
const mongoose = require('mongoose');
// 定义URL，存放数据库地址
const mongoUrl = 'mongodb://localhost:27017/login';

// 暴露连接
module.exports = app => {
    // 连接数据库
    mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log('mongodb connect');
    });
};
