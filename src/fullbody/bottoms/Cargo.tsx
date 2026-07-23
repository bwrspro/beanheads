import React from 'react'
import { OUTLINE } from '../theme'
import { HEAD_GEOMETRY } from '../geometry'
import { PieceProps, BottomsSet } from '../types'

const SW = HEAD_GEOMETRY.STROKE

// Cargo pants: big flap pocket on the thigh + rolled cuff.
function Leg({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      <path d="M140 430 L145 556 Q146 570 160 571 L176 571 Q190 570 191 556 L194 430 Z" fill={color.base} />
      {/* pocket */}
      <rect x={146} y={474} width={26} height={34} rx={3} fill={color.base} />
      <path d="M145 474 L173 474 L172 486 L146 486 Z" fill={color.shade} />
      <circle cx={159} cy={492} r={2.4} fill={color.shade} stroke="none" />
      {/* cuff */}
      <path d="M142 552 Q142 548 147 548 H189 Q194 548 194 552 V576 Q194 584 186 584 H150 Q142 584 142 576 Z" fill={color.shade} />
    </g>
  )
}

export const Cargo: BottomsSet = { Leg }
