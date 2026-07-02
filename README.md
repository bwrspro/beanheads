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

---

## FAQ & design notes

### Are the body parts built the same way the library builds the face?

**No — and the distinction matters.** The library treats the **face as parts**: every
feature is its own swappable **component picked from a registry by a string key** —
`eyesMap`, `hairMap`, `mouthsMap`, … and `Avatar` does `const Eyes = eyesMap[eyes]`.
So each *variant* (`hair="afro"` vs `"bob"`) is a **separate component** dropped into a
map.

The body does **not** replicate that registry. Each body part (`Neck`, `Body`, `Arms`,
`Leg`) is a **single parameterized component**. Its variants are **inline branches**
inside the component (`clothing === 'vneck' ? … : 'tankTop' ? … : crew`;
`bottoms === 'shorts' ? … : jeans`) and its colors are **palette lookups**
(`bottomsHex(key)`). So the body is closer to *"one self-contained component per part,
driven by props"* than to the library's *"map of interchangeable variant components"*.

Consequence: **colors and animations are data-driven / dynamic**, but **part shapes are
code branches**, not yet drop-in registry entries. See the extensibility table below.

### How is the animation rendered / handled?

Frame-based, **no tweening** (no Lottie, no interpolation):

1. An animation is an array of `Pose` frames (`ANIMATIONS.walk`, etc.).
2. `useFrameAnimation(frameCount, fps, playing)` runs a `requestAnimationFrame` loop and,
   every `1000/fps` ms, advances a frame **index** (`setIndex(i => (i+1) % frameCount)`).
3. `FrameAnimator` reads the index and renders `<FullBeanHead pose={frames[index]} />`.
4. `FullBeanHead` applies the `Pose`: the upper body (head + torso + arms) is wrapped in
   `<g transform="translate(0 bob)">`, and each limb's pivot `<g>` gets
   `style={{ transformOrigin: '<pivot>', transform: 'rotate(<deg>)' }}` — a **CSS transform
   around the pivot** (shoulders for arms, hips for legs).

React re-renders on each index change → the SVG groups get new `rotate`/`translate` →
the browser repaints. It's discrete frame-swapping at `fps`, driven by one React state.

### How easy is it to add more later? Is it already dynamic?

| You want to add…                              | What to do                                                                                     | Already dynamic? | Effort |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------- | ------ |
| a **bottoms / shoe color**                    | add one key to `BOTTOMS` / `SHOES` in `palette.ts` (`{ base, shade }`)                          | ✅ (string-key lookup) | trivial |
| a **skin / clothing color**                   | add it to the library `theme.ts` (`colors.skin` / `colors.clothing`)                           | ✅               | trivial |
| a **new animation** (using existing limbs)    | add a `Pose[]` to `ANIMATIONS`; it auto-appears in `ANIMATION_NAMES`. Any frame count.          | ✅               | easy   |
| a **new motion axis** (head tilt, elbow bend, per-frame face) | add a field to `Pose` + wire it into the relevant part's transform                             | ⚠️ partial       | moderate |
| a **new part *shape* variant** (cargo pants, hoodie, boots)   | add a branch in that part's component (`Leg`/`Body`/`Arms`) + an option value                   | ❌ (code branch) | moderate |
| a **whole new body part** (backpack, wings, pet) | add a component under `parts/`, render it in `FullBeanHead`, add a prop                         | ❌               | moderate |

**Bottom line:** colors and animation frames are fully data-driven — adding those is a
one-line change. Part **shapes** are not yet a registry, so new shapes mean editing a
component. If you expect many shape variants, the clean upgrade is to mirror the library's
face model: give each slot its own map (`bottomsMap`, `topMap`, `shoeMap`) selected by key,
so new variants become drop-in components instead of conditionals. That refactor is
contained (one map per slot) and would make the body as extensible as the face.
