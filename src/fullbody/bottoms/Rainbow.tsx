import React from 'react'
import { OUTLINE } from '../theme'
import { HEAD_GEOMETRY } from '../geometry'
import { PieceProps, BottomsSet } from '../types'

const SW = HEAD_GEOMETRY.STROKE

// Rainbow leggings: slim leg with five stacked color bands.
function Leg({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      <path d="M140 430 L145 556 Q146 570 160 571 L176 571 Q190 570 191 556 L194 430 Z" fill="#FFFFFF" />
      <path d="M140 430 L145 457 L194 457 L194 430 Z" fill="#E24A4A" />
      <path d="M140 457 L145 484 L194 484 L194 457 Z" fill="#F5A623" />
      <path d="M140 484 L145 511 L194 511 L194 484 Z" fill="#F8E71C" />
      <path d="M140 511 L145 538 L194 538 L194 511 Z" fill="#4AA34A" />
      <path d="M140 538 L145 556 Q146 570 160 571 L176 571 Q190 570 191 556 L194 538 Z" fill="#4A6FE2" />
      <path d="M142 552 Q142 548 147 548 H189 Q194 548 194 552 V576 Q194 584 186 584 H150 Q142 584 142 576 Z" fill={color.shade} />
    </g>
  )
}

export const Rainbow: BottomsSet = { Leg }
