export const map = (
  value: number,
  min: number,
  max: number,
  min2: number,
  max2: number
) => Math.ceil(((value - min) / (max - min)) * (max2 - min2) + min2);
