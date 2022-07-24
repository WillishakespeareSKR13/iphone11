import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { AtomTextTypes } from './types';

const TextStyle = (props: AtomTextTypes) => {
  const { customCSS } = props;
  return css`
    line-height: 150%;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    text-align: left;
    padding: 0px 0px 0px 0px;
    margin: 0px 0px 0px 0px;
    width: max-content;
    max-width: 100%;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    cursor: default;
    color: #ffffff;
    transition: all 0.3s ease-in-out;
    ${customCSS}
  `;
};

export const TextStyledDefault = styled(motion.span)<AtomTextTypes>`
  ${(props) => TextStyle(props)}
`;
export const TextStyledA = styled(motion.a)<AtomTextTypes>`
  ${(props) => TextStyle(props)}
`;
export const TextStyledP = styled(motion.p)<AtomTextTypes>`
  ${(props) => TextStyle(props)}
`;
export const TextStyledH1 = styled(motion.h1)<AtomTextTypes>`
  ${(props) => TextStyle(props)}
`;
export const TextStyledH2 = styled(motion.h2)<AtomTextTypes>`
  ${(props) => TextStyle(props)}
`;
export const TextStyledH3 = styled(motion.h3)<AtomTextTypes>`
  ${(props) => TextStyle(props)}
`;
export const TextStyledH4 = styled(motion.h4)<AtomTextTypes>`
  ${(props) => TextStyle(props)}
`;
export const TextStyledH5 = styled(motion.h5)<AtomTextTypes>`
  ${(props) => TextStyle(props)}
`;
export const TextStyledH6 = styled(motion.h6)<AtomTextTypes>`
  ${(props) => TextStyle(props)}
`;
