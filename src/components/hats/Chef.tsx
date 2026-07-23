import React from 'react'
import { useTheme } from '../../themeContext'
import { ClothingProps } from '../clothing/types'
import { HatProps } from './types'

// Chef toque: white puffs over a hatColor cylinder band — color choice floods
// the band so it responds clearly; puffs stay chef-white.
export const Front = ({ color, scale = 1 }: ClothingProps & HatProps) => {
  const { colors } = useTheme()

  const { base, shadow } = colors.clothing[color]
  const white = '#F7F7F7'

  return (
    <g style={{ transformOrigin: 'center' }} transform={`scale(${scale})`}>
      <circle cx="360" cy="235" r="78" fill={white} stroke={colors.outline} strokeMiterlimit={10} strokeWidth="10px" />
      <circle cx="620" cy="235" r="78" fill={white} stroke={colors.outline} strokeMiterlimit={10} strokeWidth="10px" />
      <circle cx="490" cy="195" r="85" fill={white} stroke={colors.outline} strokeMiterlimit={10} strokeWidth="10px" />
      <path
        d="M290 262 Q282 258 300 254 L680 254 Q698 258 690 262 L688 400 Q490 442 292 400 Z"
        fill={base}
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <path d="M640 268 Q652 330 648 396 Q600 412 560 414 Q590 340 588 270 Z" fill={shadow} />
      <path
        d="M292 400 Q490 442 688 400 L687 418 Q490 458 293 418 Z"
        fill={white}
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="8px"
      />
    </g>
  )
}

export const Back = ({ scale = 1 }: HatProps) => {
  return <g style={{ transformOrigin: 'center' }} transform={`scale(${scale})`} />
}
