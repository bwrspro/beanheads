import { TopSet } from '../types'
import { Crew } from './Crew'
import { VNeck } from './VNeck'
import { TankTop } from './TankTop'
import { Jacket } from './Jacket'
import { Polo } from './Polo'
import { Hoodie } from './Hoodie'
import { Sweater } from './Sweater'
import { ButtonShirt } from './ButtonShirt'
import { Hawaiian } from './Hawaiian'
import { Jersey } from './Jersey'
import { Tuxedo } from './Tuxedo'
import { Astronaut } from './Astronaut'
import { Dino } from './Dino'
import { Wizard } from './Wizard'
import { Hero } from './Hero'

// Registry of top variants — the same model as the library's face maps
// (eyesMap, hairMap, …): each variant is a drop-in component set keyed by
// string. The record is intentionally mutable: apps can register more variants
// at boot (including ones built from database rows) via registerTop.
export const topMap: Record<string, TopSet> = {
  shirt: Crew,
  vneck: VNeck,
  tankTop: TankTop,
  jacket: Jacket,
  polo: Polo,
  hoodie: Hoodie,
  sweater: Sweater,
  buttonShirt: ButtonShirt,
  // premium wave (v0.8.0): sold as catalog rows, components ship here
  hawaiian: Hawaiian,
  jersey: Jersey,
  tuxedo: Tuxedo,
  astronaut: Astronaut,
  dino: Dino,
  wizard: Wizard,
  hero: Hero,
}

export function registerTop(key: string, set: TopSet): void {
  topMap[key] = set
}
