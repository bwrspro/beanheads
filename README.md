# beanheads (bwrspro fork)

Consistent, characterful SVG avatars — a fork of
[beanheads](https://github.com/RobertBroersma/beanheads) that adds a full-body
**`<FullBeanHead>`** component and a lightweight, frame-based animation system.

```bash
npm i github:bwrspro/beanheads#bwrs-main
```

Peer dependency: React `>=16`.

---

## `<BeanHead>` — head + shoulders (original)

```tsx
import { BeanHead } from 'beanheads'

<BeanHead
  skinTone="brown"
  eyes="normal"
  eyebrows="raised"
  mouth="grin"
  hair="short"
  hairColor="brown"
  clothing="shirt"
  clothingColor="red"
/>
```

---

## `<FullBeanHead>` — full-body avatar (new)

Composes the `<BeanHead>` head (clipped to head-only, background circle removed)
with hand-authored, individually-animatable body parts: **neck, torso**
(crew / v-neck / tank), **arms + hands**, and **two legs** with jeans/shorts +
Converse-style sneakers. It renders a self-contained `400 × 690` SVG, and the body
reuses the library palette (outline `#592d3d`, skin, clothing) so head and body read
as one merged figure.

```tsx
import { FullBeanHead } from 'beanheads'

<FullBeanHead
  skinTone="dark"
  eyes="normal"
  hair="short"
  clothing="shirt"        // 'shirt' (crew) | 'vneck' | 'tankTop' (scoop, bare shoulders)
  clothingColor="red"
  bottoms="jeans"         // 'jeans' | 'shorts'
  bottomsColor="denim"    // 'denim' | 'black' | 'khaki' | 'red'
  shoeColor="purple"      // 'purple' | 'white' | 'black' | 'red'
/>
```

### Props

Accepts **all `<BeanHead>` / `AvatarProps`** (`skinTone`, `eyes`, `eyebrows`,
`mouth`, `hair`, `hairColor`, `facialHair`, `clothing`, `clothingColor`, `lashes`,
`hat`, `accessory`, …) **plus**:

| prop           | type                   | default    | notes                                            |
| -------------- | ---------------------- | ---------- | ------------------------------------------------ |
| `bottoms`      | `'jeans' \| 'shorts'`  | `'jeans'`  | trouser style                                    |
| `bottomsColor` | `string`               | `'denim'`  | `denim` · `black` · `khaki` · `red`              |
| `shoes`        | `string`               | `'sneakers'` | shoe variant — key into `shoeMap` (registered keys included) |
| `shoeColor`    | `string`               | `'purple'` | `purple` · `white` · `black` · `red`             |
| `showCircle`   | `boolean`              | `false`    | debug: render the head background circle (A/B)   |
| `pose`         | `Pose`                 | —          | current animation-frame pose (see below)         |

`clothing` drives the neckline: `shirt` → crew collar, `vneck` → V-neck trim,
`tankTop` → scoop neck + thin straps.

---

## Animation (frame-based — no Lottie)

Each animation is an array of `Pose` **frames**; a frame is a stored state (limb
rotations + an upper-body bob) rendered as the avatar SVG. There is no tweening —
the player simply switches to the next stored frame.

```tsx
import { FrameAnimator, ANIMATIONS } from 'beanheads'

<FrameAnimator
  frames={ANIMATIONS.wave}   // idle | wave | walk (see ANIMATION_NAMES)
  fps={6}
  playing
  skinTone="dark"
  clothingColor="red"
/>
```

- Built-in animations: **`idle`**, **`wave`**, **`walk`** (`ANIMATION_NAMES`).
- **Author your own**: extend the `Pose[]` arrays — each limb is its own `<g>` with a
  pivot (arms at the shoulder, legs at the hip), so a pose is just a set of angles.
- `useFrameAnimation(frameCount, fps, playing)` — the cycling hook, if you want to
  drive rendering yourself instead of using `<FrameAnimator>`.

### `Pose`

```ts
interface Pose {
  bob?: number         // upper-body vertical offset (px), e.g. breathing
  leftArmDeg?: number  // rotation (deg) around the left shoulder pivot
  rightArmDeg?: number
  leftLegDeg?: number  // rotation (deg) around the left hip pivot
  rightLegDeg?: number
}
```

---

## Exports

`BeanHead`, `Avatar`, `FullBeanHead`, `FullBeanHeadProps`, `Pose`, `ANIMATIONS`,
`ANIMATION_NAMES`, `FrameAnimator`, `useFrameAnimation`, `theme`, `ThemeContext`,
`Noop`.

## Develop

```bash
npm install
npm run build   # tsdx build → dist/ (committed; the github dependency serves the prebuilt dist)
npm test        # tsdx test
```

The full-body sources live in [`src/fullbody/`](src/fullbody): `FullBeanHead.tsx`,
`parts/*`, `anim/*`, plus a `theme`/`palette`/`geometry` layer that reuses the
library's colors.

---

## FAQ & design notes

### Are the body parts built the same way the library builds the face?

**Yes — registry-per-slot, exactly like the face.** The library's face model is a
map of drop-in variant components per feature (`eyesMap`, `hairMap`, `mouthsMap`, …
— `Avatar` does `const Eyes = eyesMap[eyes]`). The body now uses the identical
model:

| slot    | registry     | built-in keys                              | register at runtime |
| ------- | ------------ | ------------------------------------------ | ------------------- |
| top     | `topMap`     | `shirt` · `vneck` · `tankTop` · `jacket`   | `registerTop(key, { Torso, Sleeve })` |
| bottoms | `bottomsMap` | `jeans` · `shorts`                         | `registerBottoms(key, { Leg })` |
| shoes   | `shoeMap`    | `sneakers`                                 | `registerShoe(key, { Shoe })` |

Adding a variant = **one file + one map line** (see `src/fullbody/tops/Jacket.tsx`
— the whole "jacket" variant). Shipping 20–50 seasonal jackets is 20–50 small
files (or `registerTop` calls at app boot). A piece receives a resolved
`ColorPair` and draws inside the skeleton's pivot — it never touches the rig.

Pieces are authored for the LEFT side only; the skeleton mirrors the right side
automatically.

### How is the animation rendered / handled?

Frame-based, on a **skeleton** — no tweening, no Lottie:

1. An animation is an array of `Pose` frames (`ANIMATIONS.walk`, …) —
   **hardcoded in code**, by design.
2. `useFrameAnimation(frameCount, fps, playing)` advances a frame index on a
   `requestAnimationFrame` loop (`(i + 1) % frameCount` every `1000/fps` ms).
3. `FrameAnimator` renders `<FullBeanHead pose={frames[index]} />`.
4. `FullBeanHead` — the skeleton — applies the pose to its OWN pivot groups:
   arm pivots at the shoulders, leg pivots at the hips, and an upper-body bob
   (`translate`). Garments render INSIDE those pivots, so **anything the
   character wears — any shape, any color, any registered variant — moves
   identically**. Parts never carry their own rig.

Sign convention: a `Pose` degree is the **visual clockwise rotation** of that
limb. Right-side limbs render inside a mirror transform (which flips rotation
direction), so the skeleton negates the value for mirrored pivots — pose data
means what it says on both sides.

### What is hardcoded vs database-driven?

| thing                                        | where it lives |
| -------------------------------------------- | -------------- |
| animations (`ANIMATIONS`)                    | **hardcoded** (code) |
| skeleton: pivots, default positions, geometry | **hardcoded** (`geometry.ts`, `FullBeanHead`) |
| default parts (skin limbs, neck, built-in variants) | **hardcoded** (components) |
| colors (skin / clothing / bottoms / shoes)   | **database-ready**: app loads rows at boot → `registerSkinTone` / `registerClothingColor` / `registerBottomsColor` / `registerShoeColor`; props then reference the stored key |
| part catalog (which variants exist / are owned) | **database-ready**: store registry keys (and optionally SVG path data) → `registerTop` / `registerBottoms` / `registerShoe` at boot; `<FullBeanHead clothing={dbKey}>` |
| whole new slots (backpack, pets, held items) | **deferred** — intentionally not implemented yet |

Unknown keys never crash: every lookup falls back to the default variant/color.

### Extending — cheat sheet

- **Face part** (eyes / hair / mouth / …): add the SVG component under
  `src/components/<slot>/`, register it in that slot's map in `Avatar.tsx`
  (`eyesMap.sleepy = Sleepy`) — `FullBeanHead` forwards all head props.
- **Body part variant**: add a component set file, register it
  (`topMap` / `bottomsMap` / `shoeMap` or the `register*` helpers).
- **Color**: one palette key (`theme.ts` colors or `BOTTOMS_COLORS`/`SHOE_COLORS`),
  or `register*Color` at runtime from the database.
- **Animation**: add a `Pose[]` to `ANIMATIONS` — it appears in
  `ANIMATION_NAMES` automatically. Any frame count.
- **New motion axis** (head tilt, elbow bend): add a field to `Pose` + one
  transform in the skeleton.
