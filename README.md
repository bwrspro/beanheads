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
