import { ErrorMessage, Field } from 'formik'
import React from 'react'
import { IRadioButton } from './interface'

export function RadioButton({ label, name, options }: IRadioButton) {
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name}>
        {({ field }: any) =>
          options.map(({ key, value }) => (
            <React.Fragment key={key}>
              <label htmlFor={key}>{value}</label>
              <input
                type='radio'
                id={key}
                {...field}
                value={value}
                checked={field.value === value}
              />
            </React.Fragment>
          ))
        }
      </Field>
      <ErrorMessage name={name} className='error' component='div' />
    </div>
  )
}
