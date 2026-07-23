import React from 'react'
import { useTheme } from '../../themeContext'
import { ClothingProps } from '../clothing/types'
import { HatProps } from './types'

// Pirate tricorn: black crown + swooping wide brim with raised wings, skull & crossbones,
// hatColor = brim trim line.
export const Front = ({ color, scale = 1 }: ClothingProps & HatProps) => {
  const { colors } = useTheme()

  const { base, shadow } = colors.clothing[color]
  const black = '#26282E'

  return (
    <g style={{ transformOrigin: 'center' }} transform={`scale(${scale})`}>
      {/* plume feather in hatColor */}
      <path
        d="M238 312 Q192 245 220 168 Q244 158 262 182 Q278 250 266 308 Q250 322 238 312 Z"
        fill={base}
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="10px"
      />
      <path d="M247 300 Q235 240 240 186" fill="none" stroke={shadow} strokeWidth="8px" strokeLinecap="round" />
      <path d="M320 340 Q330 215 490 205 Q650 215 660 340 Z" fill={black} stroke={colors.outline} strokeMiterlimit={10} strokeWidth="12px" />
      <path
        d="M165 405 Q195 245 355 268 Q490 232 625 268 Q785 245 815 405 Q700 330 490 342 Q280 330 165 405 Z"
        fill={black}
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <path d="M175 398 Q285 326 490 338 Q695 326 805 398" fill="none" stroke={base} strokeWidth="18px" strokeLinecap="round" />
      <line x1="432" y1="258" x2="548" y2="330" stroke="white" strokeWidth="16px" strokeLinecap="round" />
      <line x1="432" y1="330" x2="548" y2="258" stroke="white" strokeWidth="16px" strokeLinecap="round" />
      <circle cx="490" cy="292" r="32" fill="white" stroke={colors.outline} strokeMiterlimit={10} strokeWidth="8px" />
      <circle cx="479" cy="288" r="6.5" fill={colors.outline} stroke="none" />
      <circle cx="501" cy="288" r="6.5" fill={colors.outline} stroke="none" />
      <path d="M484 306 L496 306" stroke={colors.outline} strokeWidth="5px" strokeLinecap="round" />
    </g>
  )
}

export const Back = ({ scale = 1 }: HatProps) => {
  const { colors } = useTheme()
  const black = '#26282E'

  return (
    <g style={{ transformOrigin: 'center' }} transform={`scale(${scale})`}>
      <path d="M280 440 Q490 460 700 440 L690 460 Q490 470 290 460 Z" fill={black} stroke={colors.outline} strokeMiterlimit={10} strokeWidth="8px" />
    </g>
  )
}
