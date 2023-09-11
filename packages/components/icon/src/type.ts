/*
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-10-15 19:27:22
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-17 12:32:57
 */
// 这里放组件的props及公共方法
import type { ExtractPropTypes } from 'vue';
//  as const，会让对象的每个属性变成只读（readonly）
export const iconProps = {
    icon: {
        type: String,
        require: true
    },
    size: {
        type: Number
    },
    color: {
        type: String
    }
};

export type IconProps = ExtractPropTypes<typeof iconProps>
