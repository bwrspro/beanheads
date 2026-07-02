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
      {/* crew collar */}
      <path d="M178 290 Q200 301 222 290 Q220 306 200 308 Q180 306 178 290 Z" fill={color.shade} />
    </g>
  )
}

function Sleeve({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      <path d="M151 297 Q128 301 126 324 Q127 338 143 339 L166 333 Q171 307 160 298 Z" fill={color.shade} />
    </g>
  )
}

export const Crew: TopSet = { Torso, Sleeve }
