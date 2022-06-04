// 引入express
const express = require('express');
// 引入mongo配置文件
const mongo = require('./config/db');
// 引入路由文件
const routes = require('./router');
const app = new express();

// 使用mongo配置文件
mongo(app);
//  使用路由配置文件
routes(app);

app.listen(3000, () => {
    console.log('server listen at 3000');
});
