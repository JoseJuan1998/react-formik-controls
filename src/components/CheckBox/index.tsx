import { ErrorMessage, Field } from 'formik'
import React from 'react'
import { ICheckBox } from './interface'

export default function CheckBox({ label, name, options }: ICheckBox) {
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name}>
        {({ field }: any) =>
          options.map(({ key, value }) => (
            <React.Fragment key={key}>
              <label htmlFor={key}>{key}</label>
              <input
                type='checkbox'
                name={key}
                id={key}
                {...field}
                value={value}
                checked={field.value.includes(value)}
              />
            </React.Fragment>
          ))
        }
      </Field>
      <ErrorMessage name={name} className='error' component='div' />
    </div>
  )
}
