// 话题详情列表数据模块
const express = require('express')
const router = express.Router()

// 导入用户路由处理函数模块
const noticeHandler = require('../router_handler/conversation_detailed')

// 根据话题编号查询话题列表数据
router.post('/forumDetailed', noticeHandler.getforumDetailed)

// 新增话题列表数据
router.post('/forumDetailed/add', noticeHandler.addforumDetailed)

module.exports = router
