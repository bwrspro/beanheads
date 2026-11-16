import React from 'react'
import { OUTLINE } from '../theme'
import { HEAD_GEOMETRY } from '../geometry'
import { PieceProps, ShoeSet } from '../types'

const SW = HEAD_GEOMETRY.STROKE

// Roller skates: color boot y ~575, white toe cap, platform sole, two yellow wheels with hub.
function Shoe({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      <path d="M122 575 Q120 585 120 600 L190 600 Q192 585 192 575 Z" fill={color.base} />
      <path d="M125 595 Q125 588 135 586 L175 586 Q185 588 185 595 Z" fill="#FFFFFF" />
      <path d="M114 608 Q106 622 122 626 L186 626 Q194 626 194 612 V608 Z" fill={color.base} />
      <circle cx="135" cy="618" r="7" fill="#FFD24A" />
      <circle cx="135" cy="618" r="3" fill="#9C7A24" />
      <circle cx="170" cy="618" r="7" fill="#FFD24A" />
      <circle cx="170" cy="618" r="3" fill="#9C7A24" />
      <path d="M115 595 L118 600" fill="none" stroke={color.shade} strokeWidth={2} strokeLinecap="round" />
    </g>
  )
}

export const Skates: ShoeSet = { Shoe }
