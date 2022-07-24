import { css } from '@emotion/react';
import { useAtomValue, useSetAtom } from 'jotai';
import { useRef } from 'react';
import { TextZoom } from '../../../css/text';
import { CSSContainer } from '../../../css/wrapper';
import useSetRef from '../../../hooks/useSetRef';
import { RefZoomAtom } from '../../../jotai/ref';
import { ScrollAtom } from '../../../jotai/scroll';
import AtomImage from '../../atoms/AtomImage';
import AtomText from '../../atoms/AtomText';
import AtomWrapper from '../../atoms/AtomWrapper';

const SectionZoom = () => {
  const scroll = useAtomValue(ScrollAtom);
  const ref = useRef<HTMLDivElement>();
  const setRefZoom = useSetAtom(RefZoomAtom);
  useSetRef(ref, setRefZoom);
  return (
    <>
      <AtomWrapper
        ref={ref}
        as="section"
        css={css`
          ${CSSContainer}
          width: 100vw;
          height: 400vh;
          background-color: #00000000;
          z-index: 10;
        `}
      />
      <AtomWrapper
        as="section"
        css={css`
          ${CSSContainer}
          position: fixed;
          top: calc(400vh - ${scroll.shoot.distance}px);
          transition: top 0.9s ease-in-out;
          width: 100vw;
          height: 400vh;
          min-height: 400vh;
          background-color: #00000000;
          z-index: 8;
        `}
      >
        <AtomWrapper
          css={css`
            top: 0px;
            left: 0px;
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
            `}
          >
            <AtomWrapper
              css={css`
                width: 100%;
                height: 100%;
                align-items: center;
                justify-content: center;
                gap: 60px;
                @media screen and (max-width: 980px) {
                  padding: 0 30px;
                  gap: 30px;
                }
              `}
            >
              <AtomText
                css={css`
                  font-size: 24px;
                  color: #cdcdcd;
                  line-height: 1.333;
                  font-weight: 600;
                  b {
                    color: #ffffff;
                  }
                  @media screen and (max-width: 980px) {
                    font-size: 19px;
                  }
                `}
              >
                <b>Expanded field of view.</b> iPhone 11 Pro lets you zoom from
                the Telephoto all the way out to the new Ultra Wide camera, for
                an impressive 4x optical zoom range.
              </AtomText>
              <AtomWrapper
                css={css`
                  position: relative;
                  width: 100%;
                  height: 400px;
                  align-items: center;
                  justify-content: center;
                  @media screen and (max-width: 980px) {
                    height: 350px;
                  }
                `}
              >
                <AtomImage
                  css={css`
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    img {
                      opacity: ${scroll.zoom.map > 60 ? 1 : '0.1'};
                      width: 100%;
                      height: 100%;
                      transition: all 0.5s ease-in-out;
                    }
                  `}
                  src="https://assets.website-files.com/5d9d9b94bce4557fd6335ce9/5d9df95db7de93280b613404_camera_fov_ultrawide__e4xq1jl1q76u_large_2x.jpg"
                />
                <AtomImage
                  css={css`
                    height: 80%;
                    position: absolute;
                    width: 50%;
                    overflow: hidden;
                    img {
                      opacity: ${scroll.zoom.map > 30 ? 1 : '0.1'};
                      width: 100vw;
                      max-width: 980px;
                      height: 100%;
                      transform: translateX(-25%);
                      transition: all 0.5s ease-in-out;
                    }
                  `}
                  src="https://assets.website-files.com/5d9d9b94bce4557fd6335ce9/5d9df95db7de93280b613404_camera_fov_ultrawide__e4xq1jl1q76u_large_2x.jpg"
                />
                <AtomImage
                  css={css`
                    height: 40%;
                    position: absolute;
                    width: 20%;
                    overflow: hidden;
                    img {
                      opacity: 1;
                      width: 100vw;
                      max-width: 980px;
                      height: 100%;
                      transform: translateX(-40%);
                      transition: all 0.5s ease-in-out;
                    }
                  `}
                  src="https://assets.website-files.com/5d9d9b94bce4557fd6335ce9/5d9df95db7de93280b613404_camera_fov_ultrawide__e4xq1jl1q76u_large_2x.jpg"
                />
              </AtomWrapper>

              <AtomWrapper
                css={css`
                  justify-content: center;
                  align-items: center;
                  width: max-content;
                  .scroll-zoom {
                    margin-top: 20px;
                    width: 100%;
                    max-width: 980px;
                    border: none;
                    background-color: #aaaaaa;
                    hr {
                      margin-left: ${Math.min(scroll.zoom.map, 70)}%;
                      width: 30%;
                      border: 1px solid #ffffff;
                      transition: all 0.2s ease-in-out;
                    }
                    @media screen and (max-width: 980px) {
                      margin-top: 10px;
                    }
                  }
                `}
              >
                <AtomWrapper
                  css={css`
                    flex-direction: row;
                    justify-content: center;
                    gap: 40px;
                    @media screen and (max-width: 980px) {
                      gap: 20px;
                    }
                  `}
                >
                  <AtomText css={TextZoom}>Thelephoto</AtomText>
                  <AtomText css={TextZoom}>Wide</AtomText>
                  <AtomText css={TextZoom}>Ultra Wide</AtomText>
                </AtomWrapper>
                <div className="scroll-zoom">
                  <hr />
                </div>
              </AtomWrapper>
            </AtomWrapper>
          </AtomWrapper>
        </AtomWrapper>
      </AtomWrapper>
    </>
  );
};

export default SectionZoom;
