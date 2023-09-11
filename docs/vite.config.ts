
import { defineConfig } from 'vite';
// eslint-disable-next-line import/extensions
// import vue from '@vitejs/plugin-vue';
import UnoCss from 'unocss/vite'
// import DefineOptions from 'unplugin-vue-define-options/vite';
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
// eslint-disable-next-line import/extensions
import vueJsx from "@vitejs/plugin-vue-jsx";
// import path from "path";
// import requireTransform from 'vite-plugin-require-transform';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vueJsx(), vueSetupExtend(), UnoCss()],
    server: {
        host: '0.0.0.0',
        port: 2222,
        https: false,
    },
})