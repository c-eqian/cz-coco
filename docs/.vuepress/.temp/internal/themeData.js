export const themeData = JSON.parse("{\"sidebar\":{\"/\":[{\"text\":\"介绍\",\"children\":[{\"text\":\"安装\",\"link\":\"/guide/install\"},{\"text\":\"快速上手\",\"link\":\"/guide/start\"}]},{\"text\":\"组件\",\"children\":[{\"text\":\"Layout 布局\",\"link\":\"/components/layout\"},{\"text\":\"Table 表格\",\"link\":\"/components/table\"}]}]},\"navbar\":[{\"text\":\"介绍\",\"link\":\"/\",\"activeMatch\":\"^/$|^/guide/\"},{\"text\":\"组件\",\"link\":\"/components/layout.html\",\"activeMatch\":\"^/$|^/components/\"}],\"editLinkText\":\"在 GitHub 上编辑此页\",\"lastUpdatedText\":\"上次更新\",\"contributorsText\":\"贡献者\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"lastUpdated\":true,\"contributors\":true,\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
