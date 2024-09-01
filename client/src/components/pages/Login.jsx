import { React } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import LoginForm from '../forms/LoginForm'
import { createLogin, addLogin } from '../../store/actions/AuthActions'

const mapStateToProps = ({ authState }) => {
  return { authState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    SetAuthenticated: (value) => dispatch(value),
    createLogin: (formData) => dispatch(createLogin(formData)),
    addLogin: (name, value) => dispatch(addLogin(name, value))
  }
}

const Login = (props) => {
  const handleSubmitLogin = async (e) => {
    e.preventDefault()
    try {
      await props.createLogin(loginForm)
      SetAuthenticated(true)
      history('/feed')
    } catch (error) {
      console.log(error)
    }
  }
  const handleChangeLogin = async (e) => {
    addLogin(e.target.name, e.target.value)
  }

  const { loginForm } = props.authState
  const loginProps = { loginForm, handleSubmitLogin, handleChangeLogin }
  return (
    <div>
      <LoginForm {...loginProps}></LoginForm>
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
