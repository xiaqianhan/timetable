/**
 * 课程表列表处理模块
 */
// 导入数据库操作模块
const db = require('../db/index')

// 获取课表列表数据的处理函数
exports.getTimetable = (req, res) => {
    const sql = 'select * from ev_timetable where week=?'

    db.query(sql, req.body.week, (err, results) => {
        // 1. 执行 SQL 语句失败
        if (err) return res.cc(err)
        
        // 2. 执行 SQL 语句成功
        res.send({
            status: 1,
            message: '获取论课程表数据成功！',
            data: results,
        })
    })
  }

// 增加课程
exports.addTimetable = (req, res) => {
    // res.send(req.body);

    const sqls = `insert into ev_timetable set ?`

    db.query(sqls, req.body, (err, results) => {
        // 1. 执行 SQL 语句失败
        if (err) return res.cc(err)
    
        // 2. 执行 SQL 语句成功
        res.send({
            status: 1,
            message: '新增课表信息成功！',
            data: results,
        })
    })
}

// 根据周、周数、第几节课修改课表信息
exports.updateTimetable = (req, res) => {
    console.log(req.body);
    sql = `update ev_timetable set ? where id`
    db.query(sql, [req.body, req.body.id], (err, results) => {
    // 执行 SQL 语句失败
    if (err) return res.cc(err)

    // 执行 SQL 语句成功，但影响行数不为 1
    console.log(req.body);
    console.log(results.affectedRows);
    if (results.affectedRows !== 1) return res.cc('修改课程信息失败！')

    // 修改用户信息成功
    return res.cc('修改课程信息成功！', 1)
    })
  }

// 根据周、周数、第几节课删除课表信息
exports.deleteTimetable = (req, res) => {
    // res.send(req.body);
    const sql = `delete from ev_timetable where id=?`
    // console.log(req.body);
    db.query(sql, [req.body.id], (err, results) => {
        
        // 1. 执行 SQL 语句失败
        if (err) return res.cc(err)
        
        // 2. 执行 SQL 语句成功
        res.send({
            status: 1,
            message: '删除课表数据成功！',
            data: results,
        })
    })
  }

