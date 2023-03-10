/**
 * 话题详情列表数据处理模块
 */
// 导入数据库操作模块
const db = require('../db/index')

// 根据话题编号查询话题列表数据处理函数
exports.getforumDetailed = (req, res) => {
    const sql = 'select * from ev_forumdetailed where conversation=?'

    db.query(sql, req.body.conversation, (err, results) => {
        // 1. 执行 SQL 语句失败
        if (err) return res.cc(err)
        
        // 2. 执行 SQL 语句成功
        res.send({
            status: 1,
            message: '获取话题列表数据成功！',
            data: results,
        })
    })
  }

// 新增话题列表数据处理函数
exports.addforumDetailed = (req, res) => {
    // res.send(req.body);

    // 新增论坛列表数据
    const sqls = `insert ev_forumdetailed set ?`

    db.query(sqls, req.body, (err, results) => {
        // 1. 执行 SQL 语句失败
        if (err) return res.cc(err)
    
        // 2. 执行 SQL 语句成功
        res.send({
            status: 1,
            message: '新增话题数据信息成功！',
            data: results,
        })
    })
}