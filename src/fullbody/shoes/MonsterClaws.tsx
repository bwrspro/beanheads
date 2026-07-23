import React from 'react'
import { OUTLINE } from '../theme'
import { HEAD_GEOMETRY } from '../geometry'
import { PieceProps, ShoeSet } from '../types'

const SW = HEAD_GEOMETRY.STROKE

// Monster claw slippers: furry colored boot with white claws bursting out of
// the toe — the claws break the silhouette on purpose.
function Shoe({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      {/* claws */}
      <path d="M116 590 L94 592 L114 602 Z" fill="#FFFFFF" />
      <path d="M112 604 L92 610 L112 616 Z" fill="#FFFFFF" />
      <path d="M114 618 L96 626 L118 628 Z" fill="#FFFFFF" />
      {/* furry boot: zigzag top edge */}
      <path
        d="M146 580 L152 570 L158 580 L164 570 L170 580 L176 570 L182 580 Q192 582 192 596 L192 612 Q192 624 180 626 L124 626 Q108 624 108 608 Q108 592 124 586 Q136 580 146 580 Z"
        fill={color.base}
      />
      {/* fur tufts */}
      <path d="M126 600 Q134 596 140 602 M148 606 Q156 602 162 608 M168 598 Q176 594 182 600" fill="none" stroke={color.shade} strokeWidth={2.6} />
      {/* toe pad */}
      <ellipse cx={128} cy={616} rx={10} ry={6} fill={color.shade} stroke="none" />
    </g>
  )
}

export const MonsterClaws: ShoeSet = { Shoe }
