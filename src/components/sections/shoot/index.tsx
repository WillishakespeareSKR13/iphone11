import { css } from '@emotion/react';
import { useAtomValue, useSetAtom } from 'jotai';
import { useRef } from 'react';
import { TextShoot } from '../../../css/text';
import { CSSContainer } from '../../../css/wrapper';
import useSetRef from '../../../hooks/useSetRef';
import { RefShootAtom } from '../../../jotai/ref';
import { ScrollAtom } from '../../../jotai/scroll';
import AtomImage from '../../atoms/AtomImage';
import AtomText from '../../atoms/AtomText';
import AtomWrapper from '../../atoms/AtomWrapper';

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: 10 }
};

const SectionShoot = () => {
  const scroll = useAtomValue(ScrollAtom);
  const ref = useRef<HTMLDivElement>();
  const setRefShoot = useSetAtom(RefShootAtom);
  useSetRef(ref, setRefShoot);
  return (
    <>
      <AtomWrapper
        ref={ref}
        as="section"
        css={css`
          ${CSSContainer}
          position: relative;
          margin-top: 40px;
          width: 100vw;
          height: 400vh;
          background-color: #00000000;
          z-index: 8;
        `}
      >
        <AtomWrapper
          css={css`
            top: 0px;
            left: 0px;
            position: ${scroll.camera.isMax ? 'fixed' : 'absolute'};
            ${CSSContainer}
            width: 100vw;
            height: 100vh;
            gap: 40px;
            background-color: #000000;
          `}
        >
          <AtomWrapper
            css={css`
              width: 100%;
              flex-direction: row;
              position: relative;
              justify-content: center;
              align-items: center;
              height: 100%;
              min-height: 100%;
              max-width: 980px;
              z-index: 1;
              gap: 80px;
              @media screen and (max-width: 980px) {
                flex-direction: column;
                padding: 0px 30px;
                gap: 0px;
              }
            `}
          >
            <AtomWrapper
              css={css`
                position: relative;
                width: 50%;
                height: 100%;
                align-items: center;
                justify-content: center;
                @media screen and (max-width: 980px) {
                  width: 100%;
                  padding: 80px 0px 0px 0px;
                }
              `}
            >
              <AtomText
                animate={
                  scroll?.camera?.map > 80 && scroll?.shoot?.map < 25
                    ? 'open'
                    : 'closed'
                }
                variants={variants}
                transition={{
                  duration: 0.2,
                  ease: 'easeInOut'
                }}
                css={css`
                  font-size: 32px;
                  color: #cdcdcd;
                  line-height: 1.125333;
                  font-weight: 600;
                  letter-spacing: 0.004px;
                  @media screen and (max-width: 980px) {
                    font-size: 22px;
                  }
                `}
              >
                Meet the first triple‑camera system to combine cutting‑edge
                technology with the legendary simplicity of iPhone. Capture up
                to four times more scene. Get beautiful images in drastically
                lower light. Shoot the highest‑quality video in a smartphone —
                then edit with the same tools you love for photos. You’ve never
                shot with anything like it.
              </AtomText>
              <AtomWrapper
                animate={
                  scroll.shoot.map >= 25 && scroll.shoot.map < 50
                    ? 'open'
                    : 'closed'
                }
                variants={variants}
                transition={{
                  duration: 0.2,
                  ease: 'easeInOut'
                }}
                css={css`
                  left: 0px;
                  position: absolute;
                  width: 100%;
                  height: max-content;
                  top: 65vh;
                  left: 0;
                  transform: translate(-50% -50%);
                  @media screen and (max-width: 980px) {
                    transform: translate(-50% -50%);
                    top: 15vh;
                  }
                  hr {
                    margin: 10px 0px 20px 0px;
                    width: 100vw;
                    max-width: 980px;
                    height: 3px;
                    border: 1px solid #848484;
                    background-color: #848484;
                    @media screen and (max-width: 980px) {
                      display: none;
                    }
                  }
                  z-index: -1;
                `}
              >
                <AtomText
                  css={css`
                    color: #f4c90d;
                    font-weight: 700;
                    font-size: 28px;
                    line-height: 1.285;
                    @media screen and (max-width: 980px) {
                      font-size: 21px;
                      margin-bottom: 10px;
                    }
                  `}
                >
                  ULTRA WIDE CAMERA
                </AtomText>
                <hr />
                <AtomText css={TextShoot}>13 mm focal length</AtomText>
                <AtomText css={TextShoot}>f/2.4 aperture</AtomText>
                <AtomText css={TextShoot}>5-element lens</AtomText>
                <AtomText css={TextShoot}>120° field of view</AtomText>
                <AtomText css={TextShoot}>4x more scene</AtomText>
                <AtomText css={TextShoot}>MP sensor</AtomText>
              </AtomWrapper>
              <AtomWrapper
                animate={
                  scroll.shoot.map >= 50 && scroll.shoot.map < 75
                    ? 'open'
                    : 'closed'
                }
                variants={variants}
                transition={{
                  duration: 0.2,
                  ease: 'easeInOut'
                }}
                css={css`
                  top: 45vh;
                  left: 0px;
                  position: absolute;
                  width: 100%;
                  height: max-content;
                  @media screen and (max-width: 980px) {
                    transform: translate(-50% -50%);
                    top: 15vh;
                  }
                  hr {
                    margin: 10px 0px 20px 0px;
                    width: 100vw;
                    max-width: 900px;
                    border: 1px solid #848484;
                    @media screen and (max-width: 980px) {
                      display: none;
                    }
                  }
                `}
              >
                <AtomText
                  css={css`
                    color: #f4c90d;
                    font-weight: 700;
                    font-size: 28px;
                    line-height: 1.285;
                    @media screen and (max-width: 980px) {
                      font-size: 21px;
                      margin-bottom: 10px;
                    }
                  `}
                >
                  WIDE CAMERA
                </AtomText>
                <hr />
                <AtomText css={TextShoot}>26 mm focal length</AtomText>
                <AtomText css={TextShoot}>f/1.8 aperture</AtomText>
                <AtomText css={TextShoot}>6-element lens</AtomText>
                <AtomText css={TextShoot}>Optical image stabilization</AtomText>
                <AtomText css={TextShoot}>100%^Focus Pixels</AtomText>
                <AtomText css={TextShoot}>New 12MP sensor</AtomText>
              </AtomWrapper>

              <AtomWrapper
                animate={scroll.shoot.map >= 75 ? 'open' : 'closed'}
                variants={variants}
                transition={{
                  duration: 0.2,
                  ease: 'easeInOut'
                }}
                css={css`
                  top: 55vh;
                  left: 0px;
                  position: absolute;
                  width: 100%;
                  height: max-content;
                  @media screen and (max-width: 980px) {
                    transform: translate(-50% -50%);
                    top: 15vh;
                  }
                  hr {
                    margin: 20px 0px 10px 0px;
                    width: 100vw;
                    max-width: 880px;
                    border: 1px solid #848484;
                    @media screen and (max-width: 980px) {
                      display: none;
                    }
                  }
                `}
              >
                <AtomText css={TextShoot}>52 mm focal length</AtomText>
                <AtomText css={TextShoot}>Larger ƒ/2.0 aperture</AtomText>
                <AtomText css={TextShoot}>6-element lens</AtomText>
                <AtomText css={TextShoot}>Optical image stabilization</AtomText>
                <AtomText css={TextShoot}>2x optical zoom</AtomText>
                <AtomText css={TextShoot}>12MP sensor</AtomText>
                <hr />
                <AtomText
                  css={css`
                    color: #f4c90d;
                    font-weight: 700;
                    font-size: 28px;
                    line-height: 1.285;
                    @media screen and (max-width: 980px) {
                      font-size: 21px;
                      margin-top: 10px;
                    }
                  `}
                >
                  TELEPHONE CAMERA
                </AtomText>
              </AtomWrapper>
            </AtomWrapper>
            <AtomWrapper
              css={css`
                width: 50%;
                height: 60%;
                position: relative;
                @media screen and (max-width: 980px) {
                  height: 100%;
                }
              `}
            >
              <AtomImage
                css={css`
                  top: 0;
                  left: 0;
                  position: absolute;
                  background-color: #000000;
                  z-index: -2;

                  img {
                    opacity: ${scroll.shoot.map >= 25 ? '0.5' : '1'};
                    width: 1400px;
                    height: 2800px;
                    background-color: #000000;
                    object-fit: contain;
                    backface-visibility: hidden;
                    transition: all 2s ease-out;
                    @media screen and (max-width: 980px) {
                      transform: translate(-25%, -25%) scale(0.5);
                    }
                  }
                `}
                src="https://assets.website-files.com/5d9d9b94bce4557fd6335ce9/5d9de623d452353459232e39_camera_three_lens_system_phone__cokiuc6tixw2_large_2x.jpg"
              />

              <AtomImage
                css={css`
                  top: 100px;
                  left: 90px;
                  position: absolute;
                  background-color: #00000000;
                  z-index: 2;

                  img {
                    opacity: ${scroll.shoot.map >= 25 && scroll.shoot.map < 50
                      ? '1'
                      : '0'};
                    width: 560px;
                    height: 565px;
                    background-color: #00000000;
                    object-fit: contain;
                    backface-visibility: hidden;
                    transition: all 0.5s ease-out;
                    @media screen and (max-width: 980px) {
                      transform: translate(-33.5%, -34%) scale(0.5);
                    }
                  }
                `}
                src="https://assets.website-files.com/5d9d9b94bce4557fd6335ce9/5d9df2ef916a653b009ed535_middle.png"
              />
              <AtomImage
                css={css`
                  top: 100px;
                  left: 90px;
                  position: absolute;
                  background-color: #00000000;
                  z-index: 2;

                  img {
                    opacity: ${scroll.shoot.map >= 50 && scroll.shoot.map < 75
                      ? '1'
                      : '0'};
                    width: 560px;
                    height: 565px;
                    background-color: #00000000;
                    object-fit: contain;
                    backface-visibility: hidden;
                    transition: all 0.5s ease-out;
                    @media screen and (max-width: 980px) {
                      transform: translate(-33.5%, -34%) scale(0.5);
                    }
                  }
                `}
                src="https://assets.website-files.com/5d9d9b94bce4557fd6335ce9/5d9df2f020ac3a16e9297135_top.png"
              />
              <AtomImage
                css={css`
                  top: 100px;
                  left: 90px;
                  position: absolute;
                  background-color: #00000000;
                  z-index: 2;

                  img {
                    opacity: ${scroll.shoot.map >= 75 ? '1' : '0'};
                    width: 560px;
                    height: 565px;
                    background-color: #00000000;
                    object-fit: contain;
                    backface-visibility: hidden;
                    transition: all 0.5s ease-out;
                    @media screen and (max-width: 980px) {
                      transform: translate(-33.5%, -34%) scale(0.5);
                    }
                  }
                `}
                src="https://assets.website-files.com/5d9d9b94bce4557fd6335ce9/5d9df2f0d30da38fca8d779d_top%20copy.png"
              />
            </AtomWrapper>
          </AtomWrapper>
        </AtomWrapper>
      </AtomWrapper>
    </>
  );
};

export default SectionShoot;
