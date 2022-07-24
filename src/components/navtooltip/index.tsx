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
        position:${scroll.viewport > 0 ? 'fixed' : 'static'};
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

export default Nav;
