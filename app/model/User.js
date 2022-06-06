const mongoose = require('mongoose')
const { Schema, model } = mongoose

const UserSchema = new Schema({
  userName: { type: String, require: true },
  passWord: { type: String, require: true },
  nickName: { type: String, require: true },
  isAdmin: { type: String, default: '0' }
})

const User = model('User', UserSchema)

module.exports = User
