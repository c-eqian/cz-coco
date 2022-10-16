/*
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-10-15 00:21:16
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-16 12:30:42
 */
import type { ExtractPropTypes } from 'vue';
import { componentSizes } from '@cz-coco/constants/size';
export const buttonTypes = [
  'default',
  'primary',
  'success',
  'warning',
  'info',
  'danger',
  'text',
  ''
] as const;
export const buttonProps = {
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  plain: {
    type: Boolean,
    default: false
  },
  text: {
    type: Boolean,
    default: false
  },
  link: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  circle: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    values: buttonTypes,
    default: ''
  },
  size: {
    type: String,
    values: componentSizes,
    default: ''
  }
};

export type IButtonProps = ExtractPropTypes<typeof buttonProps>;
