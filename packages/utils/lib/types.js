"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPropAbsent = exports.isElement = exports.isEmpty = exports.isUndefined = exports.isVNode = exports.isSymbol = exports.isPromise = exports.isDate = exports.isString = exports.isObject = exports.isFunction = exports.isArray = void 0;
const shared_1 = require("@vue/shared");
const lodash_unified_1 = require("lodash-unified");
var shared_2 = require("@vue/shared");
Object.defineProperty(exports, "isArray", { enumerable: true, get: function () { return shared_2.isArray; } });
Object.defineProperty(exports, "isFunction", { enumerable: true, get: function () { return shared_2.isFunction; } });
Object.defineProperty(exports, "isObject", { enumerable: true, get: function () { return shared_2.isObject; } });
Object.defineProperty(exports, "isString", { enumerable: true, get: function () { return shared_2.isString; } });
Object.defineProperty(exports, "isDate", { enumerable: true, get: function () { return shared_2.isDate; } });
Object.defineProperty(exports, "isPromise", { enumerable: true, get: function () { return shared_2.isPromise; } });
Object.defineProperty(exports, "isSymbol", { enumerable: true, get: function () { return shared_2.isSymbol; } });
var vue_1 = require("vue");
Object.defineProperty(exports, "isVNode", { enumerable: true, get: function () { return vue_1.isVNode; } });
const isUndefined = (val) => val === undefined;
exports.isUndefined = isUndefined;
const isEmpty = (val) => (!val && val !== 0)
    || ((0, shared_1.isArray)(val) && val.length === 0)
    || ((0, shared_1.isObject)(val) && !Object.keys(val).length);
exports.isEmpty = isEmpty;
const isElement = (e) => {
    if (typeof Element === 'undefined')
        return false;
    return e instanceof Element;
};
exports.isElement = isElement;
const isPropAbsent = (prop) => {
    return (0, lodash_unified_1.isNil)(prop);
};
exports.isPropAbsent = isPropAbsent;
