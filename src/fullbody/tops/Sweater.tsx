import React from 'react'
import { OUTLINE } from '../theme'
import { HEAD_GEOMETRY } from '../geometry'
import { PieceProps, TopSet } from '../types'
import { TORSO_D } from './torso'

const SW = HEAD_GEOMETRY.STROKE

// Sweater: ribbed crew collar + ribbed hem band; long sleeve with ribbed cuff.
// Promoted from the avatar-lab review harness (screenshot-reviewed 2026-07-04).
function Torso({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      <path d={TORSO_D} fill={color.base} />
      {/* ribbed collar */}
      <path d="M176 288 Q200 302 224 288 Q223 308 200 312 Q177 308 176 288 Z" fill={color.shade} />
      {/* hem band + ribbing */}
      <path d="M158 430 H242 L242 446 L158 446 Z" fill={color.shade} />
      <path d="M170 432 V444 M184 432 V444 M198 432 V444 M212 432 V444 M226 432 V444" fill="none" strokeWidth={2} />
    </g>
  )
}

function Sleeve({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      <path d="M129 330 Q121 338 122 364 L125 450 Q124 464 142 464 Q158 464 157 450 L155 364 Q154 338 146 332 Z" fill={color.base} />
      {/* ribbed cuff */}
      <path d="M126 448 Q126 444 131 444 H152 Q157 444 157 448 V462 Q157 468 151 468 H132 Q126 468 126 462 Z" fill={color.shade} />
      <path d="M133 448 V464 M140 448 V466 M147 448 V465" fill="none" strokeWidth={2} />
    </g>
  )
}

export const Sweater: TopSet = { Torso, Sleeve }
