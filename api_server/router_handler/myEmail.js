/**
 * 管理员邮箱处理模块
 */
// 导入数据库操作模块
const db = require('../db/index')

// 个人邮箱根据username收取信息列表数据的处理函数
exports.getmyEmail = (req, res) => {
    const sql = 'select * from ev_myemail where username=?'

    db.query(sql, req.body.username, (err, results) => {
        // 1. 执行 SQL 语句失败
        if (err) return res.cc(err)
        
        // 2. 执行 SQL 语句成功
        res.send({
            status: 1,
            message: '获取邮箱列表数据成功！',
            data: results,
        })
    })
  }

// 管理员根据管理员邮箱信息tid回复信息数据的处理函数
exports.addmyEmail = (req, res) => {
    // res.send(req.body);

    // 新增论坛列表数据
    const sqls = `insert into ev_myemail set ?`

    db.query(sqls, req.body, (err, results) => {
        // 1. 执行 SQL 语句失败
        if (err) return res.cc(err)
    
        // 2. 执行 SQL 语句成功
        res.send({
            status: 1,
            message: '新增邮箱信息成功！',
            data: results,
        })
    })
}