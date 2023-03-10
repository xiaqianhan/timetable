/**
 * 投诉邮箱处理模块
 */
// 导入数据库操作模块
const db = require('../db/index')

// 管理员获取收取信息列表数据的处理函数
exports.getdeanMailbox = (req, res) => {
    const sql = 'select * from ev_negativemailbox'

    db.query(sql, (err, results) => {
        // 1. 执行 SQL 语句失败
        if (err) return res.cc(err)
        
        // 2. 执行 SQL 语句成功
        res.send({
            status: 1,
            message: '获取管理员邮箱列表数据成功！',
            data: results,
        })
    })
  }

// 向管理员发送信息数据的处理函数
exports.adddeanMailbox = (req, res) => {
    // res.send(req.body);

    // 新增列表数据
    const sqls = `insert into ev_negativemailbox set ?`

    db.query(sqls, req.body, (err, results) => {
        // 1. 执行 SQL 语句失败
        if (err) return res.cc(err)
    
        // 2. 执行 SQL 语句成功
        res.send({
            status: 1,
            message: '新增管理员邮箱信息成功！',
            data: results,
        })
    })
}

// 根据信息编号修改信息数据的处理函数
exports.adddeanModify = (req, res) => {
    // res.send(req.body);

    // 修改信息状态数据
    const sqls = 'update ev_negativemailbox set isreply=? where tid=?'
    console.log(req.body);
    db.query(sqls, [req.body.isreply, req.body.tid], (err, results) => {
        // 1. 执行 SQL 语句失败
        if (err) return res.cc(err)
    
        // 2. 执行 SQL 语句成功
        res.send({
            status: 1,
            message: '修改管理员邮箱信息状态成功！',
            data: results,
        })
    })
}


// 根据用户账号查询数据的处理函数
exports.see = (req, res) => {
    // res.send(req.body);

    // 修改信息状态数据
    const sqls = 'select * from ev_negativemailbox where username=?'
    console.log(req.body);
    db.query(sqls, req.body.username, (err, results) => {
        // 1. 执行 SQL 语句失败
        if (err) return res.cc(err)
    
        // 2. 执行 SQL 语句成功
        res.send({
            status: 1,
            message: '修改管理员邮箱信息状态成功！',
            data: results,
        })
    })
}