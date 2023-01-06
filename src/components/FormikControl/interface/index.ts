export interface IFormikControl {
  control: 'input' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'date'
  label: string
  name: string
  type?: string
  options?: { key: string; value: string }[]
}
