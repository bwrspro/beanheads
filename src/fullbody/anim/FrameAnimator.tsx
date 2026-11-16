import React from 'react'
import { Pose } from './pose'
import { FullBeanHead, FullBeanHeadProps } from '../FullBeanHead'
import { useFrameAnimation } from './useFrameAnimation'

// Plays a frame animation: cycles the frame index and renders FullBeanHead in the
// current frame's Pose. Each frame IS the avatar SVG in that state (no tweening).
export function FrameAnimator({
  frames,
  fps = 6,
  playing = true,
  ...props
}: { frames: Pose[]; fps?: number; playing?: boolean } & Omit<FullBeanHeadProps, 'pose'>) {
  const index = useFrameAnimation(frames.length, fps, playing)
  return <FullBeanHead {...props} pose={frames[index] ?? {}} />
}
