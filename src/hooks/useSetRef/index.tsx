import { SetStateAction } from 'jotai';
import { useEffect } from 'react';
import { RefDiv } from '../../jotai/ref';

const useSetRef = (ref: RefDiv, set: (e: SetStateAction<RefDiv>) => void) => {
  useEffect(() => {
    if (ref.current) {
      set(ref);
    }
  }, [ref, set]);
};

export default useSetRef;
