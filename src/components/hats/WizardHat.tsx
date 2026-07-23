import React from 'react'
import { useTheme } from '../../themeContext'
import { ClothingProps } from '../clothing/types'
import { HatProps } from './types'

// Wizard hat, take 2: slimmer crooked cone with a ball tip, slim brim, buckle
// band. hatColor floods cone + brim; tip stays below the head-clip ceiling.
export const Front = ({ color, scale = 1 }: ClothingProps & HatProps) => {
  const { colors } = useTheme()

  const { base, shadow } = colors.clothing[color]

  return (
    <g style={{ transformOrigin: 'center' }} transform={`scale(${scale})`}>
      {/* cone: leans right, crooked tip flops left */}
      <path
        d="M370 450 Q430 340 470 200 Q478 160 452 138 Q436 122 412 128 Q446 128 452 160 Q452 180 512 178 Q560 320 622 450 Q490 415 370 450 Z"
        fill={base}
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <path d="M512 190 Q555 330 608 440 Q550 420 502 424 Q516 310 500 195 Z" fill={shadow} />
      {/* ball tip */}
      <circle cx={408} cy={130} r={17} fill={base} stroke={colors.outline} strokeMiterlimit={10} strokeWidth="10px" />
      {/* slim brim */}
      <ellipse cx="490" cy="458" rx="245" ry="38" fill={base} stroke={colors.outline} strokeMiterlimit={10} strokeWidth="12px" />
      <path d="M255 464 Q490 512 725 464 Q490 492 255 464 Z" fill={shadow} />
      {/* buckle band above the brim */}
      <path d="M395 442 Q490 420 600 442 L596 420 Q490 398 400 420 Z" fill={shadow} stroke={colors.outline} strokeMiterlimit={10} strokeWidth="8px" />
      <rect x={478} y={408} width={30} height={28} rx={4} fill="#FFD24A" stroke={colors.outline} strokeMiterlimit={10} strokeWidth="8px" />
      {/* stars */}
      <path d="M432 300 L446 272 L460 300 L446 328 Z" fill="white" stroke={colors.outline} strokeMiterlimit={10} strokeWidth="6px" />
      <path d="M540 358 L552 334 L564 358 L552 382 Z" fill="white" stroke={colors.outline} strokeMiterlimit={10} strokeWidth="6px" />
    </g>
  )
}

export const Back = ({ scale = 1 }: HatProps) => {
  return <g style={{ transformOrigin: 'center' }} transform={`scale(${scale})`} />
}
