/*
 * @Descripttion: 
 * @version: 
 * @Author: 十三
 * @Date: 2022-10-15 19:27:22
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-15 22:11:31
 */
import type { App, Component } from 'vue';
import { componentNameFormat } from '@cz-coco/utils/helper'
type EventShim = {
    new (...args: any[]): {
        $props: {
            onClick?: (...args: any[]) => void;
        };
    };
};

export type WithInstall<T> = T & {
    install(app: App): void;
} & EventShim;

export function withInstall<T extends Component>(options: T) {
    (options as Record<string, unknown>).install = (app: App) => {
        const { name } = options;
        if (name) {
            app.component(name, options);
            app.component(componentNameFormat(name), options);
        }
    };

    return options as WithInstall<T>;
}