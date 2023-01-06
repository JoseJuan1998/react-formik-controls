import { Form, Formik } from 'formik'
import { array, date, object, string } from 'yup'
import { FormikControl } from '../FormikControl'

export function FormikContainer() {
  const initialValues = {
    email: '',
    description: '',
    country: '',
    license: '',
    skills: [],
    birthDate: null,
  }
  const validationSchema = object({
    email: string().email('invalid format').required('required'),
    description: string().required('required'),
    country: string().required('required'),
    license: string().required('required'),
    skills: array().min(1, 'required'),
    birthDate: date()
      .max(new Date(2005, 1), 'date must be before 2005')
      .required('required')
      .nullable(),
  })
  const selectOptions = [
    { key: 'Select a country', value: '' },
    { key: 'MX', value: 'Mexico' },
    { key: 'US', value: 'United States' },
  ]
  const radioOptions = [
    { key: 'Basic', value: 'Basic' },
    { key: 'Standard', value: 'Standard' },
    { key: 'Pro', value: 'Pro' },
  ]
  const checkOptions = [
    { key: 'Programming', value: 'Programming' },
    { key: 'Learning', value: 'Learning' },
    { key: 'Teaching', value: 'Teaching' },
  ]
  const onSubmit = (values: any) => console.log(values)

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      email
    >
      {(_formik) => (
        <Form>
          <FormikControl
            control='input'
            name='email'
            label='Email'
            type='email'
          />
          <FormikControl
            control='textarea'
            name='description'
            label='Description'
          />
          <FormikControl
            control='select'
            name='country'
            label='Country'
            options={selectOptions}
          />
          <FormikControl
            control='radio'
            name='license'
            label='Type of License'
            options={radioOptions}
          />
          <FormikControl
            control='checkbox'
            name='skills'
            label='Mark your skills'
            options={checkOptions}
          />
          <FormikControl
            control='date'
            name='birthDate'
            label='Select your birth date'
          />
          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  )
}
