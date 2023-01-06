import { Form, Formik } from 'formik'
import React from 'react'
import { object, ref, string } from 'yup'
import { FormikControl } from '../FormikControl'
import { IRegisterForm } from './interface'

export default function RegisterForm() {
  const initialValues: IRegisterForm = {
    email: '',
    password: '',
    confirmPassword: '',
    contact: '',
    telephone: '',
  }

  const validationSchema = object({
    email: string().required('required').email('invalid email format'),
    password: string().required('required'),
    confirmPassword: string()
      .oneOf([ref('password'), ''], 'password does not match')
      .required('required'),
    contact: string().required('required'),
    telephone: string().when('contact', {
      is: 'telephone',
      then: string().required('required'),
    }),
  })

  const radioOptions = [
    {
      key: 'emailMode',
      value: 'email',
    },
    {
      key: 'telephoneMode',
      value: 'telephone',
    },
  ]

  const onSubmit = (values: IRegisterForm) => console.log({ values })

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnChange
      validateOnMount
      validateOnBlur
    >
      {(formik) => (
        <Form>
          <FormikControl control='input' label='Email' name='email' />
          <FormikControl
            control='input'
            label='Password'
            name='password'
            type='password'
          />
          <FormikControl
            control='input'
            label='Confirm Password'
            name='confirmPassword'
            type='password'
          />
          <FormikControl
            control='radio'
            label='Contact Mode'
            name='contact'
            options={radioOptions}
          />
          <FormikControl control='input' label='Telephone' name='telephone' />
          <button type='submit' disabled={!formik.isValid}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  )
}
