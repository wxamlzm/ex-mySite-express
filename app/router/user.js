const express = require('express')
// 引入数据库表
const User = require('../model/User')
const router = express.Router()

// 查询接口
router.get('/', async (req, res) => {
  const list = await User.find()
  res.send(list)
})
// 注册接口
router.post('/register', async (req, res) => {
  const user = await User.findOne({ userName: req.body.userName })
  
  if (user) {
    return res.status(409).send('该用户已存在')
  }
  const newUser = await new User(req.body).save()
  res.send(newUser)
})

module.exports = router
