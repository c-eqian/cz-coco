import { createApp, ref, watch } from 'vue';
import { ICMessageOptions, CMessageType } from '../types/type';
import CMessageComponent from './message.vue';

const CMessageArray = ref<Array<[]>>([]);
/**
 * 隐藏弹窗
 * @param app
 * @param vm
 * @param duration
 * @constructor
 */
const CMessageHide = (app: any, vm: any, duration: number) => {
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
const CMessageSetTop = (vm: any) => {
  console.log(vm);
  const { setTop, height, margin } = vm;
  const currentIndex = findIndex(CMessageArray.value, vm);
  setTop(margin * (currentIndex + 1) + height * currentIndex);
};
/**
 * 设置弹窗显示
 * @param app
 * @param duration
 * @constructor
 */
const CMessageShow = (app: any, duration: number) => {
  const oFrag = document.createDocumentFragment();
  const vm = app.mount(oFrag);
  console.log(vm, 11);
  CMessageArray.value.push(vm);
  document.body.appendChild(oFrag);
  CMessageSetTop(vm);
  vm.setVisible(true);
  watch(CMessageArray, () => CMessageSetTop(vm));
  CMessageHide(app, vm, duration);
};
const CzMessage = (options: ICMessageOptions) => {
  const CMessageApp = createApp(CMessageComponent, options as any);
  CMessageShow(CMessageApp, options.duration || 3000);
};
Object.values(CMessageType).forEach((type) => {
  // @ts-ignore
  CzMessage[type] = (options: ICMessageOptions) => {
    options.type = type;
    return CzMessage(options);
  };
});
export { CMessageType, CzMessage };
