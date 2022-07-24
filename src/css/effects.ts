import { css } from '@emotion/react';

export const CSSShadowCover = css`
  ::before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0;
    height: 150px;
    transform: translate(0, -100%);
    background: linear-gradient(0deg, #000, transparent 100%, transparent);
    z-index: 100;
    width: calc(100% - 80px);
    @media screen and (max-width: 980px) {
      left: 20px;
      width: calc(100% - 40px);
    }
  }
  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    height: 150px;
    transform: translate(0, 100%);
    background: linear-gradient(180deg, #000, transparent 100%, transparent);
    z-index: 100;
    left: 40px;
    width: calc(100% - 80px);
    @media screen and (max-width: 980px) {
      left: 20px;
      width: calc(100% - 40px);
    }
  }
`;
