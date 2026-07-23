import React from 'react'
import { OUTLINE } from '../theme'
import { HEAD_GEOMETRY } from '../geometry'
import { PieceProps, BottomsSet } from '../types'

const SW = HEAD_GEOMETRY.STROKE
const STITCH = '#8A8F96'

// Relaxed shorts to mid-thigh (left-authored).
function Leg({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      <path d="M140 430 L144 505 Q145 515 159 516 L177 516 Q191 515 192 505 L194 430 Z" fill={color.base} />
      <path d="M145 511 H191" fill="none" stroke={STITCH} strokeWidth={2} />
    </g>
  )
}

export const Shorts: BottomsSet = { Leg }
