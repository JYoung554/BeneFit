import { React } from 'react'

const RegisterForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit()}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={props.registerForm.username}
          onChange={props.onChange()}
        ></input>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={props.registerForm.firstName}
          onChange={props.onChange()}
        ></input>
        <input type="text" name="email" placeholder="Email" value=""></input>
        <input
          type="text"
          name="password"
          placeholder="Password"
          value={props.registerForm.password}
          onChange={props.onChange()}
        ></input>
        <input type="text" name="bio" placeholder="Bio" value=""></input>
        <input
          type="text"
          name="avatarUrl"
          placeholder="Avatar Url "
          value={props.registerForm.avatarUrl}
          onChange={props.onChange()}
        ></input>
      </form>
    </div>
  )
}
export default RegisterForm
