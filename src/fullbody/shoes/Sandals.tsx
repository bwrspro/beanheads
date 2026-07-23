import React from 'react'
import { OUTLINE } from '../theme'
import { HEAD_GEOMETRY } from '../geometry'
import { PieceProps, ShoeSet } from '../types'

const SW = HEAD_GEOMETRY.STROKE
const CORK = '#B9855C'

// Sandals: cork sole + two fat colored straps over the open foot.
function Shoe({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      {/* cork sole */}
      <path d="M110 608 Q104 622 120 626 L188 626 Q196 625 195 614 Q150 622 116 606 Q110 605 110 608 Z" fill={CORK} />
      {/* instep strap */}
      <path d="M128 588 Q150 600 182 596 L184 612 Q148 616 122 602 Z" fill={color.base} />
      {/* ankle strap */}
      <path d="M170 582 L188 582 L189 612 L172 612 Z" fill={color.base} />
      <circle cx={180} cy={590} r={2.2} fill={color.shade} stroke="none" />
    </g>
  )
}

export const Sandals: ShoeSet = { Shoe }
