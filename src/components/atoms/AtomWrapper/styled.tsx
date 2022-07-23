import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { AtomWrapperTypes } from "./types";

const AtomWrapperStyled = (props: AtomWrapperTypes) => {
  const { customCSS } = props;
  return css`
    display: flex;
    width: 100%;
    max-width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    transition: all 0.5s ease-in-out;
    ${customCSS}
  `;
};

export const AtomWrapperDefaultStyled = styled(motion.div)<AtomWrapperTypes>`
  ${(props) => AtomWrapperStyled(props)};
`;

export const AtomWrapperFormStyled = styled(motion.form)<AtomWrapperTypes>`
  ${(props) => AtomWrapperStyled(props)};
`;

export const AtomWrapperSectionStyled = styled(
  motion.section
)<AtomWrapperTypes>`
  ${(props) => AtomWrapperStyled(props)};
`;

export const AtomWrapperLiStyled = styled(motion.li)<AtomWrapperTypes>`
  ${(props) => AtomWrapperStyled(props)};
`;

export const AtomWrapperUlStyled = styled(motion.ul)<AtomWrapperTypes>`
  ${(props) => AtomWrapperStyled(props)};
`;

export const AtomWrapperMainStyled = styled(motion.main)<AtomWrapperTypes>`
  ${(props) => AtomWrapperStyled(props)};
`;

export const AtomWrapperFooterStyled = styled(motion.footer)<AtomWrapperTypes>`
  ${(props) => AtomWrapperStyled(props)};
`;

export const AtomWrapperNavStyled = styled(motion.nav)<AtomWrapperTypes>`
  ${(props) => AtomWrapperStyled(props)};
`;
