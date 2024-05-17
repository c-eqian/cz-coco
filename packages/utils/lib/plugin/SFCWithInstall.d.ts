import type { Plugin, AppContext } from 'vue';
export type SFCWithInstall<T> = T & Plugin;
export type SFCInstallWithContext<T> = SFCWithInstall<T> & {
    _context: AppContext | null;
};
export declare const withInstall: <T>(comp: T) => SFCWithInstall<T>;
export declare const withInstallFunction: <T>(fn: T, name: string) => SFCInstallWithContext<T>;
