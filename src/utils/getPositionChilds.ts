import { RefDiv } from '../jotai/ref';
import { map } from './map';

export const getPositionChilds = (child: RefDiv) => {
  const getHeight = child?.current?.clientHeight ?? 0;
  const getScroll = child?.current?.getBoundingClientRect().top ?? 0;
  const getScrollChild = Math.max(getScroll * -1, 0);
  const applyRules = Math.min(getScrollChild, getHeight);
  const getMap = map(applyRules, 0, getHeight, 0, 100);
  return {
    distance: applyRules,
    isMax: getScrollChild >= getHeight,
    isPreMax: getScrollChild >= getHeight - 50,
    max: getHeight,
    map: getMap,
    mapHalf: map(applyRules, 0, getHeight, 0, 50),
    mapQuarter: map(applyRules, 0, getHeight, 0, 25),
    mapHalfQuarter: map(applyRules, 0, getHeight, 0, 15),
    middleUp: Math.min(getMap, 50),
    middleDown: Math.max(getMap, 50),
    middle: Math.abs(getMap - 50)
  };
};
