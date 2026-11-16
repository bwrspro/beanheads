import React from 'react'
import { OUTLINE } from '../theme'
import { HEAD_GEOMETRY } from '../geometry'
import { PieceProps, TopSet } from '../types'
import { TORSO_D } from './torso'

const SW = HEAD_GEOMETRY.STROKE

// Dino costume: belly oval + big triangle spikes on the torso sides and sleeves.
function Torso({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      {/* side spikes (under the torso silhouette edges) */}
      <path d="M140 332 L116 322 L141 312 Z" fill={color.base} />
      <path d="M138 372 L113 362 L139 352 Z" fill={color.base} />
      <path d="M140 412 L116 402 L141 392 Z" fill={color.base} />
      <path d="M260 332 L284 322 L259 312 Z" fill={color.base} />
      <path d="M262 372 L287 362 L261 352 Z" fill={color.base} />
      <path d="M260 412 L284 402 L259 392 Z" fill={color.base} />
      <path d={TORSO_D} fill={color.base} />
      <ellipse cx={200} cy={382} rx={34} ry={48} fill={color.shade} />
      <path d="M178 356 Q200 348 222 356" fill="none" stroke={OUTLINE} strokeWidth={2} />
    </g>
  )
}

function Sleeve({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      <path d="M123 368 L104 361 L124 353 Z" fill={color.shade} />
      <path d="M125 410 L106 403 L126 395 Z" fill={color.shade} />
      <path d="M129 330 Q121 338 122 364 L125 452 Q124 466 142 466 Q158 466 157 452 L155 364 Q154 338 146 332 Z" fill={color.base} />
    </g>
  )
}

export const Dino: TopSet = { Torso, Sleeve }
