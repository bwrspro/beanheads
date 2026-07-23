import React from 'react'
import { OUTLINE } from '../theme'
import { HEAD_GEOMETRY } from '../geometry'
import { PieceProps, TopSet } from '../types'
import { TORSO_D } from './torso'

const SW = HEAD_GEOMETRY.STROKE
const METAL = '#AEB6C2'
const DARK = '#6E7684'

// Robot suit: metal torso with shoulder bolts poking OUT of the silhouette,
// chest core light in the accent color, segmented belly.
function Torso({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      {/* shoulder bolts (stick out) */}
      <rect x={116} y={304} width={24} height={18} rx={3} fill={DARK} />
      <circle cx={122} cy={313} r={5} fill={METAL} />
      <rect x={260} y={304} width={24} height={18} rx={3} fill={DARK} />
      <circle cx={278} cy={313} r={5} fill={METAL} />
      <path d={TORSO_D} fill={METAL} />
      {/* chest plate + core light */}
      <rect x={168} y={318} width={64} height={58} rx={8} fill={DARK} />
      <circle cx={200} cy={347} r={16} fill={color.base} />
      <circle cx={200} cy={347} r={7} fill="#FFFFFF" stroke="none" />
      {/* belly segments */}
      <path d="M156 392 H244 M158 410 H242 M159 428 H241" fill="none" strokeWidth={3} />
      {/* rivets */}
      <circle cx={152} cy={324} r={2.6} fill={DARK} stroke="none" />
      <circle cx={248} cy={324} r={2.6} fill={DARK} stroke="none" />
      <circle cx={150} cy={430} r={2.6} fill={DARK} stroke="none" />
      <circle cx={250} cy={430} r={2.6} fill={DARK} stroke="none" />
    </g>
  )
}

function Sleeve({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      <path d="M129 330 Q121 338 122 364 L125 452 Q124 466 142 466 Q158 466 157 452 L155 364 Q154 338 146 332 Z" fill={METAL} />
      {/* elbow joint */}
      <circle cx={139} cy={396} r={9} fill={DARK} />
      {/* accent cuff */}
      <path d="M125 446 L157 446 L157 460 Q157 466 142 466 Q125 466 125 458 Z" fill={color.base} />
    </g>
  )
}

export const Robot: TopSet = { Torso, Sleeve }
