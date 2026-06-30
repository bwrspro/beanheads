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
export { ANIMATIONS, ANIMATION_NAMES } from './fullbody/anim/animations'
export { FrameAnimator } from './fullbody/anim/FrameAnimator'
export { useFrameAnimation } from './fullbody/anim/useFrameAnimation'
