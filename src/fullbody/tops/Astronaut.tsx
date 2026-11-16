import React from 'react'
import { OUTLINE } from '../theme'
import { HEAD_GEOMETRY } from '../geometry'
import { PieceProps, TopSet } from '../types'
import { TORSO_D } from './torso'

const SW = HEAD_GEOMETRY.STROKE
const SUIT = '#F4F6F8'
const PANEL = '#B9C2CC'

// Astronaut suit: white suit, chest control panel, accent shoulder bands + belt.
function Torso({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      <path d={TORSO_D} fill={SUIT} />
      {/* accent shoulder bands */}
      <path d="M150 300 Q166 290 182 292 L180 308 Q164 302 154 312 Z" fill={color.base} stroke="none" />
      <path d="M250 300 Q234 290 218 292 L220 308 Q236 302 246 312 Z" fill={color.base} stroke="none" />
      {/* zipper */}
      <path d="M200 306 V422" fill="none" stroke={PANEL} strokeWidth={4} />
      {/* chest control panel */}
      <rect x={182} y={330} width={36} height={44} rx={5} fill={PANEL} />
      <circle cx={191} cy={341} r={4} fill="#E24A4A" stroke="none" />
      <circle cx={200} cy={341} r={4} fill="#F5A623" stroke="none" />
      <circle cx={209} cy={341} r={4} fill="#4AA34A" stroke="none" />
      <rect x={188} y={352} width={24} height={5} rx={2} fill="#FFFFFF" stroke="none" />
      <rect x={188} y={361} width={16} height={5} rx={2} fill="#FFFFFF" stroke="none" />
      {/* utility belt */}
      <path d="M138 420 L262 420 L261 436 L139 436 Z" fill={color.base} />
      <rect x={193} y={422} width={14} height={12} rx={2} fill="#FFD24A" />
    </g>
  )
}

function Sleeve({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      <path d="M129 330 Q121 338 122 364 L125 452 Q124 466 142 466 Q158 466 157 452 L155 364 Q154 338 146 332 Z" fill={SUIT} />
      {/* shoulder ring */}
      <path d="M122 344 L155 344 L155 356 L122 356 Z" fill={color.base} stroke="none" />
      {/* cuff ring */}
      <path d="M125 446 L157 446 L157 460 Q157 466 142 466 Q125 466 125 458 Z" fill={color.base} />
    </g>
  )
}

export const Astronaut: TopSet = { Torso, Sleeve }
