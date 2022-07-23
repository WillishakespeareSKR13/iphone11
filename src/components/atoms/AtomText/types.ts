import { CSSType } from '@service/types';
import { HTMLMotionProps } from 'framer-motion';

export type AtomTextTypes = HTMLMotionProps<'p'> &
  HTMLMotionProps<'span'> &
  HTMLMotionProps<'h1'> &
  HTMLMotionProps<'h2'> &
  HTMLMotionProps<'h3'> &
  HTMLMotionProps<'h4'> &
  HTMLMotionProps<'h5'> &
  HTMLMotionProps<'h6'> & {
    as?: 'p' | 'span' | 'a' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    css?: CSSType;
    customCSS?: CSSType;
  };
