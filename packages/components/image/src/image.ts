// image的props以及方法
import type { ExtractPropTypes } from 'vue';

export const fitTypes = [
  'fill',
  'contain',
  'cover',
  'none',
  'scale-down'
] as const;
export const imageProps = {
  src: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: '100'
  },
  height: {
    type: String,
    default: '100'
  },
  fit: {
    type: String,
    values: fitTypes,
    default: ''
  }
};

export type ImageProps = ExtractPropTypes<typeof imageProps>;
