/*
 * @Author: zd
 * @Date: 2022-10-08 18:48:30
 * @LastEditors: zd
 * @LastEditTime: 2022-10-08 18:57:23
 * @Description:
 */
const userRouter = require('./user')

module.exports = app => {
  app.use('/user', userRouter)
}
