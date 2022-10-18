import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("CzIcon", defineAsyncComponent(() => import("C:/cz-coco/docs/.vuepress/components/CzIcon.vue"))),
      app.component("CZMessage", defineAsyncComponent(() => import("C:/cz-coco/docs/.vuepress/components/CZMessage.vue"))),
      app.component("demo-block", defineAsyncComponent(() => import("C:/cz-coco/docs/.vuepress/components/demo-block.vue"))),
      app.component("Democode", defineAsyncComponent(() => import("C:/cz-coco/docs/.vuepress/components/Democode.vue"))),
      app.component("Common-DemoApi", defineAsyncComponent(() => import("C:/cz-coco/docs/.vuepress/components/Common/DemoApi.vue"))),
      app.component("Common-Democode", defineAsyncComponent(() => import("C:/cz-coco/docs/.vuepress/components/Common/Democode.vue"))),
      app.component("message-demo", defineAsyncComponent(() => import("C:/cz-coco/docs/.vuepress/components/message/demo.vue")))
  },
}
