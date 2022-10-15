/*
 * @Descripttion: 
 * @version: 
 * @Author: 十三
 * @Date: 2022-10-15 00:21:16
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-15 12:35:45
 */
import { createApp } from 'vue';
import App from './app.vue';
import CZ from '@cz-coco/components';
import '@cz-coco/theme-chalk/src/index.scss';
import 'element-plus/theme-chalk/index.css';
import Element from 'element-plus';
const app = createApp(App);
app.use(Element).use(CZ).mount('#app');
