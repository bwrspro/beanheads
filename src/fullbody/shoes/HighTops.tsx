import React from 'react'
import { OUTLINE } from '../theme'
import { HEAD_GEOMETRY } from '../geometry'
import { PieceProps, ShoeSet } from '../types'

const SW = HEAD_GEOMETRY.STROKE

// High-top sneakers: ankle collar above the shoe line, big laces, white sole + toe cap.
function Shoe({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      {/* sole */}
      <path d="M110 610 Q106 624 122 626 L186 626 Q194 626 194 616 V610 Q150 620 118 606 Q110 606 110 610 Z" fill="#FFFFFF" />
      {/* tall upper wrapping the ankle */}
      <path d="M150 546 Q150 540 160 540 L184 540 Q191 541 191 550 L190 596 Q150 610 120 600 Q112 596 116 586 Q126 564 144 553 Q147 548 150 546 Z" fill={color.base} />
      {/* ankle collar */}
      <path d="M150 546 Q150 540 160 540 L184 540 Q191 541 191 550 L191 558 Q170 552 151 556 Z" fill={color.shade} />
      {/* toe cap */}
      <path d="M110 608 Q107 591 124 586 Q139 582 146 596 Q150 608 138 612 Q122 615 113 612 Q110 610 110 608 Z" fill="#FFFFFF" />
      {/* foxing stripe */}
      <path d="M122 604 Q150 613 188 603" fill="none" stroke={color.shade} strokeWidth={2.5} />
      {/* laces */}
      <path d="M154 562 L182 570 M154 570 L182 562 M155 578 L181 586 M155 586 L181 578" fill="none" stroke="#FFFFFF" strokeWidth={2.6} />
      <circle cx={153} cy={565} r={1.7} fill="#FFFFFF" stroke="none" />
      <circle cx={153} cy={581} r={1.7} fill="#FFFFFF" stroke="none" />
      <circle cx={183} cy={565} r={1.7} fill="#FFFFFF" stroke="none" />
      <circle cx={183} cy={581} r={1.7} fill="#FFFFFF" stroke="none" />
    </g>
  )
}

export const HighTops: ShoeSet = { Shoe }
