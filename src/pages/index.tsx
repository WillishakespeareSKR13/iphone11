import { css } from '@emotion/react';
import { FC, useEffect } from 'react';
import AtomWrapper from '../components/atoms/AtomWrapper';
import Nav from '../components/nav';
import SectionPhone from '../components/sections/phone';
import { CSSContainer } from '../css/wrapper';
import SectionProImages from '../components/sections/pro-images';
import SectionCloser from '../components/sections/closer';
import SectionCamera from '../components/sections/camera';
import { useScroll } from 'framer-motion';
import { useSetAtom } from 'jotai';
import { ScrollPosition } from '../jotai/scroll';
import SectionShoot from '../components/sections/shoot';
import SectionZoom from '../components/sections/zoom';
import SectionFinish from '../components/sections/finish';

const Home: FC = () => {
  const { scrollY } = useScroll();
  const setScrollPosition = useSetAtom(ScrollPosition);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setScrollPosition(latest);
    });
  }, []);

  return (
    <AtomWrapper
      as="main"
      css={css`
        ${CSSContainer}
        overflow: initial;
        overflow: hidden;
      `}
    >
      <Nav />
      <SectionPhone />
      <SectionProImages />
      <SectionCloser />
      <SectionCamera />
      <SectionShoot />
      <SectionZoom />
      <SectionFinish />
    </AtomWrapper>
  );
};

export default Home;
