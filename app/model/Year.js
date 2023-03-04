/*
 * @Author: zd
 * @Date: 2023-03-04 08:03:03
 * @LastEditors: zd
 * @LastEditTime: 2023-03-04 08:27:13
 * @Description: 3000年帝国游戏数据
 */
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const { Schema, model } = mongoose

const MillenniumEmpireSchema = new Schema({
  military: { type: String, require: true },
  culture: { type: String, require: true },
  science: { type: String, require: true },
  religion: { type: String, require: true },
  business: { type: String, require: true },
  agriculture: { type: String, require: true },
  industry: { type: String, require: true },
  centralization: { type: String, require: true },
  decentralization: { type: String, require: true },
  navy: { type: String, require: true }
})

const MillenniumEmpire = model('MillenniumEmpire', MillenniumEmpireSchema)

module.exports = MillenniumEmpire
