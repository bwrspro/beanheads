import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { FullBeanHead } from './FullBeanHead'
import { ANIMATIONS } from './anim/animations'

describe('FullBeanHead', () => {
  it('renders a self-contained full-body svg', () => {
    const html = renderToStaticMarkup(
      <FullBeanHead skinTone="brown" clothing="shirt" clothingColor="red" bottoms="jeans" shoeColor="purple" />
    )
    expect(html).toContain('<svg')
    expect(html).toContain('viewBox="0 0 400 690"')
    // body parts share the library outline color
    expect(html).toContain('#592d3d')
    // a sneaker sole (white) is present
    expect(html).toContain('#FFFFFF')
  })

  it('accepts a pose without throwing', () => {
    const pose = ANIMATIONS.walk[0]
    const html = renderToStaticMarkup(<FullBeanHead skinTone="dark" pose={pose} />)
    expect(html).toContain('rotate(')
  })
})
