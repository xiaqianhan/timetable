/**
 * 书城商品列表处理模块
 */
// 导入数据库操作模块
const db = require('../db/index')

// 获取书城所有列表数据的处理函数
exports.getBookList = (req, res) => {
    const sql = 'select * from ev_bookcity'

    db.query(sql, (err, results) => {
        // 1. 执行 SQL 语句失败
        if (err) return res.cc(err)
        
        // 2. 执行 SQL 语句成功
        res.send({
            status: 1,
            message: '获取书城商品列表数据成功！',
            data: results,
        })
    })
  }

  // 根据书籍类型获取书城所有列表数据的处理函数
exports.getBookListType = (req, res) => {
    const sql = 'select * from ev_bookcity  where bookType=?'

    db.query(sql, req.body.bookType, (err, results) => {
        // 1. 执行 SQL 语句失败
        if (err) return res.cc(err)
        
        // 2. 执行 SQL 语句成功
        res.send({
            status: 1,
            message: '获取书城商品列表数据成功！',
            data: results,
        })
    })
  }

// 根据发布人账号获取书城所有列表数据的处理函数
exports.getBookListName = (req, res) => {
    const sql = 'select * from ev_bookcity  where username=?'

    db.query(sql, req.body.username, (err, results) => {
        // 1. 执行 SQL 语句失败
        if (err) return res.cc(err)
        
        // 2. 执行 SQL 语句成功
        res.send({
            status: 1,
            message: '获取书城商品列表数据成功！',
            data: results,
        })
    })
  }

  // 添加书城商品列表数据的处理函数
  exports.addBookList = (req, res) => {
    // res.send(req.body);

    // 定义查询话题编号是否被占用的 SQL 语句
    const sql = `select * from ev_bookcity where bookNumber=?`
    // console.log(req.body);
    // console.log("1111");

    db.query(sql, req.body.bookNumber, (err, results) => {
        // 1. 执行 SQL 语句失败
        if (err) return res.cc(err)
        // console.log("2222");
        // 2. 执行 SQL 语句成功
        // 话题编号被占用
        if (results.length >= 1) return res.cc('话题编号生成有误，请稍后重试！')

        // 新增论坛列表数据
        const sqls = `insert into ev_bookcity set ?`

        db.query(sqls, req.body, (err, results) => {
            // 1. 执行 SQL 语句失败
            if (err) return res.cc(err)
            // console.log("3333");
        
            // 2. 执行 SQL 语句成功
            res.send({
                status: 1,
                message: '新增书城商品成功！',
                data: results,
            })
        })
    })
}

// 根据书本编号和用户账号删除商品数据的处理函数
exports.deleteBook = (req, res) => {
    // res.send(req.body);
    const sql = `delete from ev_bookcity where bookNumber=? and username=?`
    // console.log(req.body);
    db.query(sql, [req.body.bookNumber,req.body.username], (err, results) => {
        // 1. 执行 SQL 语句失败
        if (err) return res.cc(err)
        
        // 2. 执行 SQL 语句成功
        res.send({
            status: 1,
            message: '删除书籍数据成功！',
            data: results,
        })
    })
  }

// 根据书籍编号修改商城书籍销售量
exports.updateSell = (req, res) => {
    const sql = 'update ev_bookcity set salesVolume=? where bookNumber=?'
    db.query(sql, [req.body.salesVolume, req.body.bookNumber], (err, results) => {
    // 执行 SQL 语句失败
    if (err) return res.cc(err)
    
    // 执行 SQL 语句成功，但是影响行数不等于 1
    if (results.affectedRows !== 1) return res.cc('更新数据失败！')
    
    // 更新评论量成功
    return res.cc('更新数据成功！', 1)
    })
}