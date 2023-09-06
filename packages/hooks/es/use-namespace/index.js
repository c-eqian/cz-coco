import { cst } from '@cz-coco/constants';
import { ref, computed, unref } from 'vue';
export const useComponentNameFormat = (cname) => {
    if (cname && cname.startsWith(cst.COMPONENT_NAMESPACE_PREFIX))
        return cname;
    const compName = cname.toLowerCase();
    return `${cst.NAMESPACE_PREFIX}-${compName.replace(cst.NAMESPACE_PREFIX, '')}`;
};
const globalZIndex = ref(cst.INITIAL_GLOBAL_Z_INDEX);
const globalId = ref(cst.INITIAL_ID);
export const getNextGlobalZIndex = () => {
    return globalZIndex.value + 1;
};
export const getNextGlobalId = () => globalId.value + 1;
export const setGlobalZIndex = (val) => {
    globalZIndex.value = val;
};
export const camelize = (str) => {
    return str.replace(/-(\w)/g, (_, c) => c.toUpperCase());
};
export function firstLetterToUpperCase(str) {
    return str.replace(/^[a-z]/, firstLetter => firstLetter.toUpperCase());
}
export function useCreateComponentName(cname) {
    const ns = firstLetterToUpperCase(cst.COMPONENT_NAMESPACE_PREFIX);
    const componentName = firstLetterToUpperCase(cname);
    return `${ns}${componentName}`;
}
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
export const useNamespace = (block) => {
    const namespace = computed(() => cst.NAMESPACE_PREFIX);
    const b = (blockSuffix = '') => _bem(unref(namespace), block, blockSuffix, '', '');
    const e = (element) => (element ? _bem(unref(namespace), block, '', element, '') : '');
    const m = (modifier) => (modifier ? _bem(unref(namespace), block, '', '', modifier) : '');
    const be = (blockSuffix, element) => (blockSuffix && element
        ? _bem(unref(namespace), block, blockSuffix, element, '')
        : '');
    const em = (element, modifier) => (element && modifier
        ? _bem(unref(namespace), block, '', element, modifier)
        : '');
    const bm = (blockSuffix, modifier) => (blockSuffix && modifier
        ? _bem(unref(namespace), block, blockSuffix, '', modifier)
        : '');
    const bem = (blockSuffix, element, modifier) => (blockSuffix && element && modifier
        ? _bem(unref(namespace), block, blockSuffix, element, modifier)
        : '');
    const is = (name, ...args) => {
        const state = args.length >= 1 ? args[0] : true;
        return name && state ? `${cst.STATE_PREFIX}${name}` : '';
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
