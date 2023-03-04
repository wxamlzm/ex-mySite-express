/*
 * @Author: zd
 * @Date: 2022-10-08 18:48:30
 * @LastEditors: zd
 * @LastEditTime: 2023-03-04 08:07:53
 * @Description:
 */
const userRouter = require('./user')
const yearRouter = require('./year')

module.exports = app => {
  app.use('/user', userRouter)
  app.use('/year', yearRouter)
}
