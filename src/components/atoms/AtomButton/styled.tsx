import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { AtomButtonTypes } from "./types";

export const ButtonStyled = styled(motion.button)<AtomButtonTypes>`
  width: max-content;
  height: max-content;
  padding: 8px 30px;
  font-size: 12px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  min-height: 40px;
  border: 1px solid transparent;
  border-radius: 4px;
  line-height: 150%;
  transition: background-color 0.3s ease-in-out;
  background-color: #fe6a6a;
  color: #ffffff;
  cursor: pointer;
  * {
    cursor: pointer;
  }
  ${(props) => props?.customCSS}
  ${(props) => IsDisabled(props)}
`;

const IsDisabled = (props: AtomButtonTypes) => {
  const { disabled } = props;
  return css`
    ${disabled &&
    css`
      background-color: #e6e6e6 !important;
      color: #7e7e7e !important;
      cursor: not-allowed !important;
    `}
  `;
};
