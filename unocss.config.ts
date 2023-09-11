/**
 * unocss defineConfig
 * */

import {defineConfig, presetAttributify, presetIcons, presetUno} from 'unocss';


const prefix = `cz-`;
const transformRules = {
  '.': '-d111-',
  '/': '-s111-',
  ':': '-c111-',
  '%': '-p111-',
  '!': '-e111-',
  '#': '-w111-',
  '(': '-b111l-',
  ')': '-b111r-',
  '[': '-f111l-',
  ']': '-f111r-',
  $: '-r111-',
  ',': '-r222-',
};
export default defineConfig({
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetUno(),
    presetAttributify({
      prefix: prefix
    })
  ],
  shortcuts: [
    // {
    //     'border-base': 'border border-gray-500_10',
    //     '_u_z-tar-both': '_u_z-988',
    //     '_u_head-fixed': '_u_fixed _u_top-0 _u_left-0 _u_w-full _u_z-tar-both',
    //     _u_center: '_u_flex _u_justify-center _u_items-center',
    // },
  ],
  theme: {},
  transformers: [],
});
