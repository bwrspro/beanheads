import React from 'react'
import { OUTLINE } from '../theme'
import { HEAD_GEOMETRY } from '../geometry'
import { PieceProps, TopSet } from '../types'
import { TORSO_D } from './torso'

const SW = HEAD_GEOMETRY.STROKE

// Polo: crew body + collar wings + two-button placket; short sleeve with trim.
// Promoted from the avatar-lab review harness (screenshot-reviewed 2026-07-04).
function Torso({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      <path d={TORSO_D} fill={color.base} />
      {/* collar wings */}
      <path d="M178 290 L196 300 L188 312 Q178 304 178 290 Z" fill={color.shade} />
      <path d="M222 290 L204 300 L212 312 Q222 304 222 290 Z" fill={color.shade} />
      {/* placket + buttons */}
      <path d="M200 300 V336" fill="none" />
      <circle cx={200} cy={314} r={2.5} fill={color.shade} strokeWidth={1.5} />
      <circle cx={200} cy={328} r={2.5} fill={color.shade} strokeWidth={1.5} />
    </g>
  )
}

function Sleeve({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      <path d="M151 297 Q128 301 126 324 Q127 338 143 339 L166 333 Q171 307 160 298 Z" fill={color.base} />
      {/* sleeve trim */}
      <path d="M128 330 L165 324 L166 333 L143 339 Q131 338 128 330 Z" fill={color.shade} />
    </g>
  )
}

export const Polo: TopSet = { Torso, Sleeve }
