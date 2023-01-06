import { Form, Formik } from 'formik'
import { array, date, object, string } from 'yup'
import { FormikControl } from '../FormikControl'
import { ICourseForm } from './interface'

export default function CourseForm() {
  const initialValues: ICourseForm = {
    email: '',
    bio: '',
    course: '',
    skills: [],
    courseDate: null,
  }

  const selectOptions = [
    {
      key: 'Select a course',
      value: '',
    },
    {
      key: 'Frontend Course',
      value: 'frontend',
    },
    {
      key: 'Backend Course',
      value: 'backend',
    },
  ]

  const checkOptions = [
    {
      key: 'HTML',
      value: 'html',
    },
    {
      key: 'CSS',
      value: 'css',
    },
    {
      key: 'JS',
      value: 'js',
    },
  ]

  const validationSchema = object({
    email: string().email('invalid email format').required('required'),
    bio: string().required('required'),
    course: string().required('required'),
    skills: array(),
    courseDate: date().required('required').nullable(),
  })

  const onSubmit = (values: ICourseForm) => console.log({ values })

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnBlur
      validateOnChange
    >
      {(formik) => (
        <Form>
          <FormikControl control='input' label='Email' name='email' />
          <FormikControl control='textarea' label='Bio' name='bio' />
          <FormikControl
            control='select'
            label='Course'
            name='course'
            options={selectOptions}
          />
          <FormikControl
            control='checkbox'
            label='Skill Set'
            name='skills'
            options={checkOptions}
          />
          <FormikControl control='date' label='Course Date' name='courseDate' />
          <button type='submit' disabled={!formik.isValid}>
            Enroll
          </button>
        </Form>
      )}
    </Formik>
  )
}
