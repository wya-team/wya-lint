const rule = require("../../../lib/rules/func-arguments"); // 引入rule
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester({
	parserOptions: {
		ecmaVersion: 7, // 默认支持语法为es5 
	},
});

ruleTester.run('func-arguments', rule, {
	valid: [
		
	],
	invalid: [
		
	]
});