import React from 'react'
import { OUTLINE } from '../theme'
import { HEAD_GEOMETRY } from '../geometry'
import { PieceProps, ShoeSet } from '../types'

const SW = HEAD_GEOMETRY.STROKE

// Converse-style low-top (left-authored): white sole + toe cap, canvas upper,
// foxing stripe, criss-cross laces + eyelets.
function Shoe({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      <path d="M110 610 Q106 624 122 626 L186 626 Q194 626 194 616 V610 Q150 620 118 606 Q110 606 110 610 Z" fill="#FFFFFF" />
      <path d="M120 606 Q120 584 144 581 L180 581 Q190 582 190 596 L190 608 Q150 618 120 606 Z" fill={color.base} />
      <path d="M110 608 Q107 591 124 586 Q139 582 146 596 Q150 608 138 612 Q122 615 113 612 Q110 610 110 608 Z" fill="#FFFFFF" />
      <path d="M122 604 Q150 613 188 603" fill="none" stroke={color.shade} strokeWidth={2.5} />
      <path d="M151 587 L168 592 M151 593 L168 588 M152 598 L167 601 M152 601 L167 598" fill="none" stroke="#FFFFFF" strokeWidth={2.4} strokeLinecap="round" />
      <circle cx={150} cy={589} r={1.6} fill="#FFFFFF" stroke="none" />
      <circle cx={150} cy={596} r={1.6} fill="#FFFFFF" stroke="none" />
      <circle cx={169} cy={589} r={1.6} fill="#FFFFFF" stroke="none" />
      <circle cx={169} cy={596} r={1.6} fill="#FFFFFF" stroke="none" />
    </g>
  )
}

export const Sneakers: ShoeSet = { Shoe }
