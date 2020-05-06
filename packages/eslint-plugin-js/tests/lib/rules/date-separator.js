const rule = require("../../../lib/rules/date-separator"); // 引入rule
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 7, // 默认支持语法为es5 
    },
});

ruleTester.run('date-separator', rule, {
	// 正确的用例
	valid: [
		{
			code: 'const date = new Date("2020/01/01")'
		}
	],
	// 错误的用例
	invalid: [
		{
			code: 'const date = new Date("2020-01-01")',
			output: 'const date = new Date("2020/01/01")',
			errors: [{
                message: '字符串日期禁止使用"-"作为分隔符，在IOS内会报错', // 与rule抛出的错误保持一致
                type: 'NewExpression' // rule监听的对应钩子
            }]
		}
	]
})