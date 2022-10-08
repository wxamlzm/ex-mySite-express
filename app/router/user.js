/*
 * @Author: zd
 * @Date: 2022-10-08 18:48:30
 * @LastEditors: zd
 * @LastEditTime: 2022-10-09 00:14:43
 * @Description: 用户模块路由
 */
const express = require('express')
// 密码组件
const bcrypt = require('bcryptjs')
// token组件
const jwt = require('jsonwebtoken')
// 引入数据库表
const User = require('../model/User')
const router = express.Router()

// 加密规则
const secret = 'register-rule'

// 验证身份-中间件
const isAdmin = async (req, res, next) => {
  // 获取token
  const token = req.headers.authorization.split(' ').pop()
  const { _id, username } = jwt.verify(token, secret)
  // 查询是否存在用户
  const user = await User.findById(_id)
  if (!user) {
    return res.status(422).send('用户错误')
  }
  // 查看usernam
  if (username !== user.username) {
    res.status(422).send('用户错误')
  } else {
    // 用户存在，查看权限
    if (user.isAdmin === '0') {
      res.status(409).send('没有权限')
    } else if (user.isAdmin === '1') {
      // res.send('Admin');
      next()
    }
  }
}

// 查询接口
router.get('/', async (req, res) => {
  const list = await User.find()
  res.send(list)
})
// 注册接口
router.post('/register', async (req, res) => {
  const user = await User.findOne({ username: req.body.username })
  if (user) return res.status(409).send('该用户已存在')

  const newUser = await new User(req.body).save()
  res.send(newUser)
})
// 登录接口
router.post('/login', isAdmin, async (req, res) => {
  // 查询用户是否存在
  const user = await User.findOne({ username: req.body.username })
  if (!user) return res.status(422).send('该用户不存在')

  let isPassword = bcrypt.compareSync(req.body.password, user.password)
  if (!isPassword) return res.status(422).send('密码错误')

  // const token = user._id + '.' + user.username
  const { _id, username } = user
  const token = jwt.sign({ _id, username }, secret, { expiresIn: '24h' })
  res.send({ token, _id })
})
// 验证路由
router.get('/verify', async (req, res) => {
  // // 1. 获取token
  // const token = req.headers.authorization.split(' ')[1]
  // const id = token.split('.')[0]
  // const username = token.split('.')[1]
  // // 2.查询用户是否存在
  // const user = await User.findById(id)
  // if (!user) {
  //   return res.status(422).send('用户错误')
  // }
  // // 3.查看username
  // if (username !== user.username) {
  //   res.status(422).send('用户错误')
  // } else {
  //   // 用户存在，查看权限
  //   if (user.isAdmin === '0') {
  //     res.status(409).send('没有权限')
  //   } else if (user.isAdmin === '1') {
  //     res.send('Admin')
  //   }
  // }
  const token = req.headers.authorization.split(' ').pop()
  const { _id } = jwt.verify(token, secret)
  console.log(_id)
})

module.exports = router
