/*
 * @Author: zd
 * @Date: 2022-10-08 18:48:30
 * @LastEditors: zd
 * @LastEditTime: 2022-10-08 18:54:45
 * @Description: 
 */
const userRouter = require('./user')
const motiveRouter = require('./motive')

module.exports = app => {
  app.use('/user', userRouter)
}
