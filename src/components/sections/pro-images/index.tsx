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
        position: ${scroll?.phone?.isMax ? 'static' : 'fixed'};
        ${CSSContainer}
        height: max-content;
        padding: 0px 40px 40px 40px;
        gap: 40px;
        top: 0;
        z-index: 9;
        @media screen and (max-width: 980px) {
          padding: 0px 20px 20px 20px;
        }
      `}
    >
      <SectionPro />
      <SectionImages />
    </AtomWrapper>
  );
};

export default SectionProImages;
