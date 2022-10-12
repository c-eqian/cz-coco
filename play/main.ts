import { createApp } from "vue"
import App from './app.vue'
import { CZIcon } from '@cz-coco/components/icon'
import { CZButton } from '@cz-coco/components/button'
import '@cz-coco/theme-chalk/src/index.scss'
import 'element-plus/theme-chalk/index.css'
import Element from 'element-plus'
import * as comp from "@cz-coco/components"


Object.entries(comp).forEach(([name,comp]) => {
    console.log(name);
    console.log(comp);
})

const app = createApp(App);

app.use(CZIcon)
app.use(Element)
app.use(CZButton)
app.mount('#app')