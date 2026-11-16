import React from 'react'
import { OUTLINE } from '../theme'
import { HEAD_GEOMETRY } from '../geometry'
import { PieceProps, ShoeSet } from '../types'

const SW = HEAD_GEOMETRY.STROKE

// Moon boots: puffy white chunky boot with segment lines, thick gray sole, color strap band.
function Shoe({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      <path d="M118 585 Q115 580 135 579 L175 579 Q190 580 192 595 L192 608 Q150 616 118 585 Z" fill="#F4F6F8" />
      <path d="M125 595 L180 595 M128 603 L178 603" fill="none" stroke="#D0D0D0" strokeWidth={2} />
      <path d="M114 610 Q106 624 122 626 L186 626 Q194 626 194 614 V610 Z" fill="#B9C2CC" />
      <path d="M120 608 Q160 614 188 608" fill="none" stroke={color.base} strokeWidth={4} strokeLinecap="round" />
    </g>
  )
}

export const MoonBoots: ShoeSet = { Shoe }
