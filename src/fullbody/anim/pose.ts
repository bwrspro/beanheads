// A Pose is ONE animation frame's state: how far each limb is rotated around its
// pivot (degrees) plus a vertical bob of the upper body. A frame stores a Pose;
// FullBeanHead renders that Pose as SVG. Animations are arrays of these frames.
export interface Pose {
  bob?: number
  leftArmDeg?: number
  rightArmDeg?: number
  leftLegDeg?: number
  rightLegDeg?: number
}

export const REST: Pose = {}
