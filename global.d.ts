
// GlobalComponents for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    CzButton: typeof import('@cz-coco/components')['CzButton']
    CzCard: typeof import('@cz-coco/components')['CzCard']
    CzIcon: typeof import('@cz-coco/components')['CzIcon']
    CzImage: typeof import('@cz-coco/components')['CzImage']
    CzMessage: typeof import('@cz-coco/components')['CzMessage']
    CzCarousel: typeof import('@cz-coco/components')['CzCarousel']
    CzSwiperV2: typeof import('@cz-coco/components')['CzSwiperV2']
    CzSwiperItem: typeof import('@cz-coco/components')['CzSwiperItem']
  }

  interface ComponentCustomProperties {
    // $message: typeof import('element-plus')['ElMessage']
    // $notify: typeof import('element-plus')['ElNotification']
    // $msgbox: typeof import('element-plus')['ElMessageBox']
    // $messageBox: typeof import('element-plus')['ElMessageBox']
    // $alert: typeof import('element-plus')['ElMessageBox']['alert']
    // $confirm: typeof import('element-plus')['ElMessageBox']['confirm']
    // $prompt: typeof import('element-plus')['ElMessageBox']['prompt']
    // $loading: typeof import('element-plus')['ElLoadingService']
  }
}

export {}
