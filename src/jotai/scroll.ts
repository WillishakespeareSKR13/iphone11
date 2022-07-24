import { atom } from 'jotai';
import { getPositionChilds } from '../utils/getPositionChilds';
import {
  RefCameraAtom,
  RefCloserAtom,
  RefPhoneAtom,
  RefProImageAtom,
  RefShootAtom,
  RefZoomAtom
} from './ref';

export const ScrollPosition = atom(0);

export const ScrollAtom = atom((get) => ({
  viewport: get(ScrollPosition),
  phone: getPositionChilds(get(RefPhoneAtom)),
  proImage: getPositionChilds(get(RefProImageAtom)),
  closer: getPositionChilds(get(RefCloserAtom)),
  camera: getPositionChilds(get(RefCameraAtom)),
  shoot: getPositionChilds(get(RefShootAtom)),
  zoom: getPositionChilds(get(RefZoomAtom))
}));
