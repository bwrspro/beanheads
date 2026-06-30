import { useEffect, useRef, useState } from 'react'

// Advances a frame index 0..frameCount-1 at `fps`, looping, while `playing`.
// Frame-based (no tweening): each tick switches to the next stored frame.
export function useFrameAnimation(frameCount: number, fps: number, playing: boolean): number {
  const [index, setIndex] = useState(0)
  const last = useRef(0)

  useEffect(() => {
    if (!playing || frameCount <= 0) return
    const interval = 1000 / fps
    let raf = 0
    const tick = (t: number) => {
      if (last.current === 0) last.current = t
      if (t - last.current >= interval) {
        last.current = t
        setIndex(i => (i + 1) % frameCount)
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      last.current = 0
    }
  }, [frameCount, fps, playing])

  return playing ? index : 0
}
