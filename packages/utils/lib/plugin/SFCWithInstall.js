"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withInstallFunction = exports.withInstall = void 0;
const hooks_1 = require("@cz-coco/hooks");
const withInstall = (comp) => {
    comp.install = (app) => {
        console.log(7777, comp);
        app.component(comp.name, comp);
        app.component((0, hooks_1.useComponentNameFormat)(comp.name), comp);
    };
    return comp;
};
exports.withInstall = withInstall;
const withInstallFunction = (fn, name) => {
    fn.install = (app) => {
        fn._context = app._context;
        app.config.globalProperties[name] = fn;
    };
    return fn;
};
exports.withInstallFunction = withInstallFunction;
