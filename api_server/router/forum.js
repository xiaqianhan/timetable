// 论坛列表模块
const express = require('express')
const router = express.Router()

// 导入用户路由处理函数模块
const noticeHandler = require('../router_handler/forum')

// 获取论坛首页列表数据
router.get('/forum', noticeHandler.getforum)

// 新增论坛首页列表数据
router.post('/forum/add', noticeHandler.addforum)

// 修改论坛首页列表数据(点赞)
router.post('/forum/update', noticeHandler.updateData)

// // 修改论坛首页列表数据(评论)
// router.post('/forum/update/commentNum', noticeHandler.updateCommentNum)

// // 修改论坛首页列表数据(转发)
// router.post('/forum/update/forwardNum', noticeHandler.updateForwardNum)

// 新增暂存论坛信息列表
router.post('/zhancun/staging', noticeHandler.staging)

// 获取暂存论坛的信息列表
router.post('/zhancun/getStaging', noticeHandler.getStaging)

module.exports = router
