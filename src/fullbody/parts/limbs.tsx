import React from 'react'
import { OUTLINE } from '../theme'
import { HEAD_GEOMETRY } from '../geometry'
import { LimbProps } from '../types'

const SW = HEAD_GEOMETRY.STROKE

// Bare skeleton limbs (the hardcoded default body). Authored for the LEFT side —
// the skeleton mirrors the whole pivot group for the right. Garments from the
// registries draw ON TOP of these inside the same pivot, so they inherit every
// rotation automatically.

export function SkinArm({ skin }: LimbProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      <path
        d="M131 332 Q123 340 124 364 L127 454 Q123 462 125 474 Q129 486 143 486 Q159 486 161 472 Q162 462 159 454 L161 364 Q160 340 152 334 Z"
        fill={skin.base}
      />
    </g>
  )
}

export function SkinLeg({ skin }: LimbProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      <path d="M144 432 H188 V572 Q188 584 174 584 L160 584 Q144 584 144 572 Z" fill={skin.base} />
    </g>
  )
}
