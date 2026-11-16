import React from 'react'
import { OUTLINE } from '../theme'
import { HEAD_GEOMETRY } from '../geometry'
import { PieceProps, TopSet } from '../types'
import { TORSO_D } from './torso'

const SW = HEAD_GEOMETRY.STROKE

// Hoodie (hood down): drawstrings + kangaroo pocket + neckline bulge; long
// sleeve with cuff. A hood-UP variant needs a behind-head skeleton slot —
// see trap #5 in the avatar-parts skill; this one stays fully in front.
// Promoted from the avatar-lab review harness (screenshot-reviewed 2026-07-04).
function Torso({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      <path d={TORSO_D} fill={color.base} />
      {/* neckline bulge (folded hood) */}
      <path d="M172 292 Q200 312 228 292 Q226 306 200 310 Q174 306 172 292 Z" fill={color.shade} />
      {/* drawstrings */}
      <path d="M192 306 L189 334" fill="none" strokeWidth={3.5} />
      <path d="M208 306 L211 334" fill="none" strokeWidth={3.5} />
      {/* kangaroo pocket */}
      <path
        d="M168 384 Q166 380 172 379 L228 379 Q234 380 232 384 L226 420 Q225 425 219 425 L181 425 Q175 425 174 420 Z"
        fill={color.shade}
      />
    </g>
  )
}

function Sleeve({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      <path d="M129 330 Q121 338 122 364 L125 452 Q124 466 142 466 Q158 466 157 452 L155 364 Q154 338 146 332 Z" fill={color.base} />
      {/* cuff */}
      <path d="M126 452 Q126 448 131 448 H152 Q157 448 157 452 V462 Q157 468 151 468 H132 Q126 468 126 462 Z" fill={color.shade} />
    </g>
  )
}

export const Hoodie: TopSet = { Torso, Sleeve }
