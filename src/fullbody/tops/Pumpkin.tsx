import React from 'react'
import { OUTLINE } from '../theme'
import { HEAD_GEOMETRY } from '../geometry'
import { PieceProps, TopSet } from '../types'
import { TORSO_D } from './torso'

const SW = HEAD_GEOMETRY.STROKE
const PUMPKIN = '#F5A623'
const PUMPKIN_DEEP = '#D9821B'
const LEAF = '#4AA34A'

// Pumpkin costume: bulged ribbed orange body (silhouette widens past the torso)
// with a jagged leaf collar; accent color on the cuffs.
function Torso({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      {/* side bulges widen the silhouette */}
      <path d="M138 336 Q118 372 139 408 L146 400 Q132 372 145 344 Z" fill={PUMPKIN} />
      <path d="M262 336 Q282 372 261 408 L254 400 Q268 372 255 344 Z" fill={PUMPKIN} />
      <path d={TORSO_D} fill={PUMPKIN} />
      {/* ribs */}
      <path d="M172 306 Q160 372 172 440 M200 302 Q196 372 200 444 M228 306 Q240 372 228 440" fill="none" stroke={PUMPKIN_DEEP} strokeWidth={4} />
      {/* jagged leaf collar */}
      <path d="M162 300 L176 316 L188 298 L200 318 L212 298 L224 316 L238 300 L226 292 L200 288 L174 292 Z" fill={LEAF} />
      {/* accent hem */}
      <path d="M142 434 L258 434 L258 446 L158 446 Q146 446 142 440 Z" fill={color.base} stroke="none" />
    </g>
  )
}

function Sleeve({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      <path d="M129 330 Q121 338 122 360 L124 392 Q124 402 141 402 Q158 402 157 392 L156 360 Q154 338 146 332 Z" fill={PUMPKIN} />
      <path d="M126 356 Q124 375 127 394 M139 352 Q138 376 139 400" fill="none" stroke={PUMPKIN_DEEP} strokeWidth={3.4} />
      <path d="M124 388 L156 388 L157 392 Q158 402 141 402 Q124 402 124 392 Z" fill={color.base} />
    </g>
  )
}

export const Pumpkin: TopSet = { Torso, Sleeve }
