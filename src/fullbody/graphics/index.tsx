import React, { ComponentType } from 'react'
import { GraphicProps } from '../types'

// Registry of torso decals (prints / logos / patterns) — same mutable-record
// model as topMap/bottomsMap/shoeMap. A decal is a plain component authored in
// a 100x100 box; the skeleton scales it into the chest (DECAL_BOX) and clips it
// to the torso silhouette, so any registered decal fits any registered top.
// Apps register database-driven decals at boot: inline SVG via registerGraphic,
// hosted images (PNG/SVG url) via registerGraphic(key, imageGraphic(url)).

// Built-in sample decal — proves the slot end-to-end and gives the sandbox a swatch.
function Star({ color }: GraphicProps) {
  return (
    <path
      d="M50 6 L61 38 L95 38 L67 58 L78 92 L50 71 L22 92 L33 58 L5 38 L39 38 Z"
      fill={color.shade}
      data-decal="star"
    />
  )
}

export const graphicMap: Record<string, ComponentType<GraphicProps>> = {
  star: Star,
}

export function registerGraphic(key: string, graphic: ComponentType<GraphicProps>): void {
  graphicMap[key] = graphic
}

// Factory for asset-backed decals (the bulk/event pipeline): any hosted PNG/SVG
// becomes a registrable decal. Fitted with "meet" so non-square art letterboxes
// inside the 100x100 contract instead of stretching.
export function imageGraphic(href: string): ComponentType<GraphicProps> {
  return function ImageGraphic(_props: GraphicProps) {
    return <image href={href} x={0} y={0} width={100} height={100} preserveAspectRatio="xMidYMid meet" />
  }
}
