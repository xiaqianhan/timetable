/**
 * 我的商品列表处理模块
 */
// 导入数据库操作模块
const db = require('../db/index')

// 获取我的商品列表数据的处理函数
exports.getMybook = (req, res) => {
    const sql = 'select * from ev_mybook  where username=?'

    db.query(sql, req.body.username, (err, results) => {
        // 1. 执行 SQL 语句失败
        if (err) return res.cc(err)
        
        // 2. 执行 SQL 语句成功
        res.send({
            status: 1,
            message: '获取商品列表数据成功！',
            data: results,
        })
    })
  }

// 添加我的商品列表数据的处理函数
exports.addMybook = (req, res) => {
    // res.send(req.body);

    // 定义查询话题编号是否被占用的 SQL 语句
    const sql = `select * from ev_mybook where bookNumber=?`

    db.query(sql, req.body.bookNumber, (err, results) => {
        // 1. 执行 SQL 语句失败
        if (err) return res.cc(err)
        
        // 2. 执行 SQL 语句成功
        // 商品编号被占用
        if (results.length >= 1) return res.cc('该商品已添加至购物车，请直接进行数据操作！')

        // 新增论坛列表数据
        const sqls = `insert into ev_mybook set ?`

        db.query(sqls, req.body, (err, results) => {
            // 1. 执行 SQL 语句失败
            if (err) return res.cc(err)
        
            // 2. 执行 SQL 语句成功
            res.send({
                status: 1,
                message: '新增书本信息成功！',
                data: results,
            })
        })
    })
}

// 修改商品购买量的处理函数
exports.updateData = (req, res) => {
    console.log(req.body);
    sql = 'update ev_mybook set purchase=? where bookNumber=? and username=?'
    db.query(sql, [req.body.purchase, req.body.bookNumber, req.body.username], (err, results) => {
    // 执行 SQL 语句失败
    if (err) return res.cc(err)
    
    // 执行 SQL 语句成功，但是影响行数不等于 1
    if (results.affectedRows !== 1) return res.cc('更新数据失败！')
    
    // 更新数据成功
    return res.cc('更新数据成功！', 1)
    })
}

// 删除我的商品列表数据的处理函数
exports.delete = (req, res) => {
    // res.send(req.body);

    // 根据书籍编号与用户账号删除书籍列表数据
    const sql = `delete from ev_mybook where bookNumber=? and username=?`

    db.query(sql, [req.body.bookNumber, req.body.username], (err, results) => {
        // 1. 执行 SQL 语句失败
        if (err) return res.cc(err)
    
        // 2. 执行 SQL 语句成功
        res.send({
            status: 1,
            message: '删除书籍信息成功！',
            data: results,
        })
    })
}
