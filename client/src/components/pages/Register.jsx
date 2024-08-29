import { React } from 'react'
import { connect } from 'react-redux'
import RegisterForm from '../forms/RegisterForm'
import { SetAuthenticated } from '../../store/actions/AuthActions'

const mapStateToProps = ({ authState }) => {
  return { authState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    SetAuthenticated: (value) => dispatch(SetAuthenticated(value))
  }
}



const Register = (props) => {
  const { registerForm } = props.authState
  const registerProps = { registerForm, handleChange, handleSubmit }

  const handleChange = async () => {
    addUser(e.target.name, e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (registerForm.password === registerForm.comparePassword) {
      createUser(registerForm)
      addUser('', '')
    } else {
      console.log('Passwords do not match')
    }
  }
  return (
    <div>
      <RegisterForm {...registerProps}></RegisterForm>
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Register)
