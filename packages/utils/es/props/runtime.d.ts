import type { PropType } from 'vue';
import type { EpProp, EpPropConvert, EpPropFinalized, EpPropInput, EpPropMergeType, IfEpProp, IfNativePropType, NativePropType } from './types';
export declare const epPropKey = "__epPropKey";
export declare const definePropType: <T>(val: any) => PropType<T>;
export declare const isEpProp: (val: unknown) => val is EpProp<any, any, any>;
export declare const buildProp: <Type = never, Value = never, Validator = never, Default extends EpPropMergeType<Type, Value, Validator> = never, Required_1 extends boolean = false>(prop: EpPropInput<Type, Value, Validator, Default, Required_1>, key?: string) => EpPropFinalized<Type, Value, Validator, Default, Required_1>;
export declare const buildProps: <Props extends Record<string, NativePropType | {
    __epPropKey: true;
} | EpPropInput<any, any, any, any, any>>>(props: Props) => { [K in keyof Props]: IfEpProp<Props[K], Props[K], IfNativePropType<Props[K], Props[K], EpPropConvert<Props[K]>>>; };
