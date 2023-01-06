import { Field } from 'formik'
import CheckBox from '../CheckBox'
import { DatePicker } from '../DatePicker'
import Input from '../Input'
import { RadioButton } from '../RadioButton'
import { Select } from '../Select'
import Textarea from '../Textarea'
import { IFormikControl } from './interface'

export function FormikControl({
  control,
  label,
  name,
  type = '',
  options = []
}: IFormikControl) {
  const controls = {
    input: <Input label={label} name={name} type={type} />,
    textarea: <Textarea label={label} name={name} />,
    select: <Select label={label} name={name} options={options} />,
    radio: <RadioButton label={label} name={name} options={options} />,
    checkbox: <CheckBox label={label} name={name} options={options} />,
    date: <DatePicker label={label} name={name} />,
  }

  return controls[control] ?? null
}
