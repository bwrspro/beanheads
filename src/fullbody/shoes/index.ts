import { ShoeSet } from '../types'
import { Sneakers } from './Sneakers'
import { Boots } from './Boots'
import { HighTops } from './HighTops'
import { Sandals } from './Sandals'
import { Cleats } from './Cleats'
import { Skates } from './Skates'
import { RocketBoots } from './RocketBoots'
import { MoonBoots } from './MoonBoots'
import { BunnySlippers } from './BunnySlippers'
import { MonsterClaws } from './MonsterClaws'
import { DuckFeet } from './DuckFeet'

// Registry of shoe variants — same drop-in model as topMap / the face maps.
export const shoeMap: Record<string, ShoeSet> = {
  sneakers: Sneakers,
  boots: Boots,
  // premium wave (v0.8.0)
  highTops: HighTops,
  sandals: Sandals,
  cleats: Cleats,
  skates: Skates,
  rocketBoots: RocketBoots,
  moonBoots: MoonBoots,
  bunnySlippers: BunnySlippers,
  // silhouette wave (v0.9.0)
  monsterClaws: MonsterClaws,
  duckFeet: DuckFeet,
}

export function registerShoe(key: string, set: ShoeSet): void {
  shoeMap[key] = set
}
