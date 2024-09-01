const {
  REGISTER,
  SET_REGISTER,
  LOGIN,
  SET_LOGIN,
  SET_USER,
  SET_AUTHENTICATED
} = require('../types')

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
  currentUser: null,
  userData: []
}

const AuthReducer = (state = iState, action) => {
  switch (action.type) {
    case SET_REGISTER:
      return {
        ...state,
        registerForm: {
          ...state.registerForm,
          [action.payload.name]: action.payload.value
        }
      }
    case SET_LOGIN:
      return { ...state, loginForm: action.payload }
    case REGISTER:
      return { ...state }
    case LOGIN:
      return { ...state, currentUser: action.payload }
    case SET_USER:
      return { ...state, userInfo: action.payload }
    case CHECK_SESSION:
      return { ...state, currentUser: action.payload }
    case SET_AUTHENTICATED:
      return { ...state, authenticated: action.payload }

    default:
      return state
  }
}

export default AuthReducer
