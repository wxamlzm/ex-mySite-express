// 测试模型，用于记录
const mongoose = require('mongoose')
const { Schema, model } = mongoose

const MotivationSchema = new Schema({
  test: { type: String },
  isAdmin: { type: String, default: '0' }
})

const Motivation = model('Motivation', MotivationSchema)

model.exports = Motivation
