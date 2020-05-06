// 开发文档 https://cn.eslint.org/docs/developer-guide/working-with-rules#the-context-object
// 自定义事件属性名称 handle[]：如：@change="handleChange"

module.exports = {
	meta: {
		type: 'suggestion',
		docs: {
			description: '自定义事件名称采用handle[]开头',
			category: ['vue-recommended'],
			recommended: true,
		}
	},
	create(context) {
		return {
		}
	}
}