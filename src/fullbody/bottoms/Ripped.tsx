import React from 'react'
import { OUTLINE } from '../theme'
import { HEAD_GEOMETRY } from '../geometry'
import { PieceProps, BottomsSet } from '../types'

const SW = HEAD_GEOMETRY.STROKE

// Ripped jeans: wide white knee gashes with thread ticks + rolled cuff.
function Leg({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      <path d="M140 430 L145 556 Q146 570 160 571 L176 571 Q190 570 191 556 L194 430 Z" fill={color.base} />
      <path d="M148 476 L189 473 L187 484 L150 487 Z" fill="#FFFFFF" stroke="none" />
      <path d="M150 506 L187 503 L185 514 L152 517 Z" fill="#FFFFFF" stroke="none" />
      <path d="M153 536 L185 533 L184 542 L155 545 Z" fill="#FFFFFF" stroke="none" />
      {/* threads */}
      <path d="M156 476 V487 M168 475 V486 M180 474 V485 M160 506 V516 M174 505 V515" fill="none" stroke="#FFFFFF" strokeWidth={1.6} />
      <path d="M142 552 Q142 548 147 548 H189 Q194 548 194 552 V574 Q194 582 186 582 H150 Q142 582 142 574 Z" fill={color.shade} />
    </g>
  )
}

export const Ripped: BottomsSet = { Leg }
