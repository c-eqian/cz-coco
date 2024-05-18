import { createApp } from "vue"
import App from './app.vue'
import { WIcon } from '@e-ui/components/icon'
import { WButton } from '@e-ui/components/button'
import '@e-ui/theme-chalk/src/index.scss'
import 'element-plus/theme-chalk/index.css'

import * as comp from "@e-ui/components"


Object.entries(comp).forEach(([name,comp]) => {
    console.log(name);
    console.log(comp);
})

const app = createApp(App);

app.use(WIcon)
app.use(WButton)
app.mount('#app')
