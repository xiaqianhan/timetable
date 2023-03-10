// 论坛列表模块
const express = require('express')
const router = express.Router()

// 导入用户路由处理函数模块
const noticeHandler = require('../router_handler/mybookList')

// 获取我的商品列表数据
router.post('/mybook', noticeHandler.getMybook)

// 添加我的商品列表数据
router.post('/mybook/add', noticeHandler.addMybook)

// 删除我的商品列表数据
router.post('/mybook/delete', noticeHandler.delete)

// 修改商品购买量
router.post('/mybook/revise', noticeHandler.updateData)

module.exports = router