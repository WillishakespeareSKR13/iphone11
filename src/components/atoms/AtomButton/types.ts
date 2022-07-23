import { CSSType } from '@emotion/reac';
import { HTMLMotionProps } from 'framer-motion';

export type AtomButtonTypes = HTMLMotionProps<'button'> & {
  loading?: boolean | 'true' | 'false';
  css?: CSSType;
  customCSS?: CSSType;
};
