// /*
//  * @Descripttion:
//  * @version:
//  * @Author: 十三
//  * @Date: 2022-10-15 19:27:22
//  * @LastEditors: 十三
//  * @LastEditTime: 2022-10-19 16:29:54
//  */
// interface MessageType {
//   success: string;
//   waring: string;
//   message: string;
//   error: string;
// }
import { useCreateComponentName } from '@cz-coco/hooks';
import { buildProps } from '@cz-coco/utils';
import { ExtractPropTypes, InjectionKey } from 'vue';

export const messageTypes = ['success', 'info', 'warning', 'error'] as const;
export type messageType = typeof messageTypes[number];
export const messageOptions = buildProps({
    type: {
        type: String,
        values: messageTypes,
        default: 'info'
    },
    message: {
        type: String,
        default: ''
    },
    duration: {
        type: Number,
        default: 3000
    },
    icon: {
        type: String
    }
} as const);
export type IMessageOptions = ExtractPropTypes<typeof messageOptions>;
export const buttonInjectionKey: InjectionKey<IMessageOptions> = Symbol(
    useCreateComponentName('message')
);
