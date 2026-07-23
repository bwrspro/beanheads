import React from 'react'
import { OUTLINE } from '../theme'
import { HEAD_GEOMETRY } from '../geometry'
import { PieceProps, ShoeSet } from '../types'

const SW = HEAD_GEOMETRY.STROKE

// Mid-calf boot (left-authored): tall shaft, folded top cuff, heel block +
// white-free sole (unlike sneakers). Jeans cuffs paint over the shaft top.
function Shoe({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      {/* shaft */}
      <path d="M142 546 H192 L190 596 Q190 604 182 604 L150 604 Q142 604 142 596 Z" fill={color.base} />
      {/* folded top cuff */}
      <path d="M140 546 Q140 540 146 540 H188 Q194 540 194 546 V556 Q194 562 188 562 H146 Q140 562 140 556 Z" fill={color.shade} />
      {/* foot + toe */}
      <path d="M142 596 Q142 614 126 618 Q114 621 116 630 Q118 638 132 638 L186 638 Q194 638 194 628 V596 Z" fill={color.base} />
      {/* sole */}
      <path d="M114 632 Q112 644 128 645 L188 645 Q194 645 194 637 V630 Q150 640 118 626 Z" fill={color.shade} />
      {/* heel block */}
      <path d="M170 638 H194 V645 H172 Z" fill={color.shade} />
      {/* pull tab */}
      <path d="M186 540 Q191 532 194 540 L193 548 L187 548 Z" fill={color.shade} />
    </g>
  )
}

export const Boots: ShoeSet = { Shoe }
