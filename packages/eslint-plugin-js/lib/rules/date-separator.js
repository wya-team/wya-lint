// 开发文档 https://cn.eslint.org/docs/developer-guide/working-with-rules#the-context-object
// 自定义事件属性名称 handle[]：如：@change="handleChange"

module.exports = {
	meta: {
		type: 'suggestion',
		docs: {
			description: '字符串日期禁止使用"-"作为分隔符，在IOS内会报错',
			category: ['recommended'],
			recommended: true,
		},
		fixable: 'code'
	},
	create(context) {
		return {
			'NewExpression': function (node) {
				if (node.callee.name !== 'Date') return;
				const dateNode = node.arguments && node.arguments[0];
				if (!dateNode) return
				if (dateNode.type === 'Literal' && /^\d{4}-\d{2}-\d{2}( \d{1,2}:(\d{1,2}(:\d{1,2})?)?)?$/.test(dateNode.value)) {
					context.report({
						node,
						loc: dateNode.loc,
						message: '字符串日期禁止使用"-"作为分隔符，在IOS内会报错',
						fix: function(fixer) {
							return fixer.replaceTextRange(dateNode.range, dateNode.raw.replace(/-/g, '/'));
						}
                    })
				}
			}
		}
	}
}
