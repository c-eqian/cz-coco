/* eslint-disable import/no-extraneous-dependencies */
/*
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-10-19 21:53:03
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-19 21:53:14
 */
import { isArray, isObject } from '@vue/shared';
import { isNil } from 'lodash-unified';

export {
  isArray,
  isFunction,
  isObject,
  isString,
  isDate,
  isPromise,
  isSymbol
} from '@vue/shared';
export { isVNode } from 'vue';

export const isUndefined = (val: any): val is undefined => val === undefined;

export const isEmpty = (val: unknown) => (!val && val !== 0)
  || (isArray(val) && val.length === 0)
  || (isObject(val) && !Object.keys(val).length);

export const isElement = (e: unknown): e is Element => {
  if (typeof Element === 'undefined') return false;
  return e instanceof Element;
};

export const isPropAbsent = (prop: unknown): prop is null | undefined => {
  return isNil(prop);
};
