// 投诉邮箱模块
const express = require('express')
const router = express.Router()

// 导入用户路由处理函数模块
const noticeHandler = require('../router_handler/negative_mailbox')

// 管理员获取收取信息列表数据
router.get('/deanMailbox', noticeHandler.getdeanMailbox)

// 向管理员发送信息数据
router.post('/deanMailbox/add', noticeHandler.adddeanMailbox)

// 修改信息状态
router.post('/deanMailbox/modify', noticeHandler.adddeanModify)

// 查看个人发送的邮箱
router.post('/deanMailbox/see', noticeHandler.see)

module.exports = router
