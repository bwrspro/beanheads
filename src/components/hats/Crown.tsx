import React from 'react'
import { useTheme } from '../../themeContext'
import { ClothingProps } from '../clothing/types'
import { HatProps } from './types'

// Gold crown over a velvet cushion band — hatColor floods the big velvet panel
// so color choices read instantly; gold frame/points/jewels stay royal.
export const Front = ({ color, scale = 1 }: ClothingProps & HatProps) => {
  const { colors } = useTheme()

  const { base, shadow } = colors.clothing[color]
  const gold = '#FFD24A'
  const goldShade = '#C9A227'

  return (
    <g style={{ transformOrigin: 'center' }} transform={`scale(${scale})`}>
      <path d="M300 330 L360 175 L420 330 Z" fill={gold} stroke={colors.outline} strokeMiterlimit={10} strokeWidth="10px" />
      <path d="M430 330 L490 148 L550 330 Z" fill={gold} stroke={colors.outline} strokeMiterlimit={10} strokeWidth="10px" />
      <path d="M560 330 L620 175 L680 330 Z" fill={gold} stroke={colors.outline} strokeMiterlimit={10} strokeWidth="10px" />
      {/* velvet cushion band (hatColor) framed in gold */}
      <path
        d="M290 322 L690 322 Q698 322 697 334 L688 440 Q490 478 292 440 L283 334 Q282 322 290 322 Z"
        fill={base}
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <path d="M292 420 Q490 456 688 420 L688 438 Q490 476 292 438 Z" fill={shadow} />
      {/* gold frame rims */}
      <path d="M286 322 L694 322 L694 344 L287 344 Z" fill={gold} stroke={colors.outline} strokeMiterlimit={10} strokeWidth="8px" />
      <path d="M292 432 Q490 470 688 432 L687 446 Q490 484 293 446 Z" fill={goldShade} stroke={colors.outline} strokeMiterlimit={10} strokeWidth="8px" />
      <circle cx={360} cy={185} r={22} fill="#E24A4A" stroke={colors.outline} strokeMiterlimit={10} strokeWidth="8px" />
      <circle cx={490} cy={158} r={22} fill="#4A6FE2" stroke={colors.outline} strokeMiterlimit={10} strokeWidth="8px" />
      <circle cx={620} cy={185} r={22} fill="#E24A4A" stroke={colors.outline} strokeMiterlimit={10} strokeWidth="8px" />
      <circle cx={490} cy={388} r={24} fill={gold} stroke={colors.outline} strokeMiterlimit={10} strokeWidth="8px" />
    </g>
  )
}

export const Back = ({ scale = 1 }: HatProps) => {
  return <g style={{ transformOrigin: 'center' }} transform={`scale(${scale})`} />
}
