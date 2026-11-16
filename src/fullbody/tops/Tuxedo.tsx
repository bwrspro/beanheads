import React from 'react'
import { OUTLINE } from '../theme'
import { HEAD_GEOMETRY } from '../geometry'
import { PieceProps, TopSet } from '../types'
import { TORSO_D } from './torso'

const SW = HEAD_GEOMETRY.STROKE

// Formal tuxedo jacket with white shirt front and bowtie
function Torso({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      <path d={TORSO_D} fill="#1F2229" />
      {/* white shirt front triangle */}
      <path d="M200 298 L188 350 L212 350 Z" fill="#FFFFFF" />
      {/* bowtie in color.shade */}
      <path d="M188 292 L192 298 L200 295 L208 298 L212 292 L210 298 L200 301 L190 298 Z" fill={color.shade} />
      {/* shirt stud accent in color.base */}
      <circle cx="200" cy="335" r="3" fill={color.base} />
      {/* pocket square in color.base */}
      <path d="M225 385 L230 385 L230 390 L225 390 Z" fill={color.base} />
      {/* jacket lapels */}
      <path d="M198 310 L186 340 L196 320 Z" fill="none" strokeWidth={2} />
      <path d="M202 310 L214 340 L204 320 Z" fill="none" strokeWidth={2} />
    </g>
  )
}

function Sleeve({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      {/* long black sleeve */}
      <path d="M129 330 Q121 338 122 364 L125 452 Q124 466 142 466 Q158 466 157 452 L155 364 Q154 338 146 332 Z" fill="#1F2229" />
      {/* white cuff */}
      <path d="M126 452 Q126 448 131 448 H152 Q157 448 157 452 V462 Q157 468 151 468 H132 Q126 468 126 462 Z" fill="#FFFFFF" />
      {/* cufflink picks up the accent color */}
      <circle cx={141} cy={458} r={2.2} fill={color.base} stroke="none" />
    </g>
  )
}

export const Tuxedo: TopSet = { Torso, Sleeve }
