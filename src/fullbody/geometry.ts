// Full-body canvas (400 x 690). The Avatar (head) is rendered small via `headSvg`
// and clipped to head-only; our own body parts occupy the space below so head +
// body read as one figure. STROKE matches the library's 12px outline at this scale.
export const HEAD_GEOMETRY = {
  viewBox: { w: 400, h: 690 },
  headSvg: { x: -2, y: -42, w: 405, h: 400 },
  NECK_Y: 280,
  HIP_Y: 432,
  ANKLE_Y: 572,
  CENTER_X: 200,
  STROKE: 5,
} as const

// Chest area a torso decal is scaled into (decals are authored in a 100x100
// box). Centered on the figure, below the collar (y~308), above the hem curve,
// inside the side seams; arms render on top, so slight edge overlap just tucks
// the decal behind the arm naturally.
export const DECAL_BOX = { x: 162, y: 318, w: 76, h: 76 } as const
