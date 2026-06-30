// Bottoms + shoe palettes (additions beyond the head's clothing palette).
// For bottoms, `shade` is the lighter rolled-cuff / fold color.
// For shoes, `shade` is the canvas shadow / lace accent; sole + toe cap are white.
type Pair = { base: string; shade: string }

const BOTTOMS: Record<string, Pair> = {
  denim: { base: '#3E5063', shade: '#9DB0BE' }, // blue denim w/ light rolled cuff
  black: { base: '#2E3138', shade: '#6E727A' },
  khaki: { base: '#C2A878', shade: '#E2D4B6' },
  red: { base: '#C0473E', shade: '#E08C84' },
}

const SHOES: Record<string, Pair> = {
  white: { base: '#EFEFEF', shade: '#CFCFCF' },
  black: { base: '#34373E', shade: '#22242A' },
  red: { base: '#C0473E', shade: '#9E392F' },
  purple: { base: '#5E3A9E', shade: '#47297A' },
}

export function bottomsHex(key: string): Pair {
  return BOTTOMS[key] ?? BOTTOMS.denim
}
export function shoeHex(key: string): Pair {
  return SHOES[key] ?? SHOES.white
}
