import { colors } from '../theme'
import { ColorPair } from './types'

// Full-body parts reuse the library's own palette so the hand-authored body
// shares the head's exact outline, skin and clothing colors (one merged figure).
export const OUTLINE = colors.outline

type ThemePair = { base: string; shadow: string }

const toPair = (p: ThemePair): ColorPair => ({ base: p.base, shade: p.shadow })

export function skinPair(tone: string): ColorPair {
  const rec = colors.skin as Record<string, ThemePair>
  return toPair(rec[tone] ?? colors.skin.light)
}

export function clothingPair(color: string): ColorPair {
  const rec = colors.clothing as Record<string, ThemePair>
  return toPair(rec[color] ?? colors.clothing.white)
}

// Runtime registration — lets the consuming app load colors from its database at
// boot and register them. Mutates the shared library palette, so the HEAD picks
// up the same registered colors (one consistent palette).
export function registerSkinTone(key: string, pair: ColorPair): void {
  const rec = colors.skin as Record<string, ThemePair>
  rec[key] = { base: pair.base, shadow: pair.shade }
}

export function registerClothingColor(key: string, pair: ColorPair): void {
  const rec = colors.clothing as Record<string, ThemePair>
  rec[key] = { base: pair.base, shadow: pair.shade }
}
