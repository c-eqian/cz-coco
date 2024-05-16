
import { defineConfig } from 'vite';
// eslint-disable-next-line import/extensions
import vue from '@vitejs/plugin-vue';
// eslint-disable-next-line import/extensions
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
// import requireTransform from 'vite-plugin-require-transform';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    vueJsx(),
    // @ts-ignore
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
