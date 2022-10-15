export const themeData = JSON.parse("{\"logo\":\"https://s1.ax1x.com/2022/10/15/x0Q84P.png\",\"repo\":\"https://github.com/C1320/cz-coco\",\"editLink\":false,\"editLinkText\":\"编辑此页\",\"editLinkPattern\":\"\",\"sidebarDepth\":2,\"lastUpdated\":true,\"lastUpdatedText\":\"更新时间\",\"contributors\":false,\"contributorsText\":\"贡献者\",\"notFound\":[\"这里什么都没有\",\"我们怎么到这来了？\",\"这是一个 404 页面\",\"看起来我们进入了错误的链接\"],\"backToHome\":\"返回首页\",\"navbar\":[{\"text\":\"指南\",\"link\":\"/\"},{\"text\":\"组件\",\"link\":\"/components/message.md\"},{\"text\":\"主题\",\"link\":\"/foo/\"}],\"sidebar\":[{\"text\":\"使用\",\"collapsible\":false,\"children\":[\"install\"]},{\"text\":\"Basic 基础组件\",\"collapsible\":false,\"children\":[\"button\",\"message\"]}],\"locales\":{\"/\":{\"selectLanguageName\":\"简体中文\"},\"/us/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
