import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { FullBeanHead } from './FullBeanHead'
import { ANIMATIONS } from './anim/animations'
import { registerTop } from './tops'
import { registerBottomsColor } from './palette'

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
})
