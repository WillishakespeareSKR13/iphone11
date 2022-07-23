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
  }
`;
