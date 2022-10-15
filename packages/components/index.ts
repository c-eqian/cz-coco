/*
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-10-15 19:27:22
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-15 21:52:27
 */

import _button from './button';
import type { App } from 'vue';

export * from './button';
export * from './message';

const components = [_button];
export default {
  install(app: App) {
    components.map((item) => {
      app.use(item);
    });
  },
};
