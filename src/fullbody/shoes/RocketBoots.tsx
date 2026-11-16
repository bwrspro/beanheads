import React from 'react'
import { OUTLINE } from '../theme'
import { HEAD_GEOMETRY } from '../geometry'
import { PieceProps, ShoeSet } from '../types'

const SW = HEAD_GEOMETRY.STROKE
const METAL = '#AEB6C2'
const DARK = '#6E7684'

// Rocket boots: metal boot + heel fin + flame burst below the sole.
function Shoe({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      {/* flames */}
      <path d="M128 620 L136 648 L144 620 Z" fill="#F5A623" stroke="none" />
      <path d="M146 620 L156 656 L166 620 Z" fill="#F5A623" stroke="none" />
      <path d="M168 620 L175 644 L182 620 Z" fill="#F5A623" stroke="none" />
      <path d="M150 620 L156 642 L162 620 Z" fill="#E24A4A" stroke="none" />
      {/* heel fin */}
      <path d="M188 582 L203 574 L199 600 L189 598 Z" fill={color.base} />
      {/* boot */}
      <path d="M120 604 Q120 578 146 576 L182 576 Q192 578 192 594 L192 608 Q150 618 120 604 Z" fill={METAL} />
      {/* sole */}
      <path d="M112 608 Q108 618 122 621 L186 621 Q193 621 193 611 Q150 619 118 604 Q113 604 112 608 Z" fill={DARK} />
      {/* rivets + accent band */}
      <path d="M124 592 L188 588" fill="none" stroke={color.base} strokeWidth={3} />
      <circle cx={132} cy={584} r={2} fill={DARK} stroke="none" />
      <circle cx={172} cy={581} r={2} fill={DARK} stroke="none" />
    </g>
  )
}

export const RocketBoots: ShoeSet = { Shoe }
