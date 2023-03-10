// 讯息通知处理模块
const joi = require("joi")
/**
 * string() 值必须是字符串
 * alphanum() 值只能是包含 a-zA-Z0-9 的字符串
 * min(length) 最小长度
 * max(length) 最大长度
 * required() 值是必填项，不能为 undefined
 * pattern(正则表达式) 值必须符合正则表达式的规则
 */

// 用户名的验证规则
const title = joi.string().required()
// 通知类型验证规则
const type = joi.required()
// 新增讯息通知的验证规则对象
exports.add_notice_schema = {
  // 表示需要对 req.body 中的数据进行验证
  body: {
    title,
    content: title,
    publisher: title,
    type: type,
    timer: title
  },
}