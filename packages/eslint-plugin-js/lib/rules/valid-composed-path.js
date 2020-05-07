// 开发文档 https://cn.eslint.org/docs/developer-guide/working-with-rules#the-context-object
// 自定义事件属性名称 handle[]：如：@change="handleChange"

module.exports = {
	meta: {
		type: 'suggestion',
		docs: {
			description: 'composedPath在IOS10以下为空，建议加上非空校验',
			category: ['recommended'],
			recommended: true,
		},
		fixable: 'code'
	},
	create(context) {
		return {
			'CallExpression': function (node) {
				const callee = node.callee;
				if (callee.type === 'MemberExpression' && callee.property.name === 'composedPath') {
					const parentNode = node.parent;
					if (parentNode.type !== 'LogicalExpression') {
						context.report({
							node,
							loc: node.loc,
							message: 'composedPath在IOS10以下为空，建议加上非空校验',
							fix: function(fixer) {
								return fixer.insertTextBeforeRange(node.range, `${callee.object.name}.composedPath && `);
							}
						});
					}
				};
			}
		}
	}
}
