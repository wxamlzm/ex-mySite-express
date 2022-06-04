// 人员管理的路由处理
const express = require('express');
// 定义路由
const router = express.Router();

router.get('/', (req, res) => {
    res.send('hello userRouter');
});

module.exports = router;
