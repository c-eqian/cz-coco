import type { epPropKey } from './runtime';
import type { ExtractPropTypes, PropType } from 'vue';
import type { IfNever, UnknownToNever, WritableArray } from './util';
declare type Value<T> = T[keyof T];
export declare type ExtractPropType<T extends object> = Value<ExtractPropTypes<{
    key: T;
}>>;
export declare type ResolvePropType<T> = IfNever<T, never, ExtractPropType<{
    type: WritableArray<T>;
    required: true;
}>>;
export declare type EpPropMergeType<Type, Value, Validator> = IfNever<UnknownToNever<Value>, ResolvePropType<Type>, never> | UnknownToNever<Value> | UnknownToNever<Validator>;
export declare type EpPropInputDefault<Required extends boolean, Default> = Required extends true ? never : Default extends Record<string, unknown> | Array<any> ? () => Default : (() => Default) | Default;
export declare type NativePropType = ((...args: any) => any) | {
    new (...args: any): any;
} | undefined | null;
export declare type IfNativePropType<T, Y, N> = [T] extends [NativePropType] ? Y : N;
export declare type EpPropInput<Type, Value, Validator, Default extends EpPropMergeType<Type, Value, Validator>, Required extends boolean> = {
    type?: Type;
    required?: Required;
    values?: readonly Value[];
    validator?: ((val: any) => val is Validator) | ((val: any) => boolean);
    default?: EpPropInputDefault<Required, Default>;
};
export declare type EpProp<Type, Default, Required> = {
    readonly type: PropType<Type>;
    readonly required: [Required] extends [true] ? true : false;
    readonly validator: ((val: unknown) => boolean) | undefined;
    [epPropKey]: true;
} & IfNever<Default, unknown, {
    readonly default: Default;
}>;
export declare type IfEpProp<T, Y, N> = T extends {
    [epPropKey]: true;
} ? Y : N;
export declare type EpPropConvert<Input> = Input extends EpPropInput<infer Type, infer Value, infer Validator, any, infer Required> ? EpPropFinalized<Type, Value, Validator, Input['default'], Required> : never;
export declare type EpPropFinalized<Type, Value, Validator, Default, Required> = EpProp<EpPropMergeType<Type, Value, Validator>, UnknownToNever<Default>, Required>;
export {};
