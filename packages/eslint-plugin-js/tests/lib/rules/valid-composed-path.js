const rule = require("../../../lib/rules/valid-composed-path"); // 引入rule
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester({
	parserOptions: {
		ecmaVersion: 7, // 默认支持语法为es5 
	},
});

ruleTester.run('valid-composed-path', rule, {
	valid: [
		{
			code: 'e.composedPath && e.composedPath();'
		},
		{
			code: 'composedPath();'
		},
	],
	invalid: [
		{
			code: 'e.composedPath();',
			output: 'e.composedPath && e.composedPath();',
			errors: [{
				message: 'composedPath在IOS10以下为空，建议加上非空校验', // 与rule抛出的错误保持一致
				type: 'CallExpression' // rule监听的对应钩子
			}]
		}
	]
});