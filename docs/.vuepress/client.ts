import { defineClientConfig } from '@vuepress/client';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { CZIcon } from '@cz-coco/components';
import { CZButton } from '@cz-coco/components';
import '@cz-coco/theme-chalk/src/index.scss';
export default defineClientConfig({
  enhance({ app, router, siteData }) {
    console.log('client.ts');
    console.log(app, router, siteData);
    app.use(ElementPlus);
    app.use(CZButton);
    app.use(CZIcon);
  },
  setup() {},
  rootComponents: []
});
