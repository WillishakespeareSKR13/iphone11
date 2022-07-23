import { css } from "@emotion/react";
import { CSSContainer, CSSContent } from "../../css/wrapper";
import AtomWrapper from "../atoms/AtomWrapper";

const Nav = () => {
  return (
    <AtomWrapper
      as="nav"
      css={css`
        ${CSSContainer}
        position:sticky;
        top: 0;
        height: 52px;
        justify-content: center;
        align-items: center;
        min-height: max-content;
        background-color: #111111;
        z-index: 1000;
      `}
    >
      <AtomWrapper
        css={css`
          ${CSSContent}
          max-width: 980px;
          background-color: #111111;
          padding: 0px 12px;
          justify-content: space-between;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
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
          }
        `}
      >
        <a href="#">iPhone 11 Pro</a>
        <div>
          <button>Overview</button>
          <button>Tech Specs</button>
          <button className="big">Buy</button>
        </div>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default Nav;
