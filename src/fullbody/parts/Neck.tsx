import React from 'react'
import { OUTLINE } from '../theme'
import { HEAD_GEOMETRY } from '../geometry'
import { LimbProps } from '../types'

const SW = HEAD_GEOMETRY.STROKE

// Short neck (skeleton default), drawn BEFORE the head so the jaw hides its top
// edge and the shirt collar hides its bottom.
export function Neck({ skin }: LimbProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      <path d="M181 250 L184 286 H216 L219 250 Z" fill={skin.base} />
      <path d="M184 286 L181 250 H196 L194 286 Z" fill={skin.shade} stroke="none" />
    </g>
  )
}
