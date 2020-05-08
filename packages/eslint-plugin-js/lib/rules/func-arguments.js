// 开发文档 https://cn.eslint.org/docs/developer-guide/working-with-rules#the-context-object
// 自定义事件属性名称 handle[]：如：@change="handleChange"

module.exports = {
	meta: {
		type: 'suggestion',
		docs: {
			description: '方法参数不能超过4个',
			category: ['recommended'],
			recommended: true,
		},
		fixable: 'code'
	},
	create(context) {
		return {
			'CallExpression': function (node) {
				
			}
		}
	}
}
