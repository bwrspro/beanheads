import React from 'react'
import { useTheme } from '../../themeContext'
import { ClothingProps } from '../clothing/types'
import { HatProps } from './types'

// Headphones: two-tone headband arcing over the dome into big ear cups at the head sides.
export const Front = ({ color, scale = 1 }: ClothingProps & HatProps) => {
  const { colors } = useTheme()

  const { base, shadow } = colors.clothing[color]

  return (
    <g style={{ transformOrigin: 'center' }} transform={`scale(${scale})`}>
      <path
        d="M245 470 Q250 145 490 138 Q730 145 735 470"
        fill="none"
        stroke={colors.outline}
        strokeWidth="30px"
        strokeLinecap="round"
      />
      <path
        d="M245 470 Q250 145 490 138 Q730 145 735 470"
        fill="none"
        stroke={base}
        strokeWidth="14px"
        strokeLinecap="round"
      />
      <ellipse cx="245" cy="505" rx="64" ry="80" fill={base} stroke={colors.outline} strokeMiterlimit={10} strokeWidth="12px" />
      <ellipse cx="252" cy="505" rx="38" ry="56" fill={shadow} />
      <ellipse cx="735" cy="505" rx="64" ry="80" fill={base} stroke={colors.outline} strokeMiterlimit={10} strokeWidth="12px" />
      <ellipse cx="728" cy="505" rx="38" ry="56" fill={shadow} />
    </g>
  )
}

export const Back = ({ scale = 1 }: HatProps) => {
  return <g style={{ transformOrigin: 'center' }} transform={`scale(${scale})`} />
}
