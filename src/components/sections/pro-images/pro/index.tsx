import { css } from '@emotion/react';
import { useAtomValue } from 'jotai';
import { ScrollAtom } from '../../../../jotai/scroll';
import AtomText from '../../../atoms/AtomText';
import AtomWrapper from '../../../atoms/AtomWrapper';
const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: 10 }
};
const SectionPro = () => {
  const scroll = useAtomValue(ScrollAtom);
  return (
    <>
      <AtomWrapper
        css={css`
          width: 100%;
          justify-content: center;
          align-items: center;
          background-color: #000000;
          height: 100vh;
          max-height: 100vh;
          min-height: 100vh;
          ::after {
            top: 0;
            content: '';
            width: 100vw;
            height: 100vh;
            position: absolute;
            border: 40px solid #111111;
            @media screen and (max-width: 980px) {
              border: 20px solid #111111;
            }
          }
        `}
      >
        <AtomWrapper
          css={css`
            width: 100%;
            max-width: 980px;
            justify-content: center;
            align-items: center;
            gap: 50px;
            @media screen and (max-width: 980px) {
              padding: 0px 50px;
              gap: 20px;
            }
          `}
        >
          <AtomText
            animate={scroll?.phone?.map > 80 ? 'open' : 'closed'}
            variants={variants}
            transition={{
              duration: 0.2,
              delay: 0.2,
              ease: 'easeInOut'
            }}
            css={css`
              text-align: center;
              max-width: 980px;
              font-size: 96px;
              font-weight: 600;
              line-height: 1.04;
              letter-spacing: -0.01em;
              overflow-wrap: break-word;
              @media screen and (max-width: 980px) {
                max-width: 100%;
                text-align: left;
                font-size: 48px;
              }
            `}
          >
            And then there was Pro.
          </AtomText>
          <AtomText
            animate={scroll?.phone?.map > 50 ? 'open' : 'closed'}
            variants={variants}
            transition={{
              duration: 0.2,
              ease: 'easeInOut'
            }}
            css={css`
              text-align: center;
              font-size: 32px;
              color: #aaa;
              line-height: 1.125;
              font-weight: 600;
              letter-spacing: 0.004px;
              @media screen and (max-width: 980px) {
                font-size: 24px;
                max-width: 100%;
                text-align: left;
              }
            `}
          >
            A transformative triple‑camera system that adds tons of capability
            without complexity. An unprecedented leap in battery life. And a
            mind‑blowing chip that doubles down on machine learning and pushes
            the boundaries of what a smartphone can do. Welcome to the first
            iPhone powerful enough to be called Pro.
          </AtomText>
          <AtomWrapper
            css={css`
              justify-content: center;
              align-items: center;
              gap: 20px;
              @media screen and (max-width: 980px) {
                gap: 5px;
                align-items: flex-start;
              }
            `}
          >
            <AtomText
              animate={scroll?.phone?.map > 30 ? 'open' : 'closed'}
              variants={variants}
              transition={{
                duration: 0.2,
                ease: 'easeInOut'
              }}
              css={css`
                text-align: center;
                font-size: 24px;
                color: #aaa;
                font-weight: 600;
                letter-spacing: -0.003px;
                br {
                  display: none;
                }
                @media screen and (max-width: 980px) {
                  max-width: 50%;
                  font-size: 21px;
                  max-width: 100%;
                  text-align: left;
                  br {
                    display: flex;
                  }
                }
                @media screen and (max-width: 425px) {
                  font-size: 21px;
                }
              `}
            >
              From $24.95/mo. or <br /> $599 with trade-in.*
            </AtomText>
            <AtomWrapper
              animate={scroll?.phone?.map > 20 ? 'open' : 'closed'}
              variants={variants}
              transition={{
                duration: 0.2,
                ease: 'easeInOut'
              }}
              css={css`
                flex-direction: row;
                justify-content: center;
                align-items: center;
                gap: 20px;
                span {
                  color: #fff;
                  font-size: 24px;
                  font-weight: 600;
                  :hover {
                    cursor: pointer;
                    text-decoration: underline;
                  }
                }
                @media screen and (max-width: 980px) {
                  justify-content: flex-start;
                  gap: 0px 40px;
                  flex-wrap: wrap;
                  span {
                    font-size: 21px;
                    max-width: 100%;
                    text-align: left;
                  }
                }
              `}
            >
              <AtomText>Watch the keynote</AtomText>
              <AtomText>Watch the film</AtomText>
            </AtomWrapper>
          </AtomWrapper>
        </AtomWrapper>
      </AtomWrapper>
    </>
  );
};

export default SectionPro;
