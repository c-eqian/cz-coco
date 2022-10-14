export const siteData = JSON.parse("{\"base\":\"/cz-coco/\",\"lang\":\"zh-CN\",\"title\":\"cz-coco\",\"description\":\"组件库&工具库\",\"head\":[],\"locales\":{\"/\":{\"lang\":\"zh-CN\"},\"/us/\":{\"lang\":\"en-US\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
