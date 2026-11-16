import React from 'react'
import { OUTLINE } from '../theme'
import { HEAD_GEOMETRY } from '../geometry'
import { PieceProps, BottomsSet } from '../types'

const SW = HEAD_GEOMETRY.STROKE

// Knight leg armor: metal leg with knee plate and rivets.
function Leg({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      <path d="M140 430 L145 556 Q146 570 160 571 L176 571 Q190 570 191 556 L194 430 Z" fill="#AEB6C2" />
      <circle cx="168" cy="500" r="11" fill="#8F98A6" />
      <circle cx="162" cy="497" r="2" fill="#6E7684" />
      <circle cx="174" cy="497" r="2" fill="#6E7684" />
      <circle cx="168" cy="506" r="2" fill="#6E7684" />
      <path d="M142 552 Q142 548 147 548 H189 Q194 548 194 552 V576 Q194 584 186 584 H150 Q142 584 142 576 Z" fill={color.shade} />
    </g>
  )
}

export const Armor: BottomsSet = { Leg }
