/*
 * @Descripttion: 
 * @version: 
 * @Author: 十三
 * @Date: 2022-10-16 01:15:42
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-16 01:15:50
 */
export const componentSizes = ['', 'default', 'small', 'large'] as const

export type ComponentSize = typeof componentSizes[number]

export const componentSizeMap = {
  large: 40,
  default: 32,
  small: 24,
} as const
