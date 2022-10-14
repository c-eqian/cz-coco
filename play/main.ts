import { createApp } from "vue"
import App from './app.vue'
import CZ from '@cz-coco/components'
import '@cz-coco/theme-chalk/src/index.scss'
import 'element-plus/theme-chalk/index.css'
import Element from 'element-plus'
const app = createApp(App);
app.use(Element).use(CZ).mount('#app')