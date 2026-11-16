import React, { useState } from 'react'
import { Avatar, AvatarProps } from '../components/Avatar'
import { HEAD_GEOMETRY } from './geometry'

// Unique clip-path id per instance, without useId (keeps React >=16 support).
let clipCounter = 0
function useClipId() {
  const [id] = useState(() => `bh-fullclip-${(clipCounter += 1)}`)
  return id
}

// Renders the library's Avatar scaled + positioned, then CLIPS it to the head
// region so the Avatar's own torso/arms never render (otherwise they peek out
// behind our Body/Arms as a duplicate body). `showCircle` toggles the background
// circle (mask) for debug.
export function AvatarHead({ showCircle = false, ...props }: AvatarProps & { showCircle?: boolean }) {
  const { headSvg } = HEAD_GEOMETRY
  const clipId = useClipId()
  return (
    <>
      <clipPath id={clipId}>
        <rect x={-60} y={-90} width={520} height={352} />
      </clipPath>
      <g clipPath={`url(#${clipId})`}>
        <svg x={headSvg.x} y={headSvg.y} width={headSvg.w} height={headSvg.h} overflow="visible">
          <Avatar {...props} mask={showCircle} />
        </svg>
      </g>
    </>
  )
}
