import { defineClientConfig } from '@vuepress/client';
import cz from '@cz-coco/components';
import '@cz-coco/theme-chalk/src/index.scss';
export default defineClientConfig({
  enhance({ app, router, siteData }) {
    console.log('client.ts');
    console.log(app, router, siteData);
    app.use(cz);
  },
  setup() {},
  rootComponents: []
});
