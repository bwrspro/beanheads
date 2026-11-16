import React from 'react'
import { OUTLINE } from '../theme'
import { HEAD_GEOMETRY } from '../geometry'
import { PieceProps, BottomsSet } from '../types'

const SW = HEAD_GEOMETRY.STROKE

// Camouflage pants: khaki base with irregular green blob pattern.
function Leg({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      <path d="M140 430 L145 556 Q146 570 160 571 L176 571 Q190 570 191 556 L194 430 Z" fill="#6B7A4F" />
      <path d="M148 450 Q152 448 156 452 Q154 458 150 456 Z" fill="#4A5638" />
      <path d="M170 475 Q175 472 179 478 Q176 485 171 482 Z" fill="#8A9A6A" />
      <path d="M145 510 Q150 507 154 513 Q150 520 145 517 Z" fill="#4A5638" />
      <path d="M178 530 Q183 528 187 534 Q184 541 179 538 Z" fill="#8A9A6A" />
      <path d="M158 555 Q162 552 166 558 Q163 564 159 561 Z" fill="#4A5638" />
      <path d="M142 552 Q142 548 147 548 H189 Q194 548 194 552 V576 Q194 584 186 584 H150 Q142 584 142 576 Z" fill={color.shade} />
    </g>
  )
}

export const Camo: BottomsSet = { Leg }
