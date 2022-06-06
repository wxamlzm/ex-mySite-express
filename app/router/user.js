const express = require('express');
// 引入数据库表
const User = require('../model/User');
const router = express.Router();

// 查询接口
router.get('/', async (req, res) => {
    const list = await User.find();
    res.send(list);
});
// 注册接口
router.post('/register', async (req, res) => {
    const user = await User.findOne({ username: req.body.username });

    if (user) {
        return res.status(409).send('该用户已存在');
    }
    const newUser = await new User(req.body).save();
    res.send(newUser);
});
// 登录接口
router.post('/login', async (req, res) => {
    // 查询用户是否存在
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
        return res.status(422).send('该用户不存在');
    }
    // 用户存在，判断密码
    if (req.body.password !== user.password) {
        return res.status(422).send('密码错误');
    } else {
        res.send('token');
    }
});

module.exports = router;
