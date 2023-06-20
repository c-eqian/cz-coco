/*
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-10-15 19:27:22
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-19 20:09:41
 */
import type { App, Plugin, AppContext } from 'vue'; // 只是导入类型不是导入App的值
import { useComponentNameFormat } from '@cz-coco/hooks';

// 类型必须导出否则生成不了.d.ts文件
export type SFCWithInstall<T> = T & Plugin;

export type SFCInstallWithContext<T> = SFCWithInstall<T> & {
  _context: AppContext | null;
}
/**
  * 定义一个withInstall方法处理以下组件类型问题
  * @param comp
  */
export const withInstall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = (app: App) => {
    console.log({ comp });
    app.component((comp as any).name, comp as any);
    app.component(useComponentNameFormat((comp as any).name || (comp as any).__name), comp as any);
  };
  return comp as SFCWithInstall<T>;
};

export const withInstallFunction = <T>(fn: T, name: string) => {
  (fn as SFCWithInstall<T>).install = (app: App) => {
    (fn as SFCInstallWithContext<T>)._context = app._context;
    app.config.globalProperties[name] = fn;
  };
  return fn as SFCInstallWithContext<T>;
};
