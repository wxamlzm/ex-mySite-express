/*
 * @Author: zd
 * @Date: 2022-10-08 18:50:18
 * @LastEditors: zd
 * @LastEditTime: 2022-10-08 19:31:02
 * @Description: 用户模块工具库
 */
// 验证身份-中间件
const isAdmin = async (req, res, next) => {
  // 获取token
  const token = req.headers.authorization.split(' ')[1]
  const id = token.split('.')[0]
  const username = token.split('.')[1]
  // 查询是否存在用户
  const user = User.findById(id)
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
