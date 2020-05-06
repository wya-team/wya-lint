"use strict";

const rule = require('../../../lib/rules/user-event-name');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 7, // 默认支持语法为es5 
    },
});

ruleTester.run('user-event-name', rule, {
	valid: [
		{
			filename: 'test.vue',
			code: '<template><div v-on:click="handleClick"></div></template>'
		},
		{
			filename: 'test.vue',
			code: '<template><div @click="handleClick"></div></template>'
		}
	],
	invalid: [
		{
			filename: 'test.vue',
			code: '<template><div v-on:click="onClick"></div></template>',
			output: '<template><div v-on:click="handleClick"></div></template>',
			errors: ["Expected function name start width handle"]
		},
		{
			filename: 'test.vue',
			code: '<template><div @click="onClick"></div></template>',
			output: '<template><div @click="handleClick"></div></template>',
			errors: ["Expected function name start width handle"]
		},
	]
})