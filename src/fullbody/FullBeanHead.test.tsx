import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { FullBeanHead } from './FullBeanHead'
import { ANIMATIONS, ANIMATION_NAMES, registerAnimation } from './anim/animations'
import { registerTop } from './tops'
import { registerBottomsColor } from './palette'
import { registerGraphic, imageGraphic } from './graphics'
import { registerPattern } from './patterns'

describe('FullBeanHead', () => {
  it('renders a self-contained full-body svg', () => {
    const html = renderToStaticMarkup(
      <FullBeanHead skinTone="brown" clothing="shirt" clothingColor="red" bottoms="jeans" shoeColor="purple" />
    )
    expect(html).toContain('<svg')
    expect(html).toContain('viewBox="0 0 400 690"')
    expect(html).toContain('#592d3d')
    expect(html).toContain('#FFFFFF')
  })

  it('accepts a pose without throwing', () => {
    const pose = ANIMATIONS.walk[0]
    const html = renderToStaticMarkup(<FullBeanHead skinTone="dark" pose={pose} />)
    expect(html).toContain('rotate(')
  })

  it('renders registry variants distinctly (vneck / jacket)', () => {
    const vneck = renderToStaticMarkup(<FullBeanHead skinTone="brown" clothingColor="red" clothing="vneck" />)
    const jacket = renderToStaticMarkup(<FullBeanHead skinTone="brown" clothingColor="red" clothing="jacket" />)
    expect(vneck).toContain('L200 316') // V-neck trim
    expect(jacket).toContain('M200 300 V446') // jacket open front
  })

  it('renders the promoted tops (polo / hoodie / sweater / buttonShirt)', () => {
    const render = (clothing: string) =>
      renderToStaticMarkup(<FullBeanHead skinTone="brown" clothingColor="red" clothing={clothing} />)
    expect(render('polo')).toContain('M200 300 V336') // short placket
    expect(render('hoodie')).toContain('M192 306 L189 334') // drawstring
    expect(render('sweater')).toContain('M170 432 V444') // hem ribbing
    expect(render('buttonShirt')).toContain('M200 302 V446') // full placket
  })

  it('supports runtime-registered tops and colors (database-driven)', () => {
    registerTop('dbCape', {
      Torso: function CapeTorso() {
        return <path d="M0 0 H10" fill="#123abc" />
      },
      Sleeve: function CapeSleeve() {
        return <g />
      },
    })
    registerBottomsColor('forest', { base: '#224433', shade: '#88aa99' })
    const html = renderToStaticMarkup(
      <FullBeanHead skinTone="light" clothing="dbCape" bottoms="jeans" bottomsColor="forest" />
    )
    expect(html).toContain('#123abc')
    expect(html).toContain('#224433')
  })

  it('falls back to defaults for unknown keys', () => {
    const html = renderToStaticMarkup(
      <FullBeanHead skinTone="light" clothing="nope" bottoms="nope" shoes="nope" bottomsColor="nope" shoeColor="nope" />
    )
    expect(html).toContain('<svg')
  })

  it('applies per-frame face-swap pose fields (blink)', () => {
    const open = renderToStaticMarkup(<FullBeanHead skinTone="brown" eyes="normal" />)
    const closed = renderToStaticMarkup(<FullBeanHead skinTone="brown" eyes="normal" pose={{ eyes: 'content' }} />)
    expect(closed).not.toEqual(open)
  })

  it('applies headDeg tilt around the neck pivot', () => {
    const html = renderToStaticMarkup(<FullBeanHead skinTone="brown" pose={{ headDeg: 8 }} />)
    expect(html).toContain('rotate(8deg)')
  })

  it('ships the face/tilt animations', () => {
    expect(Object.keys(ANIMATIONS)).toEqual(
      expect.arrayContaining(['idle', 'wave', 'walk', 'blink', 'talk', 'celebrate', 'dance', 'shiver'])
    )
  })

  it('renders registry shoe variants distinctly (boots)', () => {
    const sneakers = renderToStaticMarkup(<FullBeanHead skinTone="brown" shoes="sneakers" />)
    const boots = renderToStaticMarkup(<FullBeanHead skinTone="brown" shoes="boots" />)
    expect(boots).not.toEqual(sneakers)
  })

  it('shiver holds a concerned face across all 5 frames', () => {
    expect(ANIMATIONS.shiver).toHaveLength(5)
    expect(ANIMATIONS.shiver.every((f) => f.eyebrows === 'concerned' && f.mouth === 'sad')).toBe(true)
  })

  it('renders the built-in star decal only when topGraphic is set', () => {
    const plain = renderToStaticMarkup(<FullBeanHead skinTone="brown" clothing="shirt" />)
    const decaled = renderToStaticMarkup(<FullBeanHead skinTone="brown" clothing="shirt" topGraphic="star" />)
    expect(plain).not.toContain('data-decal="star"')
    expect(decaled).toContain('data-decal="star"')
    expect(decaled).toContain('bh-torso-decal-clip')
  })

  it('unknown decal keys render nothing (DB rows may outlive art)', () => {
    const html = renderToStaticMarkup(<FullBeanHead skinTone="brown" topGraphic="ghost" />)
    expect(html).toContain('<svg')
    expect(html).not.toContain('bh-torso-decal-clip')
  })

  it('supports runtime-registered decals, including asset-backed ones (database-driven)', () => {
    registerGraphic('dbLogo', function DbLogo() {
      return <circle cx={50} cy={50} r={40} fill="#ab34cd" />
    })
    registerGraphic('eventTee', imageGraphic('https://cdn.example/event-2026.png'))
    const inline = renderToStaticMarkup(<FullBeanHead skinTone="light" topGraphic="dbLogo" />)
    const image = renderToStaticMarkup(<FullBeanHead skinTone="light" topGraphic="eventTee" />)
    expect(inline).toContain('#ab34cd')
    expect(image).toContain('https://cdn.example/event-2026.png')
    expect(image).toContain('preserveAspectRatio')
  })

  it('patterns the top and bottoms base fills only when set (built-in stripes)', () => {
    const plain = renderToStaticMarkup(<FullBeanHead skinTone="brown" clothing="shirt" />)
    const striped = renderToStaticMarkup(
      <FullBeanHead skinTone="brown" clothing="shirt" clothingColor="red" topPattern="stripes" />
    )
    expect(plain).not.toContain('bh-pat-')
    expect(striped).toContain('<pattern id="bh-pat-stripes-')
    expect(striped).toContain('fill="url(#bh-pat-stripes-')
  })

  it('unknown pattern keys fall back to flat color (DB rows may outlive art)', () => {
    const html = renderToStaticMarkup(<FullBeanHead skinTone="brown" topPattern="ghost" bottomsPattern="ghost" />)
    expect(html).toContain('<svg')
    expect(html).not.toContain('bh-pat-')
  })

  it('supports runtime-registered patterns on both garments (database-driven)', () => {
    registerPattern('dbDots', { d: 'M6 3 A3 3 0 1 1 5.99 3Z M16 13 A3 3 0 1 1 15.99 13Z', w: 20, h: 20 })
    const html = renderToStaticMarkup(
      <FullBeanHead skinTone="light" clothing="polo" topPattern="dbDots" bottomsPattern="dbDots" bottomsColor="red" />
    )
    // two tiles: one per garment color pair, referenced by both piece sets
    expect(html).toContain('bh-pat-dbDots-')
    expect((html.match(/<pattern /g) ?? []).length).toBe(2)
    // decal art still receives the real hex pair, not a paint-server reference
    const decaled = renderToStaticMarkup(
      <FullBeanHead skinTone="light" topPattern="dbDots" topGraphic="star" />
    )
    expect(decaled).toContain('data-decal="star"')
  })

  it('supports runtime-registered animations (database-driven)', () => {
    const before = ANIMATION_NAMES.length
    registerAnimation('dbBounce', [{ bob: -8 }, { bob: 0 }])
    expect(ANIMATIONS.dbBounce).toHaveLength(2)
    expect(ANIMATION_NAMES).toContain('dbBounce')
    expect(ANIMATION_NAMES.length).toBe(before + 1)
    // re-registering replaces frames without duplicating the picker entry
    registerAnimation('dbBounce', [{ bob: -4 }])
    expect(ANIMATIONS.dbBounce).toHaveLength(1)
    expect(ANIMATION_NAMES.filter((n) => n === 'dbBounce')).toHaveLength(1)
    const html = renderToStaticMarkup(<FullBeanHead skinTone="brown" pose={ANIMATIONS.dbBounce[0]} />)
    expect(html).toContain('<svg')
  })
})
