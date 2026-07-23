import React from 'react'
import { OUTLINE } from '../theme'
import { HEAD_GEOMETRY } from '../geometry'
import { PieceProps, ShoeSet } from '../types'

const SW = HEAD_GEOMETRY.STROKE

// Bunny slippers: white fluffy slipper, two upright ears y ~550-580, pink inner ear, face details.
function Shoe({ color }: PieceProps) {
  return (
    <g stroke={OUTLINE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round">
      <ellipse cx="138" cy="562" rx="9" ry="26" fill="#FFFFFF" />
      <ellipse cx="138" cy="564" rx="4.5" ry="18" fill="#F2A7C3" stroke="none" />
      <ellipse cx="164" cy="562" rx="9" ry="26" fill="#FFFFFF" />
      <ellipse cx="164" cy="564" rx="4.5" ry="18" fill="#F2A7C3" stroke="none" />
      <path d="M116 596 Q112 606 118 614 L186 614 Q192 606 189 596 Q150 586 116 596 Z" fill="#FFFFFF" />
      <path d="M112 610 Q105 624 122 626 L186 626 Q195 626 194 614 Q150 622 116 608 Q112 607 112 610 Z" fill="#FFFFFF" />
      {/* heel trim band picks up the shoe color so the swatch still recolors something */}
      <path d="M180 598 Q188 602 190 612 L195 612 Q194 599 187 594 Z" fill={color.base} />
      <circle cx="132" cy="604" r="2.6" fill="#000000" stroke="none" />
      <circle cx="146" cy="604" r="2.6" fill="#000000" stroke="none" />
      <ellipse cx="139" cy="611" rx="3.4" ry="2.6" fill="#F2A7C3" stroke="none" />
    </g>
  )
}

export const BunnySlippers: ShoeSet = { Shoe }
