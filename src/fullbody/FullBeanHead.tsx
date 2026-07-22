import React, { useState } from 'react'
import { AvatarProps } from '../components/Avatar'
import { Pose } from './anim/pose'
import { HEAD_GEOMETRY, DECAL_BOX } from './geometry'
import { AvatarHead } from './AvatarHead'
import { GroundShadow } from './parts/GroundShadow'
import { Neck } from './parts/Neck'
import { SkinArm, SkinLeg } from './parts/limbs'
import { topMap } from './tops'
import { TORSO_D } from './tops/torso'
import { bottomsMap } from './bottoms'
import { shoeMap } from './shoes'
import { graphicMap } from './graphics'
import { patternMap, PatternDef } from './patterns'
import { skinPair, clothingPair } from './theme'
import { bottomsHex, shoeHex } from './palette'
import { ColorPair } from './types'

const MIRROR = 'translate(400 0) scale(-1 1)'

// Unique per-instance id suffix (same trick as AvatarHead's useClipId; React
// >=16, no useId). Ids MUST differ between instances: url(#) resolves to the
// document-first element with that id, and Chromium refuses to paint a
// <pattern>/<clipPath> referenced from inside a display:none subtree — so a
// hidden same-config twin (e.g. a responsive duplicate of an editor preview)
// silently kills the fabric fill of every visible avatar sharing its ids.
let instanceCounter = 0
function useInstanceId() {
  const [id] = useState(() => `i${(instanceCounter += 1)}`)
  return id
}

function patternFillId(key: string, color: ColorPair, uid: string): string {
  return `bh-pat-${key}-${color.base.replace(/[^0-9a-zA-Z]/g, '')}-${uid}`
}

// One repeating fabric tile: motif drawn in the pair's shade over a base-
// colored ground. userSpaceOnUse keeps the tile continuous across torso and
// sleeves, and lets the fill rotate with a posed limb like real fabric.
function PatternTile({ id, def, color }: { id: string; def: PatternDef; color: ColorPair }) {
  return (
    <pattern id={id} patternUnits="userSpaceOnUse" width={def.w} height={def.h}>
      <rect width={def.w} height={def.h} fill={color.base} />
      <path d={def.d} fill={color.shade} />
    </pattern>
  )
}

export interface FullBeanHeadProps extends Omit<AvatarProps, 'clothing'> {
  /** top variant — key into topMap ('shirt' | 'vneck' | 'tankTop' | 'jacket' | any registered key) */
  clothing?: string
  /** torso decal — key into graphicMap ('star' | any registered key); unknown/absent = no decal */
  topGraphic?: string
  /** fabric pattern for the top — key into patternMap ('stripes' | registered); unknown/absent = flat color */
  topPattern?: string
  /** fabric pattern for the bottoms — key into patternMap; unknown/absent = flat color */
  bottomsPattern?: string
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
  topGraphic,
  topPattern,
  bottomsPattern,
  bottoms = 'jeans',
  bottomsColor = 'denim',
  shoes = 'sneakers',
  shoeColor = 'purple',
  showCircle = false,
  pose,
  ...head
}: FullBeanHeadProps) {
  const { viewBox } = HEAD_GEOMETRY
  const uid = useInstanceId()
  const sk = skinPair((head.skinTone as string) ?? 'light')
  const cl = clothingPair((head.clothingColor as string) ?? 'white')
  const bc = bottomsHex(bottomsColor)
  const sc = shoeHex(shoeColor)
  const Top = topMap[clothing] ?? topMap.shirt
  const Bottom = bottomsMap[bottoms] ?? bottomsMap.jeans
  const Shoe = shoeMap[shoes] ?? shoeMap.sneakers
  // Unknown/unregistered decal keys safely render nothing (DB rows may outlive art)
  const Graphic = topGraphic ? graphicMap[topGraphic] : undefined
  // Fabric patterns swap the pair's flat base for a url(#tile) paint. Only the
  // base surface is patterned — shade stays flat so collars, cuffs and all-shade
  // sleeves read as solid trim. Unknown keys fall back to flat color (DB rows
  // may outlive art). The decal keeps the real hex pair: motif art tints from
  // hexes, not paint-server references.
  const topPat = topPattern ? patternMap[topPattern] : undefined
  const bottomsPat = bottomsPattern ? patternMap[bottomsPattern] : undefined
  const topPatId = topPat ? patternFillId(topPattern as string, cl, uid) : undefined
  const bottomsPatId = bottomsPat ? patternFillId(bottomsPattern as string, bc, uid) : undefined
  const decalClipId = `bh-torso-decal-clip-${uid}`
  const clFill: ColorPair = topPatId ? { base: `url(#${topPatId})`, shade: cl.shade } : cl
  const bcFill: ColorPair = bottomsPatId ? { base: `url(#${bottomsPatId})`, shade: bc.shade } : bc
  const bob = pose?.bob ?? 0

  // The head's own torso/clothing is clipped away by AvatarHead; force a known
  // clothing key so the inner Avatar never looks up a registered-only key
  // (clothingMap[unknown] would crash). Face-swap pose fields override the
  // static face props for this frame (blink / talk / expressions).
  const headProps = {
    ...head,
    clothing: 'shirt',
    ...(pose?.eyes ? { eyes: pose.eyes } : null),
    ...(pose?.eyebrows ? { eyebrows: pose.eyebrows } : null),
    ...(pose?.mouth ? { mouth: pose.mouth } : null),
  } as AvatarProps

  const legChildren = (
    <>
      <SkinLeg skin={sk} />
      <Shoe.Shoe color={sc} />
      <Bottom.Leg color={bcFill} />
    </>
  )
  const armChildren = (
    <>
      <SkinArm skin={sk} />
      <Top.Sleeve color={clFill} />
    </>
  )

  return (
    <svg viewBox={`0 0 ${viewBox.w} ${viewBox.h}`} width="100%" xmlns="http://www.w3.org/2000/svg">
      {(topPat || bottomsPat) && (
        <defs>
          {topPat && topPatId && <PatternTile id={topPatId} def={topPat} color={cl} />}
          {bottomsPat && bottomsPatId && <PatternTile id={bottomsPatId} def={bottomsPat} color={bc} />}
        </defs>
      )}
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
        {/* head tilt — pivot at the neck join; jaw stays over the neck at small angles */}
        <g className="head-pivot" style={{ transformOrigin: '200px 268px', transform: `rotate(${pose?.headDeg ?? 0}deg)` }}>
          <AvatarHead {...headProps} showCircle={showCircle} />
        </g>
        <Top.Torso color={clFill} />
        {/* torso decal — 100x100-authored art scaled into the chest box and
            clipped to the torso silhouette; renders under the arms, so edge
            overlap tucks behind them. */}
        {Graphic && (
          <>
            <clipPath id={decalClipId}>
              <path d={TORSO_D} />
            </clipPath>
            <g clipPath={`url(#${decalClipId})`}>
              <g transform={`translate(${DECAL_BOX.x} ${DECAL_BOX.y}) scale(${DECAL_BOX.w / 100} ${DECAL_BOX.h / 100})`}>
                <Graphic color={cl} />
              </g>
            </g>
          </>
        )}
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
