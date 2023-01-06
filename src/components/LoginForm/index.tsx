import { Form, Formik } from 'formik'
import { object, string } from 'yup'
import { FormikControl } from '../FormikControl'
import { ILoginForm } from './interface'

export default function LoginForm() {
  const initialValues: ILoginForm = {
    email: '',
    password: '',
  }

  const validationSchema = object({
    email: string().email('invalid email format').required('required'),
    password: string().required('required'),
  })

  const onSubmit = (values: ILoginForm) => console.log({ values })

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnChange={false}
      validateOnBlur
      validateOnMount
    >
      {(formik) => {
        console.log(formik.errors)
        return (
          <Form>
            <FormikControl control='input' label='Email' name='email' />
            <FormikControl
              control='input'
              type='password'
              label='Password'
              name='password'
            />
            <button type='submit'>Login</button>
          </Form>
        )
      }}
    </Formik>
  )
}
