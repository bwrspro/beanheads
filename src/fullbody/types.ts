import { ComponentType } from 'react'

// One resolved color: flat base fill + a darker/lighter companion used for
// collars, cuffs, straps, shading.
export interface ColorPair {
  base: string
  shade: string
}

// Props for a registered garment piece — colors are resolved UPSTREAM
// (palette / theme / database) and passed in, so piece components stay dumb and
// database-driven colors flow through without the registry knowing about them.
export interface PieceProps {
  color: ColorPair
}

// Props for a skeleton limb (bare skin arm / leg / neck).
export interface LimbProps {
  skin: ColorPair
}

// A "top" occupies two skeleton slots: the torso, and (per arm) a sleeve overlay
// drawn on top of the skin arm INSIDE the arm pivot — so any top, of any sleeve
// length, moves with the arm automatically. Authored for the LEFT side; the
// skeleton mirrors it for the right.
export interface TopSet {
  Torso: ComponentType<PieceProps>
  Sleeve: ComponentType<PieceProps>
}

// A bottoms variant renders ONE trouser leg INSIDE the leg pivot
// (left-authored; the skeleton mirrors the right).
export interface BottomsSet {
  Leg: ComponentType<PieceProps>
}

// A shoe variant renders ONE shoe INSIDE the leg pivot.
export interface ShoeSet {
  Shoe: ComponentType<PieceProps>
}
