import { ShoeSet } from '../types'
import { Sneakers } from './Sneakers'
import { Boots } from './Boots'

// Registry of shoe variants — same drop-in model as topMap / the face maps.
export const shoeMap: Record<string, ShoeSet> = {
  sneakers: Sneakers,
  boots: Boots,
}

export function registerShoe(key: string, set: ShoeSet): void {
  shoeMap[key] = set
}
