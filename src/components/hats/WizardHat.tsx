import React from 'react'
import { useTheme } from '../../themeContext'
import { ClothingProps } from '../clothing/types'
import { HatProps } from './types'

// Wizard hat, take 3: brim WIDER than the head (x ~175-805 vs head 225-780) so
// the hat reads as worn, not perched; big crooked cone with ball tip; buckle
// band. Tip stays below the head-clip ceiling (~y120).
export const Front = ({ color, scale = 1 }: ClothingProps & HatProps) => {
  const { colors } = useTheme()

  const { base, shadow } = colors.clothing[color]

  return (
    <g style={{ transformOrigin: 'center' }} transform={`scale(${scale})`}>
      {/* cone: wide base hugging the dome, leans right, crooked tip flops left */}
      <path
        d="M340 462 Q425 330 468 200 Q478 152 446 134 Q424 120 398 128 Q438 132 446 164 Q448 190 508 188 Q552 330 665 462 Q490 418 340 462 Z"
        fill={base}
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <path d="M508 200 Q548 335 648 452 Q575 430 515 434 Q530 320 502 205 Z" fill={shadow} />
      {/* ball tip */}
      <circle cx={393} cy={131} r={20} fill={base} stroke={colors.outline} strokeMiterlimit={10} strokeWidth="10px" />
      {/* wide brim — overhangs the head on both sides */}
      <ellipse cx="490" cy="474" rx="315" ry="50" fill={base} stroke={colors.outline} strokeMiterlimit={10} strokeWidth="12px" />
      <path d="M180 482 Q490 546 800 482 Q490 518 180 482 Z" fill={shadow} />
      {/* buckle band above the brim */}
      <path d="M378 452 Q490 424 615 452 L610 424 Q490 398 384 424 Z" fill={shadow} stroke={colors.outline} strokeMiterlimit={10} strokeWidth="8px" />
      <rect x={474} y={408} width={34} height={32} rx={5} fill="#FFD24A" stroke={colors.outline} strokeMiterlimit={10} strokeWidth="8px" />
      {/* stars */}
      <path d="M428 305 L444 273 L460 305 L444 337 Z" fill="white" stroke={colors.outline} strokeMiterlimit={10} strokeWidth="6px" />
      <path d="M548 368 L562 340 L576 368 L562 396 Z" fill="white" stroke={colors.outline} strokeMiterlimit={10} strokeWidth="6px" />
    </g>
  )
}

export const Back = ({ scale = 1 }: HatProps) => {
  return <g style={{ transformOrigin: 'center' }} transform={`scale(${scale})`} />
}
