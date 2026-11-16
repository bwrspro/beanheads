import React from 'react'
import { OUTLINE } from '../theme'
import { HEAD_GEOMETRY } from '../geometry'
import { PieceProps, TopSet } from '../types'
import { TORSO_D } from './torso'

const SW = HEAD_GEOMETRY.STROKE

// Button shirt: pointed collar + full placket with buttons; short sleeve.
// Promoted from the avatar-lab review harness (screenshot-reviewed 2026-07-04).
function Torso({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      <path d={TORSO_D} fill={color.base} />
      {/* pointed collar */}
      <path d="M200 298 L176 289 Q173 303 191 312 Z" fill={color.shade} />
      <path d="M200 298 L224 289 Q227 303 209 312 Z" fill={color.shade} />
      {/* full placket + buttons */}
      <path d="M200 302 V446" fill="none" />
      <circle cx={200} cy={330} r={2.5} fill={color.shade} strokeWidth={1.5} />
      <circle cx={200} cy={360} r={2.5} fill={color.shade} strokeWidth={1.5} />
      <circle cx={200} cy={390} r={2.5} fill={color.shade} strokeWidth={1.5} />
      <circle cx={200} cy={420} r={2.5} fill={color.shade} strokeWidth={1.5} />
    </g>
  )
}

function Sleeve({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      {/* body-colored short sleeve (Crew uses shade; deliberate contrast here) */}
      <path d="M151 297 Q128 301 126 324 Q127 338 143 339 L166 333 Q171 307 160 298 Z" fill={color.base} />
    </g>
  )
}

export const ButtonShirt: TopSet = { Torso, Sleeve }
