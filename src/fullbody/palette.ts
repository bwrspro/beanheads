import { ColorPair } from './types'

// Bottoms + shoe palettes (additions beyond the head's clothing palette).
// `shade`: bottoms → lighter rolled-cuff/fold color; shoes → canvas shadow/lace
// accent. Records are intentionally mutable: the consuming app registers
// database-stored colors at boot via the register* helpers.
export const BOTTOMS_COLORS: Record<string, ColorPair> = {
  denim: { base: '#3E5063', shade: '#9DB0BE' },
  black: { base: '#2E3138', shade: '#6E727A' },
  khaki: { base: '#C2A878', shade: '#E2D4B6' },
  red: { base: '#C0473E', shade: '#E08C84' },
}

export const SHOE_COLORS: Record<string, ColorPair> = {
  purple: { base: '#5E3A9E', shade: '#47297A' },
  white: { base: '#EFEFEF', shade: '#CFCFCF' },
  black: { base: '#34373E', shade: '#22242A' },
  red: { base: '#C0473E', shade: '#9E392F' },
}

export function registerBottomsColor(key: string, pair: ColorPair): void {
  BOTTOMS_COLORS[key] = pair
}

export function registerShoeColor(key: string, pair: ColorPair): void {
  SHOE_COLORS[key] = pair
}

export function bottomsHex(key: string): ColorPair {
  return BOTTOMS_COLORS[key] ?? BOTTOMS_COLORS.denim
}

export function shoeHex(key: string): ColorPair {
  return SHOE_COLORS[key] ?? SHOE_COLORS.white
}
