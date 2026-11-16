import React from 'react'
import { OUTLINE } from '../theme'
import { HEAD_GEOMETRY } from '../geometry'
import { PieceProps, TopSet } from '../types'
import { TORSO_D } from './torso'

const SW = HEAD_GEOMETRY.STROKE

// Camp-collar vacation shirt: open V collar + chunky white 5-petal flowers.
function Flower({ cx, cy }: { cx: number; cy: number }) {
  const petals = [
    [0, -5.2], [4.9, -1.6], [3.1, 4.2], [-3.1, 4.2], [-4.9, -1.6],
  ]
  return (
    <g stroke="none">
      {petals.map(([dx, dy], i) => (
        <circle key={i} cx={cx + dx} cy={cy + dy} r={3.4} fill="#FFFFFF" />
      ))}
      <circle cx={cx} cy={cy} r={2.4} fill="#FFD24A" />
    </g>
  )
}

function Torso({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      <path d={TORSO_D} fill={color.base} />
      {/* open collar */}
      <path d="M188 294 L200 320 L212 294 L206 291 L200 306 L194 291 Z" fill={color.shade} />
      <Flower cx={168} cy={342} />
      <Flower cx={233} cy={354} />
      <Flower cx={179} cy={398} />
      <Flower cx={223} cy={418} />
      <Flower cx={205} cy={372} />
    </g>
  )
}

function Sleeve({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      <path d="M129 330 Q121 338 122 360 L124 392 Q124 402 141 402 Q158 402 157 392 L156 360 Q154 338 146 332 Z" fill={color.base} />
      <path d="M124 388 L156 388 L157 392 Q158 402 141 402 Q124 402 124 392 Z" fill={color.shade} />
      <Flower cx={139} cy={362} />
    </g>
  )
}

export const Hawaiian: TopSet = { Torso, Sleeve }
