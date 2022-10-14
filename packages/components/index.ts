
import _button from './button'
export * from './button'
export * from './message'
import type { App } from 'vue';
const components = [_button,]
export default {
    install(app: App) {
        components.map((item) => {
            app.use(item);
        });
    },
};
