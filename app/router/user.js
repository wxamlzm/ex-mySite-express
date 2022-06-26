const express = require('express');
// 引入数据库表
const User = require('../model/User');
const router = express.Router();

// 密码加盐
const salt = '';

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
    req.body.password = setEncode(req.body.password, salt);

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
    // if (req.body.password !== user.password) {
    //     return res.status(422).send('密码错误');
    // } else {
    //     res.send('token');
    // }
    // 解密
    let isPassword = constrast(req.body.password, user.password, salt);
    if (!isPassword) {
        return res.status(422).send('密码错误');
    }

    // res.send(user);
    const token = user._id + '.' + user.username;
    res.send(token);
});
// 验证
router.get('/verify', async (req, res) => {
    // req.headers.authorization
    // 获取token
    const token = req.headers.authorization.split(' ')[1];
    const id = token.split('.')[0];
    const username = token.split('.')[1];
    // 查询是否存在用户
    const user = User.findById(id);
    if (!user) {
        return res.status(422).send('用户错误');
    }
    // 查看usernam
    if (username !== user.username) {
        res.status(422).send('用户错误');
    } else {
        // 用户存在，查看权限
        if (user.isAdmin === '0') {
            res.status(409).send('没有权限');
        } else if (user.isAdmin === '1') {
            res.send('Admin');
        }
    }
});

module.exports = router;
