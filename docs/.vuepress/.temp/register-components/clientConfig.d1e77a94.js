import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("CZMessage", defineAsyncComponent(() => import("G:/vue-project/cz-coco/docs/.vuepress/components/CZMessage.vue"))),
      app.component("demo-block", defineAsyncComponent(() => import("G:/vue-project/cz-coco/docs/.vuepress/components/demo-block.vue"))),
      app.component("Democode", defineAsyncComponent(() => import("G:/vue-project/cz-coco/docs/.vuepress/components/Democode.vue"))),
      app.component("message-demo", defineAsyncComponent(() => import("G:/vue-project/cz-coco/docs/.vuepress/components/message/demo.vue"))),
      app.component("Common-DemoApi", defineAsyncComponent(() => import("G:/vue-project/cz-coco/docs/.vuepress/components/Common/DemoApi.vue"))),
      app.component("Common-Democode", defineAsyncComponent(() => import("G:/vue-project/cz-coco/docs/.vuepress/components/Common/Democode.vue")))
  },
}
