import { colors } from '../theme'

// Full-body parts reuse the library's own palette so the hand-authored body shares
// the head's exact outline, skin and clothing colors (one merged figure).
export const OUTLINE = colors.outline

type Pair = { base: string; shadow: string }

export function skin(tone: string): Pair {
  return (colors.skin as Record<string, Pair>)[tone] ?? colors.skin.light
}

export function clothing(color: string): Pair {
  return (colors.clothing as Record<string, Pair>)[color] ?? colors.clothing.white
}
