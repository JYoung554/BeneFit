const { REGISTER, LOGIN, SET_USER, SET_AUTHENTICATED } = require('../types')

const iState = {
  registerForm: {
    username: '',
    firstName: '',
    email: '',
    password: '',
    bio: '',
    avatarUrl: ''
  },
  loginForm: {
    username: '',
    password: ''
  },
  authenticated: false,
  currentUser: null
}

const AuthReducer = (state = iState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        registerForm: {
          ...state.registerForm,
          [action.payload.name]: action.payload.value
        }
      }
    case LOGIN:
      return { ...state, loginForm: action.payload }
    case CHECK_SESSION:
      return { ...state, currentUser: action.payload }
    default:
      return state
  }
}

export default AuthReducer
