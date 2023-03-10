// 个人邮箱模块
const express = require('express')
const router = express.Router()

// 导入用户路由处理函数模块
const noticeHandler = require('../router_handler/myEmail')

// 个人邮箱收取信息列表数据
router.post('/myemail', noticeHandler.getmyEmail)

// 管理员回复信息数据
router.post('/myemail/add', noticeHandler.addmyEmail)

module.exports = router
