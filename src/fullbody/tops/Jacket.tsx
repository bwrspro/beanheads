import React from 'react'
import { OUTLINE } from '../theme'
import { HEAD_GEOMETRY } from '../geometry'
import { PieceProps, TopSet } from '../types'
import { TORSO_D } from './torso'

const SW = HEAD_GEOMETRY.STROKE

// Demo of the registry model: a brand-new top variant is ONE file + ONE map line
// (tops/index.ts). Long sleeves prove the skeleton point — they cover the arm and
// still move with it, because they render inside the arm pivot.
function Torso({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      <path d={TORSO_D} fill={color.base} />
      {/* open front */}
      <path d="M200 300 V446" fill="none" />
      {/* lapels */}
      <path d="M200 300 L186 296 L196 316 Z" fill={color.shade} />
      <path d="M200 300 L214 296 L204 316 Z" fill={color.shade} />
    </g>
  )
}

function Sleeve({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      {/* long sleeve to the wrist; the hand stays visible below */}
      <path d="M129 330 Q121 338 122 364 L125 452 Q124 466 142 466 Q158 466 157 452 L155 364 Q154 338 146 332 Z" fill={color.base} />
      {/* cuff */}
      <path d="M126 452 Q126 448 131 448 H152 Q157 448 157 452 V462 Q157 468 151 468 H132 Q126 468 126 462 Z" fill={color.shade} />
    </g>
  )
}

export const Jacket: TopSet = { Torso, Sleeve }
