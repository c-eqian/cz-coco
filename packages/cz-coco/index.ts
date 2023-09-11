
import * as components from '@cz-coco/components';
import type { App, Component } from 'vue';


const install = (app: App) => {
    // 每个组件在写的时候都提供了install方法

    // 有的是组件，有的可能是指令 xxx.install = () => { app.directive() }
    // components.forEach((component) => app.use(component));

    Object.entries(components).forEach(([name, component]) => {
        app.component(name, component as Component);
    });
};

export default {
    install
};

export * from '@cz-coco/components';
