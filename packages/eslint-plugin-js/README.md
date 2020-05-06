# eslint-plugin-wya-js

微一案JS校验

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-wya-js`:

```
$ npm install eslint-plugin-wya-js --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-wya-js` globally.

## Usage

Add `wya-js` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "wya-js"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "wya-js/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





