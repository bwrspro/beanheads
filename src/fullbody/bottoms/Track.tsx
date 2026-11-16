import React from 'react'
import { OUTLINE } from '../theme'
import { HEAD_GEOMETRY } from '../geometry'
import { PieceProps, BottomsSet } from '../types'

const SW = HEAD_GEOMETRY.STROKE

// Track pants: fat double white side stripe + elastic cuff.
function Leg({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      <path d="M140 430 L145 556 Q146 570 160 571 L176 571 Q190 570 191 556 L194 430 Z" fill={color.base} />
      <path d="M146 432 L151 554 L158 554 L153 432 Z" fill="#FFFFFF" stroke="none" />
      <path d="M158 432 L163 554 L169 554 L164 432 Z" fill="#FFFFFF" stroke="none" />
      {/* elastic cuff */}
      <path d="M144 550 Q144 546 149 546 H188 Q193 546 193 550 V572 Q193 580 185 580 H152 Q144 580 144 572 Z" fill={color.shade} />
      <path d="M150 554 V574 M160 555 V576 M170 555 V576 M180 554 V574" fill="none" strokeWidth={2} />
    </g>
  )
}

export const Track: BottomsSet = { Leg }
