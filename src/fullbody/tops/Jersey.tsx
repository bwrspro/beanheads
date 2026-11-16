import React from 'react'
import { OUTLINE } from '../theme'
import { HEAD_GEOMETRY } from '../geometry'
import { PieceProps, TopSet } from '../types'
import { TORSO_D } from './torso'

const SW = HEAD_GEOMETRY.STROKE

// Sports jersey: contrast raglan yokes, lace-up collar, side + hem stripes.
// Chest stays CLEAN on purpose — team logos/numbers come from the topGraphic
// decal layer, never baked into the garment.
function Torso({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      <path d={TORSO_D} fill={color.base} />
      {/* raglan shoulder yokes */}
      <path d="M152 298 Q176 284 200 292 L200 312 Q174 302 156 314 Q152 306 152 298 Z" fill={color.shade} />
      <path d="M248 298 Q224 284 200 292 L200 312 Q226 302 244 314 Q248 306 248 298 Z" fill={color.shade} />
      {/* lace-up collar */}
      <path d="M192 296 L200 312 L208 296" fill="none" stroke={color.shade} strokeWidth={3.4} />
      <path d="M194 302 L206 302 M195 307 L205 307" fill="none" stroke="#FFFFFF" strokeWidth={2} />
      {/* side stripes */}
      <path d="M137 330 L140 424 L147 424 L144 330 Z" fill={color.shade} stroke="none" />
      <path d="M263 330 L260 424 L253 424 L256 330 Z" fill={color.shade} stroke="none" />
      {/* hem stripe */}
      <path d="M139 424 L261 424 L260 436 L140 436 Z" fill={color.shade} stroke="none" />
    </g>
  )
}

function Sleeve({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      <path d="M129 330 Q121 338 122 360 L124 392 Q124 402 141 402 Q158 402 157 392 L156 360 Q154 338 146 332 Z" fill={color.shade} />
      <path d="M123 354 L156 354 L156 366 L123 366 Z" fill="#FFFFFF" stroke="none" />
    </g>
  )
}

export const Jersey: TopSet = { Torso, Sleeve }
