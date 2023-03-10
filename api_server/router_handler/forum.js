/**
 * 论坛列表处理模块
 */
// 导入数据库操作模块
const db = require('../db/index')

// 获取论坛首页列表数据的处理函数
exports.getforum = (req, res) => {
    const sql = 'select * from ev_forum'

    db.query(sql, req.body.username, (err, results) => {
        // 1. 执行 SQL 语句失败
        if (err) return res.cc(err)
        
        // 2. 执行 SQL 语句成功
        res.send({
            status: 1,
            message: '获取论坛列表数据成功！',
            data: results,
        })
    })
  }

// 增加论坛首页话题的处理函数
exports.addforum = (req, res) => {
    // res.send(req.body);

    // 定义查询话题编号是否被占用的 SQL 语句
    const sql = `select * from ev_forum where conversation=?`

    db.query(sql, req.body.conversation, (err, results) => {
        // 1. 执行 SQL 语句失败
        if (err) return res.cc(err)
        
        // 2. 执行 SQL 语句成功
        // 话题编号被占用
        if (results.length >= 1) return res.cc('话题编号生成有误，请稍后重试！')

        // 新增论坛列表数据
        const sqls = `insert into ev_forum set ?`

        db.query(sqls, req.body, (err, results) => {
            // 1. 执行 SQL 语句失败
            if (err) return res.cc(err)
        
            // 2. 执行 SQL 语句成功
            res.send({
                status: 1,
                message: '新增论坛信息成功！',
                data: results,
            })
        })
    })
}

// 修改论坛首页列表数据的处理函数,type为类型，1为点赞，2为品论，3为转发
exports.updateData = (req, res) => {
    console.log(req.body);
    let sql = ""
    if (req.body.type == 1) {
        sql = 'update ev_forum set thumbsUp=? where conversation=?'
    } else if (req.body.type == 2) {
        sql = 'update ev_forum set commentNum=? where conversation=?'
    } else if (req.body.type == 3) {
        sql = 'update ev_forum set forwardNum=? where conversation=?'
    }
    db.query(sql, [req.body.data, req.body.conversation], (err, results) => {
    // 执行 SQL 语句失败
    if (err) return res.cc(err)
    
    // 执行 SQL 语句成功，但是影响行数不等于 1
    if (results.affectedRows !== 1) return res.cc('更新数据失败！')
    
    // 更新数据成功
    return res.cc('更新数据成功！', 1)
    })
}

// // 修改论坛首页列表数据的处理函数(评论)
// exports.updateCommentNum = (req, res) => {
//     const sql = 'update ev_forum set commentNum=? where conversation=?'
//     db.query(sql, [req.body.thumbsUp, req.user.conversation], (err, results) => {
//     // 执行 SQL 语句失败
//     if (err) return res.cc(err)
    
//     // 执行 SQL 语句成功，但是影响行数不等于 1
//     if (results.affectedRows !== 1) return res.cc('更新数据失败！')
    
//     // 更新评论量成功
//     return res.cc('更新数据成功！', 1)
//     })
// }

// // 修改论坛首页列表数据的处理函数(转发)
// exports.updateForwardNum = (req, res) => {
//     const sql = 'update ev_forum set forwardNum=? where conversation=?'
//     db.query(sql, [req.body.thumbsUp, req.user.conversation], (err, results) => {
//     // 执行 SQL 语句失败
//     if (err) return res.cc(err)
    
//     // 执行 SQL 语句成功，但是影响行数不等于 1
//     if (results.affectedRows !== 1) return res.cc('更新数据失败！')
    
//     // 更新转发量成功
//     return res.cc('更新数据成功！', 1)
//     })
// }

// 增加暂存论坛首页话题的处理函数
exports.staging = (req, res) => {
    // res.send(req.body);

    // 新增论坛列表数据
    const sqls = `insert into huihuacunqu set ?`

    db.query(sqls, req.body, (err, results) => {
        // 1. 执行 SQL 语句失败
        if (err) return res.cc(err)
    
        // 2. 执行 SQL 语句成功
        res.send({
            status: 1,
            message: '新增暂存论坛信息成功！',
            data: results,
        })
    })
}

// 获取暂存论坛首页话题的处理函数
exports.getStaging = (req, res) => {
    // res.send(req.body);

    // 获取暂存论坛列表数据
    const sql = 'select * from huihuacunqu'

    db.query(sql, (err, results) => {
        // 1. 执行 SQL 语句失败
        if (err) return res.cc(err)
    
        // 2. 执行 SQL 语句成功
        res.send({
            status: 1,
            message: '获取暂存论坛信息成功！',
            data: results,
        })
    })
}