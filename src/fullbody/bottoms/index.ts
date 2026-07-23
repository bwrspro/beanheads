import { BottomsSet } from '../types'
import { Jeans } from './Jeans'
import { Shorts } from './Shorts'
import { Cargo } from './Cargo'
import { Track } from './Track'
import { Camo } from './Camo'
import { Ripped } from './Ripped'
import { Joggers } from './Joggers'
import { Armor } from './Armor'
import { Rainbow } from './Rainbow'
import { Mermaid } from './Mermaid'

// Registry of bottoms variants — same drop-in model as topMap / the face maps.
export const bottomsMap: Record<string, BottomsSet> = {
  jeans: Jeans,
  shorts: Shorts,
  // premium wave (v0.8.0)
  cargo: Cargo,
  track: Track,
  camo: Camo,
  ripped: Ripped,
  joggers: Joggers,
  armor: Armor,
  rainbow: Rainbow,
  // silhouette wave (v0.9.0)
  mermaid: Mermaid,
}

export function registerBottoms(key: string, set: BottomsSet): void {
  bottomsMap[key] = set
}
