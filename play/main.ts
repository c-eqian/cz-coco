import { createApp } from "vue"
import App from './app.vue'
import { WIcon } from '@cz-coco/components/icon'
import { WButton } from '@cz-coco/components/button'
import '@cz-coco/theme-chalk/src/index.scss'
import 'element-plus/theme-chalk/index.css'

import * as comp from "@cz-coco/components"


Object.entries(comp).forEach(([name,comp]) => {
    console.log(name);
    console.log(comp);
})

const app = createApp(App);

app.use(WIcon)
app.use(WButton)
app.mount('#app')