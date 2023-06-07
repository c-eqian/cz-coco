import { useComponentNameFormat } from '@cz-coco/hooks';
export const withInstall = (comp) => {
    comp.install = (app) => {
        console.log(7777, comp);
        app.component(comp.name, comp);
        app.component(useComponentNameFormat(comp.name), comp);
    };
    return comp;
};
export const withInstallFunction = (fn, name) => {
    fn.install = (app) => {
        fn._context = app._context;
        app.config.globalProperties[name] = fn;
    };
    return fn;
};
