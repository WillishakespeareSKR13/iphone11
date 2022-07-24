import { css } from "@emotion/react";
import { useAtomValue, useSetAtom } from "jotai";
import { useRef } from "react";
import { CSSContainer } from "../../../css/wrapper";
import useSetRef from "../../../hooks/useSetRef";
import { RefCameraAtom } from "../../../jotai/ref";
import { ScrollAtom } from "../../../jotai/scroll";
import AtomImage from "../../atoms/AtomImage";
import AtomText from "../../atoms/AtomText";
import AtomWrapper from "../../atoms/AtomWrapper";

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: 10 },
};

const SectionCamera = () => {
  const scroll = useAtomValue(ScrollAtom);
  const ref = useRef<HTMLDivElement>();
  const setRefCamera = useSetAtom(RefCameraAtom);
  useSetRef(ref, setRefCamera);
  return (
    <>
      <AtomWrapper
        ref={ref}
        as="section"
        css={css`
          ${CSSContainer}
          width: 100vw;
          height: 100vh;
          background-color: #00000000;
          z-index: 8;
        `}
      />
      <AtomWrapper
        as="section"
        css={css`
          top: 40px;
          position: fixed;
          ${CSSContainer}
          width: 100vw;
          height: 100vh;
          margin-top: -40px;
          padding: 40px 40px 40px 40px;
          gap: 40px;
          background-color: #000000;
          z-index: 7;
        `}
      >
        <AtomWrapper
          css={css`
            width: 100%;
            flex-direction: column;
            position: relative;
            justify-content: center;
            align-items: flex-start;
            height: 100%;
            min-height: 100%;
            max-width: 800px;
            z-index: 1;
            gap: 20px;
          `}
        >
          <AtomText
            animate={scroll?.closer?.map > 70 ? "open" : "closed"}
            variants={variants}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
            css={css`
              font-size: 96px;
              color: #aaaaaa;
              line-height: 1.0416;
              font-weight: 600;
              letter-spacing: -0.015px;
              @media screen and (max-width: 980px) {
                font-size: 48px;
                max-width: 250px;
              }
            `}
          >
            Pro camera system
          </AtomText>
          <AtomText
            animate={scroll?.closer?.map > 29 ? "open" : "closed"}
            variants={variants}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
            css={css`
              font-size: 96px;
              color: #fafafa;
              line-height: 1.0416;
              font-weight: 600;
              letter-spacing: -0.015px;
              @media screen and (max-width: 980px) {
                font-size: 48px;
                max-width: 250px;
              }
            `}
          >
            We’ ve three‑upped ourselves.
          </AtomText>
        </AtomWrapper>
        <AtomImage
          css={css`
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: #000000;
            img {
              background-color: #000000;
              width: 100%;
              height: 100%;
              object-fit: contain;
              object-position: center center;
              backface-visibility: hidden;
              transform: scale(3.5)
                rotateZ(${scroll.camera.mapHalf + scroll.closer.mapHalf}deg);
              transition: transform 2s ease-out;
            }
          `}
          src="/camera.png"
        />
      </AtomWrapper>
    </>
  );
};

export default SectionCamera;
