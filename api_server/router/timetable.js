// 课程表模块
const express = require('express')
const router = express.Router()

// 导入用户路由处理函数模块
const noticeHandler = require('../router_handler/timetable')

// 跟据周数获取课表
router.post('/timetable', noticeHandler.getTimetable)

// 增加课程
router.post('/timetable/add', noticeHandler.addTimetable)

// 根据周、周数、第几节课修改课表信息
router.post('/timetable/update', noticeHandler.updateTimetable)

// 根据周、周数、第几节课删除课表信息
router.post('/timetable/delete', noticeHandler.deleteTimetable)

module.exports = router
