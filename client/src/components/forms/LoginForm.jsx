const LoginForm = (props) => {
  return (
    <div>
      <form>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value=""
        ></input>
        <input type="text" name="email" placeholder="Email" value=""></input>
        <input
          type="text"
          name="password"
          placeholder="Password"
          value=""
        ></input>
      </form>
    </div>
  )
}
export default LoginForm
