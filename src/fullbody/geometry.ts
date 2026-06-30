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
