import './App.css'
import CourseForm from './components/CourseForm'
import { theme, ThemeProvider } from '@chakra-ui/react'
// import LoginForm from './components/LoginForm'
// import RegisterForm from './components/RegisterForm'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <CourseForm />
      </div>
    </ThemeProvider>
  )
}

export default App
