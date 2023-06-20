/*
 * @Descripttion: 
 * @version: 
 * @Author: 十三
 * @Date: 2022-10-14 13:02:27
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-16 01:46:53
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import DefineOptions from 'unplugin-vue-define-options/vite';
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
// import requireTransform from 'vite-plugin-require-transform';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), DefineOptions(),
    // @ts-ignore
    vueSetupExtend(),
  //   requireTransform({
  //   fileRegex: /.js$|.vue$/
  // }),
],
});