# wya-lint
微一案代码检查工具

## TODO
+ js的eslint规则
+ vue的eslint规则
+ 小程序的eslint规则(todo: 开发语法高亮)
+ StyleLint
+ 其他语言的eslint规则

## Vue的Eslint规则
- 文件名全部采用连接符 “-”
- 自定义事件属性名称 handle[]：如：@change="handleChange"。
- 自定义组件发射的事件名称不要带 on-。(fix)
- mutation命名规格，有没有用`GET`、`POST`、`DELETE`、`PUT`结尾
- Vue组件的`name`要有。(fix)
- 在非`tpl`文件夹内不允许使用`tpl`命名组件
- 路由校验？？？？
- vue中属性为空时就删除掉，像data() {return {}}, created() {}, methods{} (fix)
- container内不允许有网络请求
- Modal.content 使用jsx，不要使用字符串
- 使用===、!== 来判断(js里面应该有这个配置)
- 使用的方法没有引用进来，或者引用进来的方法没有使用过
- button要有type属性，默认‘button’,避免在除了IE的浏览器内type变为submit导致触发form表单提交
- span上加点击事件要校验有没有给span设置cursor: pointer属性


## StyleLint
- 组件的命名规则
- 使用了100vh
- 设置了left: 0; width: 100%，但没有设置right: 0
- 固定定位或绝对定位，left\right，top\bottom，两个方向上必须要设置一个
- 样式的顺序
- 颜色采用大写
- 


## JS的ESlint规则
- new Date('2020-10-10')在IOS上会报Invalid Date
- e.composedPath该方法是否为空的校验

## .wya的ESLint规则

