/*
 * @Author: zd
 * @Date: 2022-10-08 18:48:30
 * @LastEditors: zd
 * @LastEditTime: 2022-10-08 18:54:54
 * @Description: 测试模型，用于记录注册用户
 */
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const { Schema, model } = mongoose

const UserSchema = new Schema({
  username: { type: String, require: true },
  password: {
    type: String,
    require: true,
    set (val) {
      return bcrypt.hashSync(val, 10)
    }
  },
  nickname: { type: String, require: true },
  isAdmin: { type: String, default: '0' }
})

const User = model('User', UserSchema)

module.exports = User
