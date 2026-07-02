import { ShoeSet } from '../types'
import { Sneakers } from './Sneakers'

// Registry of shoe variants — same drop-in model as topMap / the face maps.
export const shoeMap: Record<string, ShoeSet> = {
  sneakers: Sneakers,
}

export function registerShoe(key: string, set: ShoeSet): void {
  shoeMap[key] = set
}
