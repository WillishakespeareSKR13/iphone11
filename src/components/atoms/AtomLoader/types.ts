import { AtomWrapperTypes } from '../AtomWrapper/types';

export type AtomLoaderTypes = AtomWrapperTypes & {
  loading?: boolean | 'true' | 'false';
  astype?: 'small' | `fullscreen` | `button`;
};
