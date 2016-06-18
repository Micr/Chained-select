import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import ChainedSelect from '../components/ChainedSelect'
import Select from '../components/Select'

function setup() {
  let props = {
    selectArray: [{ id: 1, types: [] }, { id: 2, types: [] }],
    onSelectChange: expect.createSpy()
  }

  let renderer = TestUtils.createRenderer()
  renderer.render(<ChainedSelect {...props} />)
  let output = renderer.getRenderOutput()

  return {
    props,
    output,
    renderer
  }
}

describe('components', () => {
  describe('ChainedSelect', () => {
    it('should render correctly', () => {
      const { output } = setup()

      expect(output.type).toBe('ul')

      let [ sel ] = output.props.children

      expect(sel.type).toBe(Select)
    })
  })
})
