/**
 * @fileoverview 微一案Vue校验
 * @author jd
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = {
    'user-event-name': require('./rules/user-event-name')
};


// 推荐的规则设置
module.exports.configs = {
    recommended: require('./config/recommended')
}

// import processors
module.exports.processors = {

    // add your processors here
};

