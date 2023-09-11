//
import type { App } from 'vue';
export const INSTALLED_KEY = Symbol('INSTALLED_KEY');
//
import _button from './button';
import _card from './card';
import _Carousel from './carousel';
import _icon from './icon';
import _image from './image';
import _swiperItem from './swiperItem';
import _CzSwiperV2 from './SwiperV2';
export * from './button';
export * from './card';
export * from './carousel';
export * from './icon';
export * from './image';
export * from './message';
export * from './swiperItem';
export * from './SwiperV2';
const components = [
    _button,
    _icon,
    _image,
    _card,
    _Carousel,
    _CzSwiperV2,
    _swiperItem
];
export default {
    install(app: App) {
        components.forEach((item:any) => {
            // if (app[INSTALLED_KEY]) return;
            // app[INSTALLED_KEY] = true;
            app.use(item);
        });
    }
};
