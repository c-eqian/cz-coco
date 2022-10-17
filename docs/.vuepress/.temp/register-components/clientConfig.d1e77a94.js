import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("icon", defineAsyncComponent(() => import("G:/vue-project/cz-coco/docs/.vuepress/components/icon.vue")))
  },
}
