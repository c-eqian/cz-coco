/*
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-10-15 19:27:22
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-17 12:43:15
 */

<<<<<<< HEAD
import _button from './button';
import _image from './image';
=======
>>>>>>> feature/components
import type { App } from 'vue';
import _button from './button';
import _icon from './icon';

export * from './button';
export * from './message';
<<<<<<< HEAD
export * from './image';

const components = [_button, _image];
=======
export * from './icon';

const components = [_button, _icon];
>>>>>>> feature/components
export default {
  install(app: App) {
    components.forEach((item) => {
      app.use(item);
    });
  }
};
