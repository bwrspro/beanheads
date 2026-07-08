import * as theme from './theme'

export { theme }
export * from './components/Avatar'
export { Avatar as BeanHead } from './components/Avatar'

export { ThemeContext } from './themeContext'

export { Noop } from './utils/Noop'

// ── Full-body BeanHead + frame-based animation ───────────────────────────────
export { FullBeanHead } from './fullbody/FullBeanHead'
export type { FullBeanHeadProps } from './fullbody/FullBeanHead'
export type { Pose } from './fullbody/anim/pose'
export { ANIMATIONS, ANIMATION_NAMES, registerAnimation } from './fullbody/anim/animations'
export { FrameAnimator } from './fullbody/anim/FrameAnimator'
export { useFrameAnimation } from './fullbody/anim/useFrameAnimation'
// registries + runtime registration (database-driven extension points)
export { topMap, registerTop } from './fullbody/tops'
export { bottomsMap, registerBottoms } from './fullbody/bottoms'
export { shoeMap, registerShoe } from './fullbody/shoes'
export { graphicMap, registerGraphic, imageGraphic } from './fullbody/graphics'
export { patternMap, registerPattern } from './fullbody/patterns'
export type { PatternDef } from './fullbody/patterns'
export {
  BOTTOMS_COLORS,
  SHOE_COLORS,
  registerBottomsColor,
  registerShoeColor,
  bottomsHex,
  shoeHex,
} from './fullbody/palette'
export { registerClothingColor, registerSkinTone, skinPair, clothingPair } from './fullbody/theme'
export type { ColorPair, PieceProps, LimbProps, GraphicProps, TopSet, BottomsSet, ShoeSet } from './fullbody/types'
