import { css } from "@emotion/react";

export const CSSShadowCover = css`
  ::before {
    content: "";
    position: absolute;
    top: -40px;
    left: 0;
    width: 100%;
    height: 150px;
    transform: translate(0, -100%);
    background: linear-gradient(0deg, #000, transparent 100%, transparent);
    z-index: 100;
    @media screen and (max-width: 768px) {
      left: -40px;
      width: 100vw;
    }
  }
  ::after {
    content: "";
    position: absolute;
    bottom: -40px;
    left: 0;
    width: 100%;
    height: 150px;
    transform: translate(0, 100%);
    background: linear-gradient(180deg, #000, transparent 100%, transparent);
    z-index: 100;
    @media screen and (max-width: 768px) {
      left: -40px;
      width: 100vw;
    }
  }
`;
