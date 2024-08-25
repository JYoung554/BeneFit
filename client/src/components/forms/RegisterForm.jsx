import { React } from 'react'

const RegisterForm = () => {
  return (
    <div>
      <form>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value=""
        ></input>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value=""
        ></input>
        <input type="text" name="email" placeholder="Email" value=""></input>
        <input
          type="text"
          name="password"
          placeholder="Password"
          value=""
        ></input>
        <input type="text" name="bio" placeholder="Bio" value=""></input>
        <input
          type="text"
          name="avatarUrl"
          placeholder="Avatar Url "
          value=""
        ></input>
      </form>
    </div>
  )
}
export default RegisterForm
