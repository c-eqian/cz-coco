/*
 * @Descripttion: 
 * @version: 
 * @Author: 十三
 * @Date: 2022-10-14 13:02:27
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-16 01:46:53
 */
import { defineConfig } from 'vite';
// eslint-disable-next-line import/extensions
import vue from '@vitejs/plugin-vue';
import UnoCss from 'unocss/vite'
import DefineOptions from 'unplugin-vue-define-options/vite';
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
// eslint-disable-next-line import/extensions
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
// import requireTransform from 'vite-plugin-require-transform';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), DefineOptions(),
    UnoCss(),
    vueJsx(),
    // @ts-ignore
    vueSetupExtend(),
  //   requireTransform({
  //   fileRegex: /.js$|.vue$/
  // }),
],  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'packages'),
      '~@': path.resolve(__dirname, '/packages')
    }
  },

});