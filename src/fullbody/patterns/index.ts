// Registry of fabric patterns — same mutable-record model as the other slots.
// A pattern is DATA, not a component: a small vector tile (one or more SVG
// subpaths in `d`, drawn in the garment pair's shade over a base-colored
// ground) repeated across every base-filled surface of a garment. Apps
// register database-driven patterns at boot via registerPattern; the skeleton
// turns the def into an SVG <pattern> paint and swaps it in for color.base,
// so one registered pattern works on any top/bottoms and any color pair.
export interface PatternDef {
  /** SVG path data for the tile motif; may contain several subpaths. */
  d: string
  /** Tile width in user units — the motif must wrap cleanly at the tile edges. */
  w: number
  /** Tile height in user units. */
  h: number
}

// Built-in sample pattern — proves the slot end-to-end and gives the sandbox a swatch.
export const patternMap: Record<string, PatternDef> = {
  stripes: { d: 'M0 0H20V8H0Z', w: 20, h: 20 },
}

export function registerPattern(key: string, def: PatternDef): void {
  patternMap[key] = def
}
