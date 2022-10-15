/*
 * @Descripttion: 
 * @version: 
 * @Author: 十三
 * @Date: 2022-10-15 00:59:41
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-15 01:16:41
 */
import * as cst from './constant';
import { ref } from 'vue';
/**
 * 全局z-index
 */
const globalZIndex = ref<number>(cst.INITIAL_GLOBAL_Z_INDEX);
/**
 * 全局id
 */
const globalId = ref<number>(cst.INITIAL_ID);

/** 全局 z-index 自动自增 */
export const getNextGlobalZIndex = () => ++globalZIndex.value;

/** 设置全局 z-index */
export const setGlobalZIndex = (val: number) => {
  globalZIndex.value = val;
};

/**
 * 短杆拼接转大写
 * @param str
 * @returns
 * test-icon => testIcon
 */
 export const camelize = (str: string): string => {
  return str.replace(/-(\w)/g, (_, c) => c.toUpperCase());
};

/**
 * 首字母转大写
 * @param str
 * @returns
 */
 export function firstLetterToUpperCase(str: string): string {
  return str.replace(/^[a-z]/, (firstLetter) => firstLetter.toUpperCase());
}

/**
 * 创建组件名称
 * @param cname
 * @returns
 * icon => CzIcon
 */
 export function createComponentName(cname: string): string {
  const ns = firstLetterToUpperCase(cst.COMPONENT_NAMESPACE_PREFIX);
  const componentName = firstLetterToUpperCase(cname);
  return `${ns}${componentName}`;
}

const _bem = (
  namespace: string,
  block: string,
  blockSuffix: string,
  element: string,
  modifier: string
) => {
  let cls = `${namespace}-${block}`
  if (blockSuffix) {
    cls += `-${blockSuffix}`
  }
  if (element) {
    cls += `__${element}`
  }
  if (modifier) {
    cls += `--${modifier}`
  }
  return cls
}