import React from 'react'
import { useTheme } from '../../themeContext'
import { ClothingProps } from '../clothing/types'
import { HatProps } from './types'

// Wizard hat: wide brim + tall bent cone (tip stays below the head-clip ceiling ~y120).
export const Front = ({ color, scale = 1 }: ClothingProps & HatProps) => {
  const { colors } = useTheme()

  const { base, shadow } = colors.clothing[color]

  return (
    <g style={{ transformOrigin: 'center' }} transform={`scale(${scale})`}>
      <path
        d="M340 445 Q420 300 458 155 Q462 120 505 128 Q520 132 528 160 Q570 310 645 445 Q490 410 340 445 Z"
        fill={base}
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <path d="M528 175 Q565 320 630 435 Q560 415 505 418 Q525 300 508 180 Z" fill={shadow} />
      <path
        d="M460 150 Q430 118 392 130 Q420 138 442 165"
        fill={base}
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="10px"
      />
      <ellipse cx="490" cy="455" rx="305" ry="48" fill={base} stroke={colors.outline} strokeMiterlimit={10} strokeWidth="12px" />
      <path d="M200 462 Q490 520 780 462 Q490 495 200 462 Z" fill={shadow} />
      <path d="M420 300 L436 268 L452 300 L436 332 Z" fill="white" stroke={colors.outline} strokeMiterlimit={10} strokeWidth="6px" />
      <path d="M540 370 L554 342 L568 370 L554 398 Z" fill="white" stroke={colors.outline} strokeMiterlimit={10} strokeWidth="6px" />
    </g>
  )
}

export const Back = ({ scale = 1 }: HatProps) => {
  return <g style={{ transformOrigin: 'center' }} transform={`scale(${scale})`} />
}
