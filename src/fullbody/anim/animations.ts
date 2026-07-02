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
  // eyes close briefly (content = closed lids), then reopen
  blink: [{}, {}, { eyes: 'content' }, { eyes: 'content' }, {}],
  // mouth cycles open/closed shapes — pair with any outfit/pose
  talk: [
    { mouth: 'open' },
    { mouth: 'grin' },
    { mouth: 'open' },
    { mouth: 'lips' },
    { mouth: 'grin' },
  ],
  // both arms up + bounce + happy face (arms: left positive / right negative = raised outward)
  celebrate: [
    { leftArmDeg: 130, rightArmDeg: -130, bob: -2, eyes: 'happy', mouth: 'open' },
    { leftArmDeg: 145, rightArmDeg: -145, bob: -6, eyes: 'happy', mouth: 'open' },
    { leftArmDeg: 138, rightArmDeg: -138, bob: 0, eyes: 'happy', mouth: 'openSmile' },
    { leftArmDeg: 150, rightArmDeg: -150, bob: -6, eyes: 'heart', mouth: 'open' },
    { leftArmDeg: 140, rightArmDeg: -140, bob: -3, eyes: 'happy', mouth: 'open' },
  ],
  // head-tilt groove: lean + arm sway + small leg shift
  dance: [
    { headDeg: -8, leftArmDeg: 40, rightArmDeg: 40, leftLegDeg: 6, rightLegDeg: -2, bob: -2, mouth: 'openSmile' },
    { headDeg: 0, bob: 0, mouth: 'openSmile' },
    { headDeg: 8, leftArmDeg: -40, rightArmDeg: -40, leftLegDeg: -2, rightLegDeg: 6, bob: -2, mouth: 'openSmile' },
    { headDeg: 0, bob: 0, mouth: 'openSmile' },
    { headDeg: -8, leftArmDeg: 40, rightArmDeg: 40, leftLegDeg: 6, rightLegDeg: -2, bob: -2, mouth: 'openSmile' },
  ],
}

export type AnimationName = keyof typeof ANIMATIONS
export const ANIMATION_NAMES = Object.keys(ANIMATIONS)
