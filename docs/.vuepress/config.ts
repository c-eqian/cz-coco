/*
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-10-15 00:21:16
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-22 11:23:18
 */
import { defineUserConfig, defaultTheme } from 'vuepress';
// import { docsearchPlugin } from '@vuepress/plugin-docsearch';
import path from 'path';
import demoBlockPlugin from 'vuepress-plugin-demoblock-plus';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
// const demoblockPlugin = require('vuepress-plugin-demoblock-plus')
// import { containerPlugin } from '@vuepress/plugin-container';
import { getFiles } from '../utils/AutoCompleteSide';

// @ts-ignore
// @ts-ignore
export default defineUserConfig({
  lang: 'zh-CN',
  title: 'cz-coco',
  host: '0.0.0.0',
  base: '/cz-coco/', // 这是部署到github相关的配置
  description: '组件库&工具库',
  locales: {
    '/': {
      lang: 'zh-CN'
    },
    '/us/': {
      lang: 'en-US'
    }
  },
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  theme: defaultTheme({
    // logo: 'https://s1.ax1x.com/2022/09/10/vOVha6.jpg',
    logo: 'https://s1.ax1x.com/2022/10/15/x0Q84P.png',
    editLink: false,
    editLinkText: '编辑此页',
    editLinkPattern: '',
    sidebarDepth: 2,
    lastUpdated: true,
    lastUpdatedText: '更新时间',
    contributors: false,
    contributorsText: '贡献者',
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接'
    ],
    backToHome: '返回首页',
    navbar: [
      {
        text: '指南',
        link: '/'
      },
      {
        text: '组件',
        link: '/components/install.md'
      },
      {
        text: '主题',
        link: '/foo/'
      },
      {
        text: 'Gitee',
        link: 'https://gitee.com/cyq13/cz-coco'
      },
      {
        text: 'Github',
        link: 'https://github.com/C1320/cz-coco'
      },
    ],
    sidebar: [
      // SidebarItem
      {
        text: '使用',
        collapsible: false,
        children: ['install']
      },
      {
        text: 'Basic 基础组件',
        collapsible: false,
        children: getFiles()
        // children: ['icon', 'button', 'message', 'image']
      }
    ],
    locales: {
      '/': {
        selectLanguageName: '简体中文'
      },
      '/us/': {
        selectLanguageName: 'English'
      }
    }
  }),
  plugins: [
    // @ts-ignore
    registerComponentsPlugin({
      // 配置项
      componentsDir: path.resolve(__dirname, './components')
    }),
    demoBlockPlugin({
      scriptImports: ["import * as cz from '@cz-coco/components'"],
      customClass: 'demoblock-custom',
      theme: 'github-light',
      cssPreprocessor: 'scss',
      scriptReplaces: [
        {
          searchValue: /const ({ defineComponent as _defineComponent }) = Vue/g,
          replaceValue: 'const { defineComponent: _defineComponent } = Vue'
        },
        {
          searchValue: /import ({.*}) from '@cz-coco\/components'/g,
          // @ts-ignore
          replaceValue: (_s: any, s1: any) => `const ${s1} = cz` as string
        }
      ]
    })
  ]
});
