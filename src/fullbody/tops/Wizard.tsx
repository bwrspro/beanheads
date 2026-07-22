import React from 'react'
import { OUTLINE } from '../theme'
import { HEAD_GEOMETRY } from '../geometry'
import { PieceProps, TopSet } from '../types'
import { TORSO_D } from './torso'

const SW = HEAD_GEOMETRY.STROKE

// Wizard robe: starry robe with crescent moon, trim hem, wide bell sleeves.
function Star({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  return (
    <path
      d={`M${cx} ${cy - r} L${cx + r * 0.55} ${cy} L${cx} ${cy + r} L${cx - r * 0.55} ${cy} Z`}
      fill="#FFFFFF"
      stroke="none"
    />
  )
}

function Torso({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      <path d={TORSO_D} fill={color.base} />
      <Star cx={170} cy={332} r={11} />
      <Star cx={232} cy={372} r={12} />
      <Star cx={182} cy={392} r={9} />
      <Star cx={214} cy={412} r={8} />
      {/* crescent moon */}
      <path d="M222 316 A15 15 0 1 0 238 340 A11.5 11.5 0 1 1 222 316 Z" fill="#FFFFFF" stroke="none" />
      {/* hem trim */}
      <path d="M138 416 L262 416 L260 430 Q261 446 242 446 L158 446 Q139 446 140 430 Z" fill={color.shade} />
      <Star cx={200} cy={431} r={7} />
    </g>
  )
}

function Sleeve({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      {/* wide bell sleeve */}
      <path d="M129 330 Q119 340 117 372 L112 450 Q110 468 138 468 Q161 468 158 448 L153 372 Q152 340 146 332 Z" fill={color.base} />
      <path d="M113 444 L157 444 L158 452 Q160 468 138 468 Q111 468 112 452 Z" fill={color.shade} />
      <Star cx={136} cy={396} r={8} />
    </g>
  )
}

export const Wizard: TopSet = { Torso, Sleeve }
