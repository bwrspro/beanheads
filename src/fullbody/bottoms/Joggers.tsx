import React from 'react'
import { OUTLINE } from '../theme'
import { HEAD_GEOMETRY } from '../geometry'
import { PieceProps, BottomsSet } from '../types'

const SW = HEAD_GEOMETRY.STROKE

// Joggers: baggy balloon leg gathered into a tall cuff + white drawstrings.
function Leg({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      <path d="M138 430 L139 500 Q139 540 152 547 L184 547 Q196 540 196 500 L197 430 Z" fill={color.base} />
      {/* pocket slit */}
      <path d="M150 452 Q158 468 172 472" fill="none" strokeWidth={2.4} />
      {/* drawstrings */}
      <path d="M162 434 L159 452 M172 434 L175 452" fill="none" stroke="#FFFFFF" strokeWidth={2.6} />
      {/* tall cuff */}
      <path d="M150 547 H185 Q193 548 193 558 V574 Q193 582 185 582 H152 Q144 582 144 574 V558 Q144 548 150 547 Z" fill={color.shade} />
      <path d="M152 552 V578 M168 552 V580 M184 552 V578" fill="none" strokeWidth={2} />
    </g>
  )
}

export const Joggers: BottomsSet = { Leg }
