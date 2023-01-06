import { ErrorMessage, Field } from 'formik'
import React from 'react'
import DateView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { IDatePicker } from './interface'

export function DatePicker({ label, name }: IDatePicker) {
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }: any) => {
          const { setFieldValue } = form
          const { value } = field

          return (
            <DateView
              id={name}
              {...field}
              selected={value}
              onChange={(value) => setFieldValue(name, value)}
            />
          )
        }}
      </Field>
      <ErrorMessage name={name} className='error' component='div' />
    </div>
  )
}
