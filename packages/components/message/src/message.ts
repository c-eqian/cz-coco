/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/*
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-10-19 00:33:17
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-20 10:55:25
 */
import { App, createApp, ref, watch } from 'vue';
import CMessageComponent from './message.vue';
import { IMessageOptions, messageTypes } from '../types';
import { isString } from 'lodash-es';

const CMessageArray = ref<InstanceType<typeof CMessageComponent>[]>([]);
/**
 * 隐藏弹窗
 * @param app
 * @param vm
 * @param duration
 * @constructor
 */
const CMessageHide = (app: any, vm: InstanceType<typeof CMessageComponent>, duration: number) => {
  vm.timer = setTimeout(async () => {
    await vm.setVisible(false);
    app.unmount();
    CMessageArray.value = CMessageArray.value.filter(item => item !== vm);
    clearTimeout(vm.timer);
  }, duration || 3000);
};

const findIndex = (array: Array<[]>, value: any) => {
  return array.findIndex(item => item === value);
};
/**
 * 设置弹窗高度
 * @param vm
 * @constructor
 */
const CMessageSetTop = (vm: InstanceType<typeof CMessageComponent>) => {
  console.log(vm);
  const { setTop, height, margin } = vm;
  const currentIndex = findIndex(CMessageArray.value as any, vm);
  setTop(margin * (currentIndex + 1) + height * currentIndex);
};
/**
 * 设置弹窗显示
 * @param app
 * @param duration
 * @constructor
 */
const CMessageShow = (app: App, duration: number) => {
  const oFrag = document.createDocumentFragment();
  const vm = app.mount(oFrag) as any;
  CMessageArray.value.push(vm);
  document.body.appendChild(oFrag);
  console.log(vm);
  CMessageSetTop(vm);
  vm.setVisible(true);
  console.log(vm);
  watch(CMessageArray, () => CMessageSetTop(vm));
  CMessageHide(app, vm, duration);
};
export type MessageOptionsWithType = Omit<IMessageOptions, 'type'>
export type MessageParamsWithType = MessageOptionsWithType | IMessageOptions['message'];
export interface MessageHandler {
  close: () => void;
}
export type MessageParams = IMessageOptions | IMessageOptions['message']
export type MessageFn = {
  (options: MessageParams): void;
}
export type MessageTypedFn = (
  options: MessageParamsWithType,
) => MessageHandler

export interface Message extends MessageFn {
  success: MessageTypedFn;
  warning: MessageTypedFn;
  info: MessageTypedFn;
  error: MessageTypedFn;
}
/**
 * 序列化参数
 * @param params
 */
const normalizeOptions = (params: MessageParams) => {
  const options = isString(params) ? { message: params } : params;
  return options;
};
const createMessage = (options: IMessageOptions | { message: string; duration?: number;}) => {
  const CMessageApp = createApp(CMessageComponent, options as any);
  console.log(options);
  CMessageShow(CMessageApp, options.duration ?? 3000);
};

Object.values(messageTypes).forEach(type => {
  createMessage[type] = (options: IMessageOptions) => {
    const normalize = normalizeOptions(options);
    return createMessage({ ...normalize, type });
  };
});
// export { CzMessage };
// /**
//  * 序列化参数
//  * @param params
//  */
// const normalizeOptions = (params: MessageParams) => {
//   const options = isString(params) ? { message: params } : params;
//   return options;
// };
// const createMessage = (options: IMessageOptions | { message: string; duration?: number;}) => {
//   const CMessageApp = createApp(CMessageComponent, options as any);
//   CMessageShow(CMessageApp, options.duration ?? 3000);
// };
// export const message: MessageFn & Partial<Message> = (
//   options = {} as MessageParams
// ) => {
//   const normalize = normalizeOptions(options);
//   createMessage(normalize);
// };
export { createMessage };
