import { atom } from "jotai";
import { MutableRefObject } from "react";

export type RefDiv = MutableRefObject<HTMLDivElement | undefined>;
export const RefPhoneAtom = atom(null as unknown as RefDiv);
export const RefProImageAtom = atom(null as unknown as RefDiv);
export const RefCloserAtom = atom(null as unknown as RefDiv);
export const RefCameraAtom = atom(null as unknown as RefDiv);
