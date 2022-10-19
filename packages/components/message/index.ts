/*
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-10-14 10:23:03
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-19 22:16:46
 */

import { createMessage } from './src/message';
import { withInstallFunction } from '@cz-coco/utils';

export const CzMessage = withInstallFunction(createMessage, '$message');
