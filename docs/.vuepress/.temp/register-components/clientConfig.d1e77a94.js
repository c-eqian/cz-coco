import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("CZMessage", defineAsyncComponent(() => import("G:/vue-project/cz-coco/docs/.vuepress/components/CZMessage.vue"))),
      app.component("demo-block", defineAsyncComponent(() => import("G:/vue-project/cz-coco/docs/.vuepress/components/demo-block.vue"))),
      app.component("message-CZMessage", defineAsyncComponent(() => import("G:/vue-project/cz-coco/docs/.vuepress/components/message/CZMessage.vue")))
  },
}
