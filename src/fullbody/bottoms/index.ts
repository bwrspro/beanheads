import { BottomsSet } from '../types'
import { Jeans } from './Jeans'
import { Shorts } from './Shorts'

// Registry of bottoms variants — same drop-in model as topMap / the face maps.
export const bottomsMap: Record<string, BottomsSet> = {
  jeans: Jeans,
  shorts: Shorts,
}

export function registerBottoms(key: string, set: BottomsSet): void {
  bottomsMap[key] = set
}
