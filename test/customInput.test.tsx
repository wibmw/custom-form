import React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import Input from '../src/components/CustomInput'

describe('Common render', () => {
  it('renders without crashing', () => {
    const setStateMock = jest.fn()

    render(
      <React.Fragment>
        <Input
          name='firstName'
          label='First Name'
          regexp={/^[a-zA-Zéèàçùê -]{2,50}$/}
          message='Invalid First Name !'
          setFormState={setStateMock}
          type='text'
        />
      </React.Fragment>,
    )
  })
})
