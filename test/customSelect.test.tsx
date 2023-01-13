import React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import Select from '../src/components/CustomSelect'

describe('Common render', () => {
  it('renders without crashing', () => {
    const setStateMock = jest.fn()
    const statesOptions = [{ value: '', text: '--Choose an option--' }]
    render(
      <React.Fragment>
        <Select name='state' label='State' options={statesOptions} message='Invalid State !' setFormState={setStateMock} />
      </React.Fragment>,
    )
  })
})
