import { css } from '@emotion/react';
import { useAtomValue } from 'jotai';
import { CSSContainer, CSSContent } from '../../css/wrapper';
import { ScrollAtom } from '../../jotai/scroll';
import AtomWrapper from '../atoms/AtomWrapper';

const Nav = () => {
  const scroll = useAtomValue(ScrollAtom);

  return (
    <AtomWrapper
      as="nav"
      css={css`
        ${CSSContainer}
        top: -${Math.min(scroll.viewport, 42)}px;
        position: fixed;
        height: max-content;
        justify-content: center;
        align-items: center;
        min-height: max-content;
        background-color: #000000;
        z-index: 1000;
        transition: top 0.5s ease-in-out;
      `}
    >
      <DesktopNav />
      <MovileNav />
      <Tooltip />
    </AtomWrapper>
  );
};

export default Nav;

const DesktopNav = () => (
  <AtomWrapper
    css={css`
      ${CSSContent}
      height: 42px;
      justify-content: center;
      align-items: center;
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
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
          Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans',
          'Helvetica Neue', sans-serif;
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
      height: 42px;
      justify-content: center;
      align-items: center;
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
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
          Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans',
          'Helvetica Neue', sans-serif;
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

const Tooltip = () => {
  return (
    <AtomWrapper
      css={css`
        ${CSSContainer}
        top: 0;
        height: 52px;
        justify-content: center;
        align-items: center;
        min-height: max-content;
        background-color: #111111;
        z-index: 1000;
        transition: all 0.3s ease-in-out;
      `}
    >
      <AtomWrapper
        css={css`
          ${CSSContent}
          max-width: 980px;
          @media screen and (max-width: 980px) {
            padding: 0px 30px;
          }
          background-color: #111111;
          padding: 0px 12px;
          justify-content: space-between;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
            Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans',
            'Helvetica Neue', sans-serif;
          a {
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            color: #f5f5f7;
            font-size: 21px;
            font-weight: 600;
          }
          div {
            display: flex;
            flex-direction: row;
            gap: 20px;

            button {
              font-size: 12px;
              color: #f5f5f799;
              background-color: transparent;
              border: none;
            }
            .big {
              padding: 5px 10px;
              font-family: 600;
              border-radius: 18px;
              background-color: #0071e3;
              color: white;
            }
            .movile {
              @media screen and (max-width: 980px) {
                display: none;
              }
            }
          }
        `}
      >
        <a href="#">iPhone 11 Pro</a>
        <div>
          <button className="movile">Overview</button>
          <button className="movile">Tech Specs</button>
          <button className="big">Buy</button>
        </div>
      </AtomWrapper>
    </AtomWrapper>
  );
};
