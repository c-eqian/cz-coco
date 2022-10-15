/*
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-10-15 00:21:16
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-15 12:09:06
 */
import type { ExtractPropTypes } from 'vue';

export const buttonTypes = [
  'default',
  'primary',
  'success',
  'warning',
  'info',
  'danger',
  'text',
  '',
] as const;
export const buttonProps = {
  type: {
    type: String,
    values: buttonTypes,
    default: '',
  },
};

export type IButtonProps = ExtractPropTypes<typeof buttonProps>
