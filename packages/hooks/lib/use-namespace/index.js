"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNamespace = exports.useCreateComponentName = exports.firstLetterToUpperCase = exports.camelize = exports.setGlobalZIndex = exports.getNextGlobalId = exports.getNextGlobalZIndex = exports.useComponentNameFormat = void 0;
const constants_1 = require("@cz-coco/constants");
const vue_1 = require("vue");
const useComponentNameFormat = (cname) => {
    if (!cname.startsWith(constants_1.cst.COMPONENT_NAMESPACE_PREFIX))
        return cname;
    const compName = cname.toLowerCase();
    return `${constants_1.cst.NAMESPACE_PREFIX}-${compName.replace(constants_1.cst.NAMESPACE_PREFIX, '')}`;
};
exports.useComponentNameFormat = useComponentNameFormat;
const globalZIndex = (0, vue_1.ref)(constants_1.cst.INITIAL_GLOBAL_Z_INDEX);
const globalId = (0, vue_1.ref)(constants_1.cst.INITIAL_ID);
const getNextGlobalZIndex = () => {
    return globalZIndex.value + 1;
};
exports.getNextGlobalZIndex = getNextGlobalZIndex;
const getNextGlobalId = () => globalId.value + 1;
exports.getNextGlobalId = getNextGlobalId;
const setGlobalZIndex = (val) => {
    globalZIndex.value = val;
};
exports.setGlobalZIndex = setGlobalZIndex;
const camelize = (str) => {
    return str.replace(/-(\w)/g, (_, c) => c.toUpperCase());
};
exports.camelize = camelize;
function firstLetterToUpperCase(str) {
    return str.replace(/^[a-z]/, firstLetter => firstLetter.toUpperCase());
}
exports.firstLetterToUpperCase = firstLetterToUpperCase;
function useCreateComponentName(cname) {
    const ns = firstLetterToUpperCase(constants_1.cst.COMPONENT_NAMESPACE_PREFIX);
    const componentName = firstLetterToUpperCase(cname);
    return `${ns}${componentName}`;
}
exports.useCreateComponentName = useCreateComponentName;
const _bem = (namespace, block, blockSuffix, element, modifier) => {
    let cls = `${namespace}-${block}`;
    if (blockSuffix) {
        cls += `-${blockSuffix}`;
    }
    if (element) {
        cls += `__${element}`;
    }
    if (modifier) {
        cls += `--${modifier}`;
    }
    return cls;
};
const useNamespace = (block) => {
    const namespace = (0, vue_1.computed)(() => constants_1.cst.NAMESPACE_PREFIX);
    const b = (blockSuffix = '') => _bem((0, vue_1.unref)(namespace), block, blockSuffix, '', '');
    const e = (element) => (element ? _bem((0, vue_1.unref)(namespace), block, '', element, '') : '');
    const m = (modifier) => (modifier ? _bem((0, vue_1.unref)(namespace), block, '', '', modifier) : '');
    const be = (blockSuffix, element) => (blockSuffix && element
        ? _bem((0, vue_1.unref)(namespace), block, blockSuffix, element, '')
        : '');
    const em = (element, modifier) => (element && modifier
        ? _bem((0, vue_1.unref)(namespace), block, '', element, modifier)
        : '');
    const bm = (blockSuffix, modifier) => (blockSuffix && modifier
        ? _bem((0, vue_1.unref)(namespace), block, blockSuffix, '', modifier)
        : '');
    const bem = (blockSuffix, element, modifier) => (blockSuffix && element && modifier
        ? _bem((0, vue_1.unref)(namespace), block, blockSuffix, element, modifier)
        : '');
    const is = (name, ...args) => {
        const state = args.length >= 1 ? args[0] : true;
        return name && state ? `${constants_1.cst.STATE_PREFIX}${name}` : '';
    };
    return {
        namespace,
        b,
        e,
        m,
        be,
        em,
        bm,
        bem,
        is
    };
};
exports.useNamespace = useNamespace;
