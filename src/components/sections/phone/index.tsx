import { css } from "@emotion/react";
import { useAtomValue, useSetAtom } from "jotai";
import { useRef } from "react";
import { CSSShadowCover } from "../../../css/effects";
import { CSSContainer } from "../../../css/wrapper";
import useSetRef from "../../../hooks/useSetRef";
import { RefPhoneAtom } from "../../../jotai/ref";
import { ScrollAtom } from "../../../jotai/scroll";
import AtomImage from "../../atoms/AtomImage";
import AtomWrapper from "../../atoms/AtomWrapper";

const SectionPhone = () => {
  const scroll = useAtomValue(ScrollAtom);
  const ref = useRef<HTMLDivElement>();
  const setRefPhone = useSetAtom(RefPhoneAtom);
  useSetRef(ref, setRefPhone);
  return (
    <AtomWrapper
      ref={ref}
      as="section"
      css={css`
        ${CSSContainer}
        height: 100vh;
        padding: 0px 40px 40px 40px;
        z-index: 10;
      `}
    >
      <AtomWrapper
        css={css`
          width: 100%;
          position: relative;
          justify-content: center;
          align-items: center;
          background-color: #000000;
          height: 100%;
          min-height: 100%;

          ${CSSShadowCover}
        `}
      >
        <AtomWrapper
          css={css`
            position: relative;
            justify-content: flex-end;
            align-items: center;
            width: 100%;
            height: 100%;
            overflow: hidden;
          `}
        >
          <AtomImage
            css={css`
              position: relative;
              width: 60%;
              height: 70%;
              overflow: visible;
              img {
                position: absolute;
                width: 100%;
                height: max-content;
                background-color: #000000;
                object-fit: cover;
                object-position: top;
                backface-visibility: hidden;
              }
              transform: translate(0%, ${-scroll.phone.mapQuarter}%);
              transition: transform 2s ease-out;
            `}
            src="https://assets.website-files.com/5d9d9b94bce4557fd6335ce9/5d9da988bce4552fdc33d69c_iphone%20endframe.png"
            alt=""
          />
        </AtomWrapper>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default SectionPhone;
