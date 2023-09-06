import {defineConfig} from "vitepress";
import path from "path";
import {generateSidebar} from "../utils/AutoCompleteSide";
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'
export default defineConfig({
    lang: 'zh-CN',
    title: 'cz-coco',
    description: '组件库&工具库',
    head: [['link', { rel: 'icon', href: '/logo.png' }]],
    markdown: {
        lineNumbers: true,
        config(md) {
            md.use(componentPreview)
            md.use(containerPreview)
        }
    },
    themeConfig: {
        // logo: 'https://s1.ax1x.com/2022/09/10/vOVha6.jpg',
        logo: 'https://s1.ax1x.com/2022/10/15/x0Q84P.png',
        lastUpdatedText: '更新时间',
        nav: [
            {
                text: '指南',
                link: '/'
            },
            {
                text: '组件',
                link: '/components/base/button'
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
        sidebar: {
            '/components/': [
                {
                text: '使用',
                link: '/guide/install'
            },

                {
                    text: 'Basic 基础组件',
                    link: '',
                    items: generateSidebar()
                },
                {
                    text: 'Senior 高级组件',
                    link: '',
                    items: generateSidebar('senior')
                }
            ]
        }
    }
})