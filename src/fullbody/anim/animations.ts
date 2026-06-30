import { Pose } from './pose'

// Each animation is a list of frames; each frame is a Pose state (rendered as the
// avatar SVG). Edit/extend these arrays to add or tweak frames, or add new named
// animations — that is the whole authoring surface.
export const ANIMATIONS: Record<string, Pose[]> = {
  idle: [
    { bob: 0, leftArmDeg: 0, rightArmDeg: 0 },
    { bob: -2, leftArmDeg: 2, rightArmDeg: -2 },
    { bob: -3, leftArmDeg: 3, rightArmDeg: -3 },
    { bob: -2, leftArmDeg: 2, rightArmDeg: -2 },
    { bob: 0, leftArmDeg: 0, rightArmDeg: 0 },
  ],
  wave: [
    { rightArmDeg: -132 },
    { rightArmDeg: -150 },
    { rightArmDeg: -136 },
    { rightArmDeg: -152 },
    { rightArmDeg: -140 },
  ],
  walk: [
    { leftLegDeg: 18, rightLegDeg: -18, leftArmDeg: -16, rightArmDeg: 16, bob: -2 },
    { leftLegDeg: 9, rightLegDeg: -9, leftArmDeg: -8, rightArmDeg: 8, bob: 0 },
    { leftLegDeg: 0, rightLegDeg: 0, leftArmDeg: 0, rightArmDeg: 0, bob: -3 },
    { leftLegDeg: -9, rightLegDeg: 9, leftArmDeg: 8, rightArmDeg: -8, bob: 0 },
    { leftLegDeg: -18, rightLegDeg: 18, leftArmDeg: 16, rightArmDeg: -16, bob: -2 },
  ],
}

export type AnimationName = keyof typeof ANIMATIONS
export const ANIMATION_NAMES = Object.keys(ANIMATIONS)
