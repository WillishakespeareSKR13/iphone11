import { css } from "@emotion/react";
import { useAtomValue, useSetAtom } from "jotai";
import { useRef } from "react";
import { CSSContainer } from "../../../css/wrapper";
import useSetRef from "../../../hooks/useSetRef";
import { RefCloserAtom } from "../../../jotai/ref";
import { ScrollAtom } from "../../../jotai/scroll";
import AtomImage from "../../atoms/AtomImage";
import AtomText from "../../atoms/AtomText";
import AtomWrapper from "../../atoms/AtomWrapper";

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: 10 },
};

const SectionCloser = () => {
  const scroll = useAtomValue(ScrollAtom);
  const ref = useRef<HTMLDivElement>();
  const setRefCloser = useSetAtom(RefCloserAtom);
  useSetRef(ref, setRefCloser);
  return (
    <AtomWrapper
      ref={ref}
      css={css`
        position: ${scroll?.proImage?.isMax ? "static" : "fixed"};
        ${CSSContainer}
        height: 100vh;
        padding: 0px 40px 40px 40px;
        gap: 40px;
        z-index: 8;
      `}
    >
      <AtomWrapper
        css={css`
          width: 100%;
          flex-direction: row;
          position: relative;
          justify-content: center;
          align-items: center;
          background-color: #111111;
          height: 100%;
          min-height: 100%;
          gap: 30px;
        `}
      >
        <AtomWrapper
          css={css`
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 70%;
            background-color: #000000;
          `}
        >
          <AtomWrapper
            css={css`
              width: 100%;
              height: max-content;
              max-width: 380px;
              gap: 10px;
            `}
          >
            <AtomText
              animate={scroll?.proImage.map > 80 ? "open" : "closed"}
              variants={variants}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
              css={css`
                font-size: 72px;
                font-weight: 600;
                line-height: 1.05;
                letter-spacing: -0.006px;
              `}
            >
              Take a closer look.
            </AtomText>
            <AtomText
              animate={scroll?.proImage.map > 70 ? "open" : "closed"}
              variants={variants}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
              css={css`
                font-size: 24px;
                color: #aaa;
                font-weight: 600;
                letter-spacing: -0.003px;
              `}
            >
              Two sizes. Four finishes. Stainless steel and glass design.
            </AtomText>
          </AtomWrapper>
        </AtomWrapper>
        <AtomImage
          css={css`
            width: 100%;
            height: 100%;
            overflow: hidden;
            background-color: #000000;
            img {
              background-color: #000000;
              width: 180%;
              height: 100%;
              object-fit: contain;
              object-position: center center;
              transform: translate(
                -20%,
                ${-(scroll.proImage.mapHalf - 40) + 40}${"%"}
              );
              transition: transform 2s ease-out;
              backface-visibility: hidden;
            }
          `}
          src="https://assets.website-files.com/5d9d9b94bce4557fd6335ce9/5d9dbddd916a65ffea9caba9_hero_gallery_camera_glass__bhv9k5jrv1oy_large_2x.jpg"
        />
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default SectionCloser;