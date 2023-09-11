/*
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-10-14 10:23:03
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-19 22:16:46
 */

import { withInstallFunction } from '@cz-coco/utils';

import { createMessage } from './src/message';

export const CzMessage = withInstallFunction(createMessage, '$message');
