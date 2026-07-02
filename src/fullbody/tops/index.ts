import { TopSet } from '../types'
import { Crew } from './Crew'
import { VNeck } from './VNeck'
import { TankTop } from './TankTop'
import { Jacket } from './Jacket'

// Registry of top variants — the same model as the library's face maps
// (eyesMap, hairMap, …): each variant is a drop-in component set keyed by
// string. The record is intentionally mutable: apps can register more variants
// at boot (including ones built from database rows) via registerTop.
export const topMap: Record<string, TopSet> = {
  shirt: Crew,
  vneck: VNeck,
  tankTop: TankTop,
  jacket: Jacket,
}

export function registerTop(key: string, set: TopSet): void {
  topMap[key] = set
}
