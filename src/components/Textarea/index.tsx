import { ErrorMessage, Field } from 'formik'
import React from 'react'
import { ITextarea } from './interface'

export default function Textarea({ label, name }: ITextarea) {
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name} as='textarea' />
      <ErrorMessage name={name} className='error' component='div' />
    </div>
  )
}
