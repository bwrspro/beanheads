// A Pose is ONE animation frame's state. Two kinds of fields:
// - transform fields: limb rotations around skeleton pivots (visual clockwise
//   degrees), an upper-body bob, and a head tilt around the neck.
// - face-swap fields: per-frame variant KEYS (eyesMap/eyebrowsMap/mouthsMap)
//   that override the static face props for that frame — blink/talk/expressions
//   without any face rig.
export interface Pose {
  bob?: number
  headDeg?: number
  leftArmDeg?: number
  rightArmDeg?: number
  leftLegDeg?: number
  rightLegDeg?: number
  eyes?: string
  eyebrows?: string
  mouth?: string
}

export const REST: Pose = {}
