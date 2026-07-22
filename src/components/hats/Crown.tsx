import React from 'react'
import { useTheme } from '../../themeContext'
import { ClothingProps } from '../clothing/types'
import { HatProps } from './types'

// Gold crown: solid band + three points with jewels; hatColor = thin cushion ribbon under the band.
export const Front = ({ color, scale = 1 }: ClothingProps & HatProps) => {
  const { colors } = useTheme()

  const { base } = colors.clothing[color]
  const gold = '#FFD24A'
  const goldShade = '#C9A227'

  return (
    <g style={{ transformOrigin: 'center' }} transform={`scale(${scale})`}>
      <path
        d="M295 438 Q490 476 685 438 L688 452 Q490 492 292 452 Z"
        fill={base}
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="8px"
      />
      <path d="M300 330 L360 175 L420 330 Z" fill={gold} stroke={colors.outline} strokeMiterlimit={10} strokeWidth="10px" />
      <path d="M430 330 L490 148 L550 330 Z" fill={gold} stroke={colors.outline} strokeMiterlimit={10} strokeWidth="10px" />
      <path d="M560 330 L620 175 L680 330 Z" fill={gold} stroke={colors.outline} strokeMiterlimit={10} strokeWidth="10px" />
      <path
        d="M290 322 L690 322 Q698 322 697 334 L688 440 Q490 478 292 440 L283 334 Q282 322 290 322 Z"
        fill={gold}
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <path d="M292 415 Q490 452 688 415 L688 438 Q490 476 292 438 Z" fill={goldShade} />
      <circle cx="360" cy="185" r="22" fill="#E24A4A" stroke={colors.outline} strokeMiterlimit={10} strokeWidth="8px" />
      <circle cx="490" cy="158" r="22" fill="#4A6FE2" stroke={colors.outline} strokeMiterlimit={10} strokeWidth="8px" />
      <circle cx="620" cy="185" r="22" fill="#E24A4A" stroke={colors.outline} strokeMiterlimit={10} strokeWidth="8px" />
      <circle cx="490" cy="380" r="26" fill="#4A6FE2" stroke={colors.outline} strokeMiterlimit={10} strokeWidth="8px" />
    </g>
  )
}

export const Back = ({ scale = 1 }: HatProps) => {
  return <g style={{ transformOrigin: 'center' }} transform={`scale(${scale})`} />
}
