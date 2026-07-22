import React from 'react'
import { OUTLINE } from '../theme'
import { HEAD_GEOMETRY } from '../geometry'
import { PieceProps, TopSet } from '../types'
import { TORSO_D } from './torso'

const SW = HEAD_GEOMETRY.STROKE

// Sports jersey: contrast raglan yokes + big white number patch reading "10".
function Torso({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      <path d={TORSO_D} fill={color.base} />
      {/* raglan shoulder yokes */}
      <path d="M152 298 Q176 284 200 292 L200 312 Q174 302 156 314 Q152 306 152 298 Z" fill={color.shade} />
      <path d="M248 298 Q224 284 200 292 L200 312 Q226 302 244 314 Q248 306 248 298 Z" fill={color.shade} />
      {/* number patch */}
      <rect x={178} y={330} width={44} height={62} rx={6} fill="#FFFFFF" />
      {/* "1" */}
      <path d="M186 352 L194 342 L198 342 L198 380 L191 380 L191 352 Z" fill={color.shade} stroke="none" />
      {/* "0" */}
      <circle cx={209} cy={361} r={11.5} fill="none" stroke={color.shade} strokeWidth={6} />
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
