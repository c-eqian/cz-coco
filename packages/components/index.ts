/*
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-10-15 19:27:22
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-15 21:52:27
 */

import _button from './button';
import _image from './image';
import type { App } from 'vue';

export * from './button';
export * from './message';
export * from './image';

const components = [_button, _image];
export default {
  install(app: App) {
    components.map((item) => {
      app.use(item);
    });
  }
};
