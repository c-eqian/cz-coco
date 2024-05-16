/*
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-10-14 13:02:27
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-16 12:15:54
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// import requireTransform from 'vite-plugin-require-transform';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      include: `${__dirname}/**`,
      resolvers: ElementPlusResolver({ importStyle: 'sass' }),
      dts: false
    })
    //   requireTransform({
    //   fileRegex: /.js$|.vue$/
    // }),
  ],
  server: {
    host: '0.0.0.0',
    port: 3000
  }
});
