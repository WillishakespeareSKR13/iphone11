import { css } from "@emotion/react";
import { FC, useEffect, useRef } from "react";
import AtomWrapper from "../components/atoms/AtomWrapper";
import Nav from "../components/nav";
import NavTooltip from "../components/navtooltip";
import SectionPhone from "../components/sections/phone";
import { CSSContainer } from "../css/wrapper";
import SectionProImages from "../components/sections/pro-images";
import SectionCloser from "../components/sections/closer";
import SectionCamera from "../components/sections/camera";
import { useScroll } from "framer-motion";
import { useSetAtom } from "jotai";
import { ScrollPosition } from "../jotai/scroll";

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
        min-height: 1000vh;
      `}
    >
      <Nav />
      <NavTooltip />
      <SectionPhone />
      <SectionProImages />
      <SectionCloser />
      <SectionCamera />
    </AtomWrapper>
  );
};

export default Home;
