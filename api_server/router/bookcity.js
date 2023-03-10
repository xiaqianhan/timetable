// 书城商品列表模块
const express = require('express')
const router = express.Router()

// 导入用户路由处理函数模块
const noticeHandler = require('../router_handler/bookcity')

// 获取商城所有书籍列表数据
router.get('/bookcity', noticeHandler.getBookList)

// 增加商城书籍列表数据
router.post('/bookcity/add', noticeHandler.addBookList)

// 删除商城书籍列表数据
router.post('/bookcity/delete', noticeHandler.deleteBook)

// 根据发布人账户查询商城书籍列表数据
router.post('/bookcity/selectName', noticeHandler.getBookListName)

// 根据书籍类型查询商城书籍列表数据
router.post('/bookcity/selectType', noticeHandler.getBookListType)

// 修改商城书籍销售量
router.post('/bookcity/updateSell', noticeHandler.updateSell)

module.exports = router