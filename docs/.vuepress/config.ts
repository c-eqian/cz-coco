/*
 * @Descripttion: 
 * @version: 
 * @Author: 十三
 * @Date: 2022-10-15 00:21:16
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-15 16:00:52
 */
// @ts-ignore
import { defineUserConfig, defaultTheme } from 'vuepress';
import { docsearchPlugin } from '@vuepress/plugin-docsearch';
import path from "path";
import demoblockPlugin from 'vuepress-plugin-demoblock-plus';
import {  registerComponentsPlugin  } from '@vuepress/plugin-register-components';
// const demoblockPlugin = require('vuepress-plugin-demoblock-plus')
import { containerPlugin } from '@vuepress/plugin-container';

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'cz-coco',
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
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  theme: defaultTheme({
    // logo: 'https://s1.ax1x.com/2022/09/10/vOVha6.jpg',
    logo: 'https://s1.ax1x.com/2022/10/15/x0Q84P.png',
    repo: 'https://github.com/C1320/cz-coco',
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
        link: '/components/message.md'
      },
      {
        text: '主题',
        link: '/foo/'
      }
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
        children: ['button', 'message']
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
    registerComponentsPlugin({
      // 配置项
      componentsDir: path.resolve(__dirname, './components'),
    }),
    demoblockPlugin({
      customClass: 'demoblock-custom',
      theme: 'github-light',
      cssPreprocessor: 'scss',
    })
  ]
});
