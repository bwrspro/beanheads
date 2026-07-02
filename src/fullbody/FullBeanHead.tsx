import React from 'react'
import { AvatarProps } from '../components/Avatar'
import { Pose } from './anim/pose'
import { HEAD_GEOMETRY } from './geometry'
import { AvatarHead } from './AvatarHead'
import { GroundShadow } from './parts/GroundShadow'
import { Neck } from './parts/Neck'
import { SkinArm, SkinLeg } from './parts/limbs'
import { topMap } from './tops'
import { bottomsMap } from './bottoms'
import { shoeMap } from './shoes'
import { skinPair, clothingPair } from './theme'
import { bottomsHex, shoeHex } from './palette'

const MIRROR = 'translate(400 0) scale(-1 1)'

export interface FullBeanHeadProps extends Omit<AvatarProps, 'clothing'> {
  /** top variant — key into topMap ('shirt' | 'vneck' | 'tankTop' | 'jacket' | any registered key) */
  clothing?: string
  /** bottoms variant — key into bottomsMap ('jeans' | 'shorts' | registered) */
  bottoms?: string
  /** trouser color — key into BOTTOMS_COLORS (registered keys included) */
  bottomsColor?: string
  /** shoe variant — key into shoeMap ('sneakers' | registered) */
  shoes?: string
  /** shoe color — key into SHOE_COLORS (registered keys included) */
  shoeColor?: string
  /** show the BeanHead background circle (debug A/B) */
  showCircle?: boolean
  /** current animation-frame pose (rotations + bob); omit for a static figure */
  pose?: Pose
}

// The full-body SKELETON. It owns every slot's pivot <g> — arm pivots at the
// shoulders, leg pivots at the hips, an upper-body bob group — and mounts
// registry-selected garment components INSIDE those pivots. Any registered part,
// whatever its shape or color, inherits the motion automatically; parts never
// carry their own rig.
//
// SIGN CONVENTION: a Pose degree is the VISUAL clockwise rotation of that limb.
// Right-side limbs render inside a mirror transform, which flips rotation
// direction, so the skeleton NEGATES the pose value for mirrored pivots.
// (Never put a CSS transform-origin on the same <g> as the SVG mirror transform
// attribute — the browser would apply the mirror around that origin.)
export function FullBeanHead({
  clothing = 'shirt',
  bottoms = 'jeans',
  bottomsColor = 'denim',
  shoes = 'sneakers',
  shoeColor = 'purple',
  showCircle = false,
  pose,
  ...head
}: FullBeanHeadProps) {
  const { viewBox } = HEAD_GEOMETRY
  const sk = skinPair((head.skinTone as string) ?? 'light')
  const cl = clothingPair((head.clothingColor as string) ?? 'white')
  const bc = bottomsHex(bottomsColor)
  const sc = shoeHex(shoeColor)
  const Top = topMap[clothing] ?? topMap.shirt
  const Bottom = bottomsMap[bottoms] ?? bottomsMap.jeans
  const Shoe = shoeMap[shoes] ?? shoeMap.sneakers
  const bob = pose?.bob ?? 0

  // The head's own torso/clothing is clipped away by AvatarHead; force a known
  // clothing key so the inner Avatar never looks up a registered-only key
  // (clothingMap[unknown] would crash).
  const headProps = { ...head, clothing: 'shirt' } as AvatarProps

  const legChildren = (
    <>
      <SkinLeg skin={sk} />
      <Shoe.Shoe color={sc} />
      <Bottom.Leg color={bc} />
    </>
  )
  const armChildren = (
    <>
      <SkinArm skin={sk} />
      <Top.Sleeve color={cl} />
    </>
  )

  return (
    <svg viewBox={`0 0 ${viewBox.w} ${viewBox.h}`} width="100%" xmlns="http://www.w3.org/2000/svg">
      <GroundShadow />
      {/* left leg */}
      <g>
        <g className="leg-pivot" style={{ transformOrigin: '166px 432px', transform: `rotate(${pose?.leftLegDeg ?? 0}deg)` }}>
          {legChildren}
        </g>
      </g>
      {/* right leg (mirrored; pose value negated per the sign convention) */}
      <g transform={MIRROR}>
        <g className="leg-pivot" style={{ transformOrigin: '166px 432px', transform: `rotate(${-(pose?.rightLegDeg ?? 0)}deg)` }}>
          {legChildren}
        </g>
      </g>
      {/* upper body (neck + head + torso + arms) bobs together; legs stay planted */}
      <g transform={`translate(0 ${bob})`}>
        <Neck skin={sk} />
        <AvatarHead {...headProps} showCircle={showCircle} />
        <Top.Torso color={cl} />
        {/* left arm */}
        <g className="arm-pivot" style={{ transformOrigin: '140px 305px', transform: `rotate(${pose?.leftArmDeg ?? 0}deg)` }}>
          {armChildren}
        </g>
        {/* right arm (mirrored; negated) */}
        <g transform={MIRROR}>
          <g className="arm-pivot" style={{ transformOrigin: '140px 305px', transform: `rotate(${-(pose?.rightArmDeg ?? 0)}deg)` }}>
            {armChildren}
          </g>
        </g>
      </g>
    </svg>
  )
}
