import { css } from '@emotion/react';
import { useAtomValue, useSetAtom } from 'jotai';
import { CSSContainer } from '../../../css/wrapper';
import AtomWrapper from '../../atoms/AtomWrapper';
import SectionImages from './images';
import SectionPro from './pro';
import { useRef } from 'react';
import { RefProImageAtom } from '../../../jotai/ref';
import useSetRef from '../../../hooks/useSetRef';
import { ScrollAtom } from '../../../jotai/scroll';

const SectionProImages = () => {
  const scroll = useAtomValue(ScrollAtom);
  const ref = useRef<HTMLDivElement>();
  const setRefProImage = useSetAtom(RefProImageAtom);
  useSetRef(ref, setRefProImage);
  return (
    <AtomWrapper
      ref={ref}
      as="section"
      css={css`
        ${CSSContainer}
        position: ${scroll?.phone?.isMax ? 'relative' : 'fixed'};
        height: 200vh;
        top: 0;
        z-index: 9;
        background-color: #111111;
      `}
    >
      <SectionPro />
      <SectionImages />
    </AtomWrapper>
  );
};

export default SectionProImages;
