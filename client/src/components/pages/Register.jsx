import { React } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import RegisterForm from '../forms/RegisterForm'
import {
  SetAuthenticated,
  createUser,
  addUser
} from '../../store/actions/AuthActions'

const mapStateToProps = ({ authState }) => {
  return { authState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    SetAuthenticated: (value) => dispatch(SetAuthenticated(value))
  }
}



const Register = (props) => {
  const history = useNavigate()
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
      history('/login')
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
