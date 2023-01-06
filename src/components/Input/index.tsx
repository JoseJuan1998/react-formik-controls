import { ErrorMessage, Field } from 'formik'
import React from 'react'
import { IInput } from './interface'

export default function Input({ label, name, type }: IInput) {
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name} type={type} />
      <ErrorMessage name={name} className='error' component='div' />
    </div>
  )
}
