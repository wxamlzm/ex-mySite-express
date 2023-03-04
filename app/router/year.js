/*
 * @Author: zd
 * @Date: 2023-03-04 08:07:14
 * @LastEditors: zd
 * @LastEditTime: 2023-03-04 09:33:47
 * @Description:
 */
const express = require('express')

// 引入数据库表
const Year = require('../model/Year')
const router = express.Router()

// 更新数据库数据
router.put('/update', async (req, res) => {
  console.log(req.body)
  const newEmpire = await new Year(req.body).save()
  // await User.updateOne({_id: newEmpire._id}, {$set: {name: 'zd'}})

  res.send(newEmpire)
})

module.exports = router
