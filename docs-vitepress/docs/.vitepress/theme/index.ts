// .vitepress/theme/index.js
import './style.css'
import DefaultTheme from "vitepress/theme";
// import "element-plus/dist/index.css";
import { AntDesignContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import { globals } from '../vitepress';
import cz from '@cz-coco/components';
import '@cz-coco/theme-chalk/src/index.scss';
export default {
  ...DefaultTheme,
  // enhanceApp: async ({ app, router, siteData, isServer }) => {
  //   // app is the Vue 3 app instance from `createApp()`. router is VitePress'
  //   // custom router. `siteData`` is a `ref`` of current site-level metadata.
  //   import("element-plus").then((module) => {
  //     app.use(module);
  //   });
  // },
  enhanceApp({app}) {
    app.component('demo-preview', AntDesignContainer)
    app.use(cz)
    // 全局引入vp-demo组件
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp);
    });
  }
};
