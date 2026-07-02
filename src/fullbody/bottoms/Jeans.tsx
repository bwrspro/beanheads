import React from 'react'
import { OUTLINE } from '../theme'
import { HEAD_GEOMETRY } from '../geometry'
import { PieceProps, BottomsSet } from '../types'

const SW = HEAD_GEOMETRY.STROKE
const STITCH = '#8A8F96'

// Relaxed jeans leg (left-authored): tapered leg + side seam + front-pocket
// stitch + rolled cuff in the lighter shade.
function Leg({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      <path d="M140 430 L145 556 Q146 570 160 571 L176 571 Q190 570 191 556 L194 430 Z" fill={color.base} />
      <path d="M144 444 L149 550" fill="none" stroke={STITCH} strokeWidth={1.8} />
      <path d="M150 450 Q156 466 172 470" fill="none" stroke={STITCH} strokeWidth={2} />
      <path d="M142 552 Q142 548 147 548 H189 Q194 548 194 552 V576 Q194 584 186 584 H150 Q142 584 142 576 Z" fill={color.shade} />
      <path d="M146 555 H190" fill="none" stroke={STITCH} strokeWidth={2} />
    </g>
  )
}

export const Jeans: BottomsSet = { Leg }
