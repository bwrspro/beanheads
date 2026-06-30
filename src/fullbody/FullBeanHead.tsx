import React from 'react'
import { AvatarProps } from '../components/Avatar'
import { Pose } from './anim/pose'
import { HEAD_GEOMETRY } from './geometry'
import { AvatarHead } from './AvatarHead'
import { GroundShadow } from './parts/GroundShadow'
import { Neck } from './parts/Neck'
import { Body } from './parts/Body'
import { Arms } from './parts/Arms'
import { Leg } from './parts/Leg'

export interface FullBeanHeadProps extends AvatarProps {
  /** trouser style */
  bottoms?: 'jeans' | 'shorts'
  /** trouser color key: denim | black | khaki | red */
  bottomsColor?: string
  /** sneaker color key: purple | white | black | red */
  shoeColor?: string
  /** show the BeanHead background circle (debug A/B) */
  showCircle?: boolean
  /** current animation-frame pose (rotations + bob); omit for a static figure */
  pose?: Pose
}

// A full-body BeanHead: the library's <Avatar> head (clipped to head-only,
// background circle removed) merged with hand-authored, individually-animatable
// body parts (neck, torso, arms+hands, two legs with jeans/shorts + sneakers).
// Renders a self-contained 400x690 SVG; head + body share the library palette.
export function FullBeanHead({
  bottoms = 'jeans',
  bottomsColor = 'denim',
  shoeColor = 'purple',
  showCircle = false,
  pose,
  ...head
}: FullBeanHeadProps) {
  const { viewBox } = HEAD_GEOMETRY
  const skinTone = (head.skinTone as string) ?? 'light'
  const clothing = (head.clothing as string) ?? 'shirt'
  const clothingColor = (head.clothingColor as string) ?? 'white'
  const bob = pose?.bob ?? 0

  return (
    <svg viewBox={`0 0 ${viewBox.w} ${viewBox.h}`} width="100%" xmlns="http://www.w3.org/2000/svg">
      <GroundShadow />
      <Leg side="left" skinTone={skinTone} bottoms={bottoms} bottomsColor={bottomsColor} shoeColor={shoeColor} deg={pose?.leftLegDeg} />
      <Leg side="right" skinTone={skinTone} bottoms={bottoms} bottomsColor={bottomsColor} shoeColor={shoeColor} deg={pose?.rightLegDeg} />
      {/* upper body (head + torso + arms) bobs together; legs stay planted */}
      <g transform={`translate(0 ${bob})`}>
        <Neck skinTone={skinTone} />
        <AvatarHead {...(head as AvatarProps)} showCircle={showCircle} />
        <Body clothing={clothing} clothingColor={clothingColor} />
        <Arms
          skinTone={skinTone}
          clothing={clothing}
          clothingColor={clothingColor}
          leftArmDeg={pose?.leftArmDeg}
          rightArmDeg={pose?.rightArmDeg}
        />
      </g>
    </svg>
  )
}
