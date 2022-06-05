// 人员管理的路由处理
const express = require('express');
// 引入模型
const User = require('../model/User');
// 定义路由
const router = express.Router();

// 获取用户列表
router.get('/', async (req, res) => {
    // res.send('hello userRouter');
    const list = await User.find();
    res.send(list);
});

// 注册接口
router.post('/register', async (req, res) => {
    // req.body;
    // new User({ username, password, name, isAdmin });
    const user = User.findOne({ username: req.body.username });
    if (user) {
        return res.status(409).send('该用户已存在');
    }
    const newUser = await new User(req.body).save();
    res.send(newUser);
});

module.exports = router;
