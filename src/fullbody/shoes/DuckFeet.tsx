import React from 'react'
import { OUTLINE } from '../theme'
import { HEAD_GEOMETRY } from '../geometry'
import { PieceProps, ShoeSet } from '../types'

const SW = HEAD_GEOMETRY.STROKE
const DUCK = '#F5A623'
const DUCK_DEEP = '#D9821B'

// Duck feet: big flat webbed foot sticking way out front + accent ankle strap.
function Shoe({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      {/* webbed foot: wide flat wedge with toe bumps */}
      <path
        d="M100 612 Q96 626 112 626 L186 626 Q194 624 194 612 L192 600 Q170 596 150 598 Q120 598 106 604 Q100 606 100 612 Z"
        fill={DUCK}
      />
      {/* toe bumps on the front edge */}
      <path d="M100 614 Q92 616 98 622 M106 620 Q100 624 108 626" fill="none" stroke={DUCK_DEEP} strokeWidth={2.6} />
      {/* web lines */}
      <path d="M126 624 L132 606 M152 625 L156 604 M174 625 L176 602" fill="none" stroke={DUCK_DEEP} strokeWidth={3} />
      {/* ankle strap in shoe color */}
      <path d="M152 584 L188 584 L188 602 L154 602 Z" fill={color.base} />
      <circle cx={170} cy={593} r={2.6} fill={color.shade} stroke="none" />
    </g>
  )
}

export const DuckFeet: ShoeSet = { Shoe }
