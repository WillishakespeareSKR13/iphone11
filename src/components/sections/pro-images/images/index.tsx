import { css } from "@emotion/react";
import { useAtomValue } from "jotai";
import { ScrollAtom } from "../../../../jotai/scroll";
import AtomImage from "../../../atoms/AtomImage";
import AtomWrapper from "../../../atoms/AtomWrapper";

const SectionImages = () => {
  const scroll = useAtomValue(ScrollAtom);
  return (
    <>
      <AtomWrapper
        css={css`
          width: 100%;
          flex-direction: row;
          position: relative;
          justify-content: center;
          align-items: center;
          background-color: #111111;
          height: 100vh;
          min-height: 100%;
          gap: 40px;
        `}
      >
        <AtomImage
          css={css`
            width: 100%;
            height: 100%;
            overflow: hidden;
            background-color: #000000;

            img {
              background-color: #000000;
              width: 100%;
              height: 100%;
              object-fit: cover;
              transform: translate(5%, ${scroll.proImage.mapHalf - 25 + 5}%)
                scale(0.9);
              object-position: left top;
              transition: transform 2s ease-out;
              backface-visibility: hidden;
            }
          `}
          src="https://assets.website-files.com/5d9d9b94bce4557fd6335ce9/5d9db5e9d30da31b978adc15_triptych_left_landscape__eczd4p0wyv6u_large_2x.jpg"
        />
        <AtomImage
          css={css`
            width: 100%;
            height: 100%;
            overflow: hidden;
            background-color: #000000;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              transform: scale(1.1)
                translate(0%, ${-(scroll.proImage.mapHalf - 25) + 10}%);
              transition: transform 2s ease-out;
              backface-visibility: hidden;
            }
          `}
          src="https://assets.website-files.com/5d9d9b94bce4557fd6335ce9/5d9db5e920ac3aa83c26aaa2_triptych_middle_landscape__c14zbto4v402_large_2x.jpg"
        />
        <AtomImage
          css={css`
            width: 100%;
            height: 100%;
            overflow: hidden;
            background-color: #000000;
            img {
              background-color: #000000;
              width: 100%;
              height: 100%;
              object-fit: contain;
              transform: scale(0.8)
                translate(0%, ${scroll.proImage.mapHalf - 25 + 5}%);
              transition: transform 2s ease-out;
              backface-visibility: hidden;
            }
          `}
          src="https://assets.website-files.com/5d9d9b94bce4557fd6335ce9/5d9db5e920ac3a5cf026aaa1_triptych_right_landscape__ik46z8u34ki2_large_2x.jpg"
        />
      </AtomWrapper>
    </>
  );
};

export default SectionImages;
