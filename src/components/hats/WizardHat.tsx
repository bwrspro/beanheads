import React from 'react'
import { useTheme } from '../../themeContext'
import { ClothingProps } from '../clothing/types'
import { HatProps } from './types'

// Wizard hat, take 5: brim lifted onto the crown (cy 414) with hair showing
// underneath; cone shortened so the tip stays inside the real ceiling — the
// ROOT fullbody viewBox top maps to inner y≈104 (the AvatarHead clip rect is
// looser, y≈-119, and is NOT the binding constraint).
export const Front = ({ color, scale = 1 }: ClothingProps & HatProps) => {
  const { colors } = useTheme()

  const { base, shadow } = colors.clothing[color]

  return (
    <g style={{ transformOrigin: 'center' }} transform={`scale(${scale})`}>
      {/* cone: wide base on the crown, leans right, crooked tip flops left */}
      <path
        d="M340 402 Q420 290 462 175 Q472 132 448 118 Q430 106 404 112 Q440 118 446 148 Q448 172 506 170 Q548 290 660 402 Q490 360 340 402 Z"
        fill={base}
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <path d="M506 182 Q545 292 645 394 Q574 372 514 376 Q528 275 500 187 Z" fill={shadow} />
      {/* ball tip */}
      <circle cx={393} cy={120} r={15} fill={base} stroke={colors.outline} strokeMiterlimit={10} strokeWidth="10px" />
      {/* wide brim high on the head — hair peeks below */}
      <ellipse cx="490" cy="414" rx="315" ry="48" fill={base} stroke={colors.outline} strokeMiterlimit={10} strokeWidth="12px" />
      <path d="M180 420 Q490 484 800 420 Q490 456 180 420 Z" fill={shadow} />
      {/* buckle band above the brim */}
      <path d="M378 392 Q490 364 615 392 L610 364 Q490 338 384 364 Z" fill={shadow} stroke={colors.outline} strokeMiterlimit={10} strokeWidth="8px" />
      <rect x={474} y={348} width={34} height={32} rx={5} fill="#FFD24A" stroke={colors.outline} strokeMiterlimit={10} strokeWidth="8px" />
      {/* stars */}
      <path d="M428 250 L444 220 L460 250 L444 280 Z" fill="white" stroke={colors.outline} strokeMiterlimit={10} strokeWidth="6px" />
      <path d="M548 318 L562 292 L576 318 L562 344 Z" fill="white" stroke={colors.outline} strokeMiterlimit={10} strokeWidth="6px" />
    </g>
  )
}

export const Back = ({ scale = 1 }: HatProps) => {
  return <g style={{ transformOrigin: 'center' }} transform={`scale(${scale})`} />
}
