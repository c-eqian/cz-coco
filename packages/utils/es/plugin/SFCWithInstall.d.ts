import type { Plugin, AppContext } from 'vue';
export declare type SFCWithInstall<T> = T & Plugin;
export declare type SFCInstallWithContext<T> = SFCWithInstall<T> & {
    _context: AppContext | null;
};
export declare const withInstall: <T>(comp: T) => SFCWithInstall<T>;
export declare const withInstallFunction: <T>(fn: T, name: string) => SFCInstallWithContext<T>;
