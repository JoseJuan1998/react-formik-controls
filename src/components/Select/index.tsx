import { ErrorMessage, Field } from 'formik'
import React from 'react'
import { ISelect } from './interface'

export function Select({ label, name, options }: ISelect) {
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name} as='select'>
        {options.map(({ key, value }) => (
          <option key={key} value={value}>
            {key}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} className='error' component='div' />
    </div>
  )
}
