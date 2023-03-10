/**
 * 在这里定义和用户相关的路由处理函数，供 /router/user.js 模块进行调用
 */
// 导入数据库操作模块
const db = require('../db/index')
// 导入密码加密模块
const bcrypt = require('bcryptjs')
// 用这个包来生成 Token 字符串
const jwt = require('jsonwebtoken')
// 导入配置文件
const config = require('../config')


// 注册用户的处理函数
exports.regUser = (req, res) => {
    // 接收表单数据
    const userinfo = req.body
    console.log(userinfo);
    // 判断数据是否合法
    // if (!userinfo.username || !userinfo.password) {
    //     // return res.send({ status: 0, message: '用户名或密码不能为空！' })
    //     return res.cc('用户名或密码不能为空！')
    // }
    // if (!userinfo.type) {
    //   return res.cc('用户类型不能为空！')
    // }
    // 执行 SQL 语句并根据结果判断用户名是否被占用
    const sql = `select * from ev_users where username=?`
    db.query(sql, userinfo.username, function (err, results) {
        // 执行 SQL 语句失败
        if (err) {
          // return res.send({ status: 0, message: err.message })
          return res.cc(err)
        }
        // 如果查询出来的数据大于0，则数据库中存在用户，用户名被占用
        if (results.length > 0) {
          // return res.send({ status: 0, message: '用户名被占用，请更换其他用户名！' })
          return res.cc('用户名被占用，请更换其他用户名！')
        }
        // 调用 bcrypt.hashSync(明文密码, 随机盐的长度) 方法，对用户的密码进行加密处理
        // 对用户的密码,进行 bcrype 加密，返回值是加密之后的密码字符串
        // userinfo.password = bcrypt.hashSync(userinfo.password, 10)
        console.log(userinfo);
        // 定义插入用户的 SQL 语句
        const sql = 'insert into ev_users set ?'
        // 插入新用户
        db.query(sql, { username: userinfo.username, password: userinfo.password, type:  userinfo.type}, function (err, results) {
            // 执行 SQL 语句失败
            if (err) return res.send({ status: 1, message: err.message })
            // SQL 语句执行成功，但影响行数不为 1
            if (results.affectedRows !== 1) {
              // return res.send({ status: 0, message: '注册用户失败，请稍后再试！' })
              return res.cc('注册用户失败，请稍后再试！')
            }
            // 注册成功
            // res.send({ status: 1, message: '注册成功！' })
            return res.cc('注册成功！', 1)
          })
          
      })      
  }
  
  // 登录的处理函数
  exports.login = (req, res) => {
    // 接收表单数据
    const userinfo = req.body
    console.log(userinfo);
    // if (!userinfo.username || !userinfo.password) {
    //     return res.cc('用户名或密码不能为空！')
    // }
    // if (!userinfo.type) {
    //   return res.cc('用户类型不能为空！')
    // }
    // 定义 SQL 语句
    const sql = `select * from ev_users where username=?`
    // 执行 SQL 语句，查询用户的数据
    db.query(sql, userinfo.username, function (err, results) {
      // 执行 SQL 语句失败
      if (err) return res.cc(err)
      // 执行 SQL 语句成功，但是查询到数据条数不等于 1
      if (results.length !== 1) return res.cc('用户名错误！')
      // TODO：判断用户输入的登录密码是否和数据库中的密码一致
      // 拿着用户输入的密码,和数据库中存储的密码进行对比
      // const compareResult = bcrypt.compareSync(userinfo.password, results[0].password)
      // const typeResult = bcrypt.compareSync(userinfo.type, results[0].type)

      // 如果对比的结果等于 false, 则证明用户输入的密码错误
      if (userinfo.password !== results[0].password || userinfo.type != results[0].type) {
        return res.cc('登录密码或用户类型错误！')
      }

      // TODO：登录成功，生成 Token 字符串
      // 剔除完毕之后，user 中只保留了用户的 id, username, nickname, email,type 这四个属性的值
      const user = { ...results[0], password: '', user_pic: '' }

      // 生成 Token 字符串
      const tokenStr = jwt.sign(user, config.jwtSecretKey, {
        expiresIn: config.expiresIn, // token 有效期为 10 个小时
      })

      res.send({
        status: 1,
        message: '登录成功！',
        // 为了方便客户端使用 Token，在服务器端直接拼接上 Bearer 的前缀
        token: 'Bearer ' + tokenStr,
      })
    })
  }

    // 更新用户头像的处理函数
exports.updateAvatar = (req, res) => {
  console.log(req.body);
    const sql = 'update ev_users set user_pic=? where username=?'
    db.query(sql, [req.body.user_pic, req.body.username], (err, results) => {
        // 执行 SQL 语句失败
        if (err) return res.cc(err)
      
        // 执行 SQL 语句成功，但是影响行数不等于 1
        if (results.affectedRows !== 1) return res.cc('更新头像失败！')
      
        // 更新用户头像成功
        return res.cc('更新头像成功！', 1)
      })
      
  }
  