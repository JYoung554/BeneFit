const LoginForm = (props) => {
  return (
    <div>
      <form onSubmit={props.loginProps.handleSubmitLogin()}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value=""
          onChange={props.loginProps.handleChangeLogin()}
        ></input>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value=""
          onChange={props.loginProps.handleChangeLogin()}
        ></input>
        <input
          type="text"
          name="password"
          placeholder="Password"
          value=""
          onChange={props.loginProps.handleChangeLogin()}
        ></input>
      </form>
    </div>
  )
}
export default LoginForm
