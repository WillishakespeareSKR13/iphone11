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
    <>
      <AtomWrapper
        ref={ref}
        as="section"
        css={css`
          ${CSSContainer}
          width: 100vw;
          height: 200vh;
          background-color: #00000000;
          z-index: 10;
        `}
      />
      <AtomWrapper
        as="section"
        css={css`
          ${CSSContainer}
          position: fixed;
          height: 200vh;
          z-index: 9;
          background-color: #111111;
          top: -${scroll.proImage.distance}px;
          transition: top 0.9s ease-in-out;
        `}
      >
        <SectionPro />
        <SectionImages />
      </AtomWrapper>
    </>
  );
};

export default SectionProImages;
