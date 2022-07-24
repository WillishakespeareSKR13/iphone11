import { css } from '@emotion/react';
import { CSSContainer } from '../../../css/wrapper';
import AtomImage from '../../atoms/AtomImage';
import AtomText from '../../atoms/AtomText';
import AtomWrapper from '../../atoms/AtomWrapper';

const SectionFinish = () => {
  return (
    <>
      <AtomWrapper
        as="section"
        css={css`
          ${CSSContainer}
          width: 100vw;
          height: 100vh;
          background-color: #060606;
          z-index: 8;
          padding-top: 40px;
          align-items: center;
          justify-content: center;
          gap: 40px;
          a {
            cursor: pointer;
            * {
              cursor: pointer;
            }
          }
        `}
      >
        <AtomText
          css={css`
            color: #f7f7f7;
            font-size: 64px;
            line-height: 1.333;
            font-weight: 600;
            text-align: center;
            @media screen and (max-width: 980px) {
              font-size: 48px;
            }
          `}
        >
          Thanks for scrolling through.
        </AtomText>
        <AtomImage
          css={css`
            border-radius: 50%;
            overflow: hidden;
            width: max-content;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            @media screen and (max-width: 980px) {
              width: 250px;
              height: 250px;
              img {
                width: 100%;
                height: 100%;
              }
            }
          `}
          src="https://media-exp1.licdn.com/dms/image/C5603AQH-AA47ERffeA/profile-displayphoto-shrink_800_800/0/1626139953564?e=1664409600&v=beta&t=aVOh4w6Jy3jaY4AqRj6Uyo_QVMu9T7-xWILH84JYwrc"
        />
        <AtomWrapper
          css={css`
            width: max-content;
            flex-direction: row;
            gap: 20px;
          `}
        >
          <a href="https://www.linkedin.com/in/william-jesus-covarrubias-ramos-84410339/">
            <AtomText
              css={css`
                color: #f7f7f7;
                font-size: 22px;
                font-weight: bold;
                text-decoration: underline;
                @media screen and (max-width: 980px) {
                  font-size: 16px;
                }
              `}
            >
              Linkedin
            </AtomText>
          </a>
          <a href="https://github.com/WillishakespeareSKR13">
            <AtomText
              css={css`
                color: #f7f7f7;
                font-size: 22px;
                font-weight: bold;
                text-decoration: underline;
                @media screen and (max-width: 980px) {
                  font-size: 16px;
                }
              `}
            >
              Github
            </AtomText>
          </a>
          <a href="https://github.com/WillishakespeareSKR13/iphone11">
            <AtomText
              css={css`
                color: #f7f7f7;
                font-size: 22px;
                font-weight: bold;
                text-decoration: underline;
                @media screen and (max-width: 980px) {
                  font-size: 16px;
                }
              `}
            >
              Repository
            </AtomText>
          </a>
        </AtomWrapper>
      </AtomWrapper>
    </>
  );
};

export default SectionFinish;
