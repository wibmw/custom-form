import React from 'react'

const InputWrapper = ({ name, label, children }: IPropsInputWrapper) => {
  return (
    <>
      {/** *********** Input Wrapper ******************/}
      <div className='input-wrapper'>
        {/** *********** Child Label ******************/}
        <label htmlFor={name}>{label}</label>
        {/** *********** Child section ******************/}
        {children && children}
      </div>
    </>
  )
}

export default InputWrapper

// Interfaces
interface IInputLabel {
  name: string
  label: string
}

interface IPropsInputWrapper extends IInputLabel {
  children: JSX.Element
}

export interface IFormState extends IInputLabel {
  setFormState?: React.Dispatch<React.SetStateAction<IForm>>
}

export interface IForm extends Record<any, unknown> {
  id?: number
}
