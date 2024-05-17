export declare const useComponentNameFormat: (cname: string) => string;
export declare const getNextGlobalZIndex: () => number;
export declare const getNextGlobalId: () => number;
export declare const setGlobalZIndex: (val: number) => void;
export declare const camelize: (str: string) => string;
export declare function firstLetterToUpperCase(str: string): string;
export declare function useCreateComponentName(cname: string): string;
export declare const useNamespace: (block: string) => {
    namespace: import("@vue/reactivity").ComputedRef<string>;
    b: (blockSuffix?: string) => string;
    e: (element?: string) => string;
    m: (modifier?: string) => string;
    be: (blockSuffix?: string, element?: string) => string;
    em: (element?: string, modifier?: string) => string;
    bm: (blockSuffix?: string, modifier?: string) => string;
    bem: (blockSuffix?: string, element?: string, modifier?: string) => string;
    is: {
        (name: string, state: boolean | undefined): string;
        (name: string): string;
    };
};
export type UseNamespaceReturn = ReturnType<typeof useNamespace>;
