import React from 'react'
import { OUTLINE } from '../theme'
import { HEAD_GEOMETRY } from '../geometry'
import { PieceProps, BottomsSet } from '../types'

const SW = HEAD_GEOMETRY.STROKE

// Mermaid-scale leggings: overlapping scale arcs down the leg + fin flares
// breaking the ankle silhouette.
function Leg({ color }: PieceProps) {
  const scaleRows = [446, 470, 494, 518, 542]
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      {/* ankle fins flare outward */}
      <path d="M148 556 L128 584 L154 572 Z" fill={color.shade} />
      <path d="M186 556 L206 584 L180 572 Z" fill={color.shade} />
      <path d="M140 430 L145 556 Q146 570 160 571 L176 571 Q190 570 191 556 L194 430 Z" fill={color.base} />
      {/* scales: staggered semicircle rows */}
      {scaleRows.map((y, row) => (
        <g key={y} stroke={color.shade} strokeWidth={2.6} fill="none">
          {(row % 2 === 0 ? [152, 168, 184] : [160, 176]).map((x) => (
            <path key={x} d={`M${x - 8} ${y} A8 8 0 0 0 ${x + 8} ${y}`} />
          ))}
        </g>
      ))}
      {/* waistband */}
      <path d="M141 430 L194 430 L193 442 L141 442 Z" fill={color.shade} stroke="none" />
    </g>
  )
}

export const Mermaid: BottomsSet = { Leg }
