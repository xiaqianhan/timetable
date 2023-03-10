// 用户信息获取模块

// 导入数据库操作模块
const db = require('../db/index')

// 获取用户基本信息的处理函数
exports.getUserInfo = (req, res) => {
    // 根据用户的 id，查询用户的基本信息
    // 注意：为了防止用户的密码泄露，需要排除 password 字段
    const sql = `select id, username, nickname, type, user_pic, email from ev_users where id=?`
    // 注意：req 对象上的 user 属性，是 Token 解析成功，express-jwt 中间件帮我们挂载上去的
    db.query(sql, req.user.id, (err, results) => {
        // 1. 执行 SQL 语句失败
        if (err) return res.cc(err)
    
        // 2. 执行 SQL 语句成功，但是查询到的数据条数不等于 1
        if (results.length !== 1) return res.cc('获取用户信息失败！')
    
        // 3. 将用户信息响应给客户端
        res.send({
        status: 0,
        message: '获取用户基本信息成功！',
        data: results[0],
        })
    })
  }

  // 更新用户基本信息的处理函数
exports.updateUserInfo = (req, res) => {
    const sql = `update ev_users set ? where id=?`
    db.query(sql, [req.body, req.user.id], (err, results) => {
    // 执行 SQL 语句失败
    if (err) return res.cc(err)

    // 执行 SQL 语句成功，但影响行数不为 1
    console.log(req.body);
    console.log(results.affectedRows);
    if (results.affectedRows !== 1) return res.cc('修改用户基本信息失败！')

    // 修改用户信息成功
    return res.cc('修改用户基本信息成功！', 1)
    })
  }
  // 重置密码的处理函数
exports.updatePassword = (req, res) => {
    // 定义根据 id 查询用户数据的 SQL 语句
    const sql = `select * from ev_users where id=?`

    // 执行 SQL 语句查询用户是否存在
    db.query(sql, req.user.id, (err, results) => {
        // 执行 SQL 语句失败
        if (err) return res.cc(err)

        // 检查指定 id 的用户是否存在
        if (results.length !== 1) return res.cc('用户不存在！')

        // TODO：判断提交的旧密码是否正确
        // 在头部区域导入 bcryptjs 后，
        // 即可使用 bcrypt.compareSync(提交的密码，数据库中的密码) 方法验证密码是否正确
        // compareSync() 函数的返回值为布尔值，true 表示密码正确，false 表示密码错误
        const bcrypt = require('bcryptjs')

        // 判断提交的旧密码是否正确
        // const compareResult = bcrypt.compareSync(req.body.oldPwd, results[0].password)
        if (req.body.oldPwd !== results[0].password) return res.cc('原密码错误！')
        // 定义更新用户密码的 SQL 语句
        const sql = `update ev_users set password=? where id=?`

        // 对新密码进行 bcrypt 加密处理
        // const newPwd = bcrypt.hashSync(req.body.newPwd, 10)

        // 执行 SQL 语句，根据 id 更新用户的密码
        db.query(sql, [req.body.newPwd, req.user.id], (err, results) => {
        // SQL 语句执行失败
        if (err) return res.cc(err)

        // SQL 语句执行成功，但是影响行数不等于 1
        if (results.affectedRows !== 1) return res.cc('更新密码失败！')

        // 更新密码成功
        res.cc('更新密码成功！', 1)
        })
    })
  }

  
  
  
  