import React from 'react'
import { OUTLINE } from '../theme'
import { HEAD_GEOMETRY } from '../geometry'
import { PieceProps, TopSet } from '../types'
import { TORSO_D } from './torso'

const SW = HEAD_GEOMETRY.STROKE

// Superhero suit: contrast side panels + belt with buckle + glove cuffs.
// Chest stays CLEAN on purpose — emblems come from the topGraphic decal
// layer, never baked into the garment.
function Torso({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      <path d={TORSO_D} fill={color.base} />
      {/* contrast side panels */}
      <path d="M136 328 Q142 326 148 328 L151 424 L139 424 Z" fill={color.shade} stroke="none" />
      <path d="M264 328 Q258 326 252 328 L249 424 L261 424 Z" fill={color.shade} stroke="none" />
      {/* belt + buckle */}
      <path d="M138 424 L262 424 L261 440 L139 440 Z" fill={color.shade} />
      <rect x={193} y={425} width={14} height={14} rx={2} fill="#FFD24A" />
      {/* collar chevron */}
      <path d="M186 296 L200 310 L214 296" fill="none" stroke={color.shade} strokeWidth={4} />
    </g>
  )
}

function Sleeve({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      <path d="M129 330 Q121 338 122 364 L125 452 Q124 466 142 466 Q158 466 157 452 L155 364 Q154 338 146 332 Z" fill={color.base} />
      {/* glove cuff */}
      <path d="M124 438 L156 438 L157 452 Q157 466 142 466 Q124 466 125 452 Z" fill={color.shade} />
    </g>
  )
}

export const Hero: TopSet = { Torso, Sleeve }
