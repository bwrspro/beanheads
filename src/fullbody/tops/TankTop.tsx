import React from 'react'
import { OUTLINE } from '../theme'
import { HEAD_GEOMETRY } from '../geometry'
import { PieceProps, TopSet } from '../types'
import { TORSO_D } from './torso'

const SW = HEAD_GEOMETRY.STROKE

function Torso({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      <path d={TORSO_D} fill={color.base} />
      {/* wide scoop neckline */}
      <path d="M174 289 Q200 309 226 289 Q226 299 200 301 Q174 299 174 289 Z" fill={color.shade} />
    </g>
  )
}

// Thin strap instead of a sleeve — bare shoulders.
function Sleeve({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      <path d="M152 298 Q138 302 136 324 Q138 338 150 340 L164 334 Q169 308 160 300 Z" fill={color.shade} />
    </g>
  )
}

export const TankTop: TopSet = { Torso, Sleeve }
