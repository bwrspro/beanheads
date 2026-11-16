import React from 'react'
import { useTheme } from '../../themeContext'
import { ClothingProps } from '../clothing/types'
import { HatProps } from './types'

// Baseball cap: full crown hugging the head dome + fat curved visor across the brow.
export const Front = ({ color, scale = 1 }: ClothingProps & HatProps) => {
  const { colors } = useTheme()

  const { base, shadow } = colors.clothing[color]

  return (
    <g style={{ transformOrigin: 'center' }} transform={`scale(${scale})`}>
      <path
        d="M250 430 Q240 210 490 200 Q740 210 730 430 Q490 380 250 430 Z"
        fill={base}
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <path d="M262 415 Q270 300 370 245 Q300 310 296 408 Z" fill={shadow} />
      <path d="M490 200 L490 392" fill="none" stroke={colors.outline} strokeWidth="8px" />
      <path d="M365 222 Q352 320 344 410" fill="none" stroke={colors.outline} strokeWidth="6px" />
      <path d="M615 222 Q628 320 636 410" fill="none" stroke={colors.outline} strokeWidth="6px" />
      <path
        d="M220 458 Q225 412 310 405 Q490 388 670 405 Q755 412 760 458 Q490 498 220 458 Z"
        fill={base}
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <path d="M240 462 Q490 494 740 462 Q490 480 240 462 Z" fill={shadow} />
      <circle cx="490" cy="202" r="20" fill={shadow} stroke={colors.outline} strokeMiterlimit={10} strokeWidth="8px" />
    </g>
  )
}

export const Back = ({ scale = 1 }: HatProps) => {
  return <g style={{ transformOrigin: 'center' }} transform={`scale(${scale})`} />
}
