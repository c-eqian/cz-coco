/*
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-10-15 19:27:22
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-21 22:10:43
 */

import type { App } from 'vue';
import _button from './button';
import _icon from './icon';
import _image from './image';
import _card from './card';

export * from './button';
export * from './message';
export * from './image';
export * from './icon';
export * from './card';

const components = [_button, _icon, _image, _card];
export default {
  install(app: App) {
    components.forEach((item) => {
      app.use(item);
    });
  }
};
