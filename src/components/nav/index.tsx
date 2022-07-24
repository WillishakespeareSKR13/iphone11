import { css } from "@emotion/react";
import { CSSContainer, CSSContent } from "../../css/wrapper";
import AtomWrapper from "../atoms/AtomWrapper";

const Nav = () => {
  return (
    <AtomWrapper
      as="nav"
      css={css`
        ${CSSContainer}
        height: 44px;
        justify-content: center;
        align-items: center;
        min-height: max-content;
        background-color: #000000;
        z-index: 1000;
      `}
    >
      <DesktopNav />
      <MovileNav />
    </AtomWrapper>
  );
};

export default Nav;

const DesktopNav = () => (
  <AtomWrapper
    css={css`
      ${CSSContent}
      max-width: 980px;
      background-color: #000000;
      padding: 0px 12px;
      justify-content: space-between;
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: #ffffff;
        font-weight: 500;
        font-size: 14px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
      }
      img {
        height: 20px;
        width: 20px;
        object-fit: none;
        object-position: center center;
      }
      @media screen and (max-width: 920px) {
        display: none;
      }
    `}
  >
    <a href="#">
      <img
        src="https://assets.website-files.com/5d9d9b94bce4557fd6335ce9/5d9d9e1712f8e28a2e136f39_apple-logo.svg"
        alt=""
      />
    </a>
    <a href="#">Mac</a>
    <a href="#">iPad</a>
    <a href="#">iPhone</a>
    <a href="#">Watch</a>
    <a href="#">TV</a>
    <a href="#">Music</a>
    <a href="#">Support</a>
    <a href="#">
      <img
        src="https://assets.website-files.com/5d9d9b94bce4557fd6335ce9/5d9d9e1758a892705539644b_search.svg"
        alt=""
      />
    </a>
    <a href="#">
      <img
        src="https://assets.website-files.com/5d9d9b94bce4557fd6335ce9/5d9d9e17e6b3b416ab6e8faf_bag.svg"
        alt=""
      />
    </a>
  </AtomWrapper>
);

const MovileNav = () => (
  <AtomWrapper
    css={css`
      ${CSSContent}
      max-width: 980px;
      background-color: #000000;
      padding: 0px 12px;
      justify-content: space-between;
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: #ffffff;
        font-weight: 500;
        font-size: 14px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
      }
      img {
        height: 20px;
        width: 20px;
        object-fit: none;
        object-position: center center;
      }
      padding: 0px 30px;
      display: none;
      @media screen and (max-width: 920px) {
        display: flex;
      }
    `}
  >
    <a href="#">
      <img
        src="https://assets.website-files.com/5d9d9b94bce4557fd6335ce9/5d9d9e1758a892705539644b_search.svg"
        alt=""
      />
    </a>

    <a href="#">
      <img
        src="https://assets.website-files.com/5d9d9b94bce4557fd6335ce9/5d9d9e1712f8e28a2e136f39_apple-logo.svg"
        alt=""
      />
    </a>

    <a href="#">
      <img
        src="https://assets.website-files.com/5d9d9b94bce4557fd6335ce9/5d9d9e17e6b3b416ab6e8faf_bag.svg"
        alt=""
      />
    </a>
  </AtomWrapper>
);
