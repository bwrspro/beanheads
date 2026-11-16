import React from 'react'
import { OUTLINE } from '../theme'
import { HEAD_GEOMETRY } from '../geometry'
import { PieceProps, ShoeSet } from '../types'

const SW = HEAD_GEOMETRY.STROKE
const BLACK = '#26282E'

// Soccer cleats: colored upper + white swoosh + black sole with studs poking below.
function Shoe({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      {/* studs */}
      <path d="M126 622 L136 622 L134 632 L128 632 Z" fill={BLACK} />
      <path d="M149 622 L159 622 L157 632 L151 632 Z" fill={BLACK} />
      <path d="M172 622 L182 622 L180 632 L174 632 Z" fill={BLACK} />
      {/* sole plate */}
      <path d="M110 608 Q106 620 122 623 L186 623 Q194 623 194 613 V607 Q150 617 118 604 Q110 604 110 608 Z" fill={BLACK} />
      {/* upper */}
      <path d="M120 604 Q120 582 144 579 L180 579 Q190 580 190 594 L190 606 Q150 616 120 604 Z" fill={color.base} />
      {/* swoosh */}
      <path d="M126 598 Q148 606 176 594 Q152 610 130 604 Z" fill="#FFFFFF" strokeWidth={1.5} />
      {/* lace band */}
      <path d="M148 584 L172 584 M147 590 L171 590" fill="none" stroke={color.shade} strokeWidth={2.4} />
    </g>
  )
}

export const Cleats: ShoeSet = { Shoe }
