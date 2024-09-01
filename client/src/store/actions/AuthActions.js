import { Register, Login, Verify } from '../../services/AuthServices'

import {
  REGISTER,
  SET_REGISTER,
  SET_LOGIN,
  LOGIN,
  SET_AUTHENTICATED,
  SET_USER
} from '../types'

export const SetAuthenticated = async (value) => ({
  type: SET_AUTHENTICATED,
  payload: value
})

export const createUser = (formData) => async (dispatch) => {
  try {
    const register = await Register(formData)
    dispatch({
      type: REGISTER,
      payload: register
    })
  } catch (error) {
    console.log(error)
  }
}

export const addUser = (name, value) => ({
  type: SET_REGISTER,
  payload: { name: name, value: value }
})

export const createLogin = (formData) => async (dispatch) => {
  try {
    const login = await Login(formData)
    dispatch({
      type: LOGIN,
      payload: login
    })
  } catch (error) {
    console.log(error)
  }
}

export const addLogin = (name, value) => ({
  type: SET_LOGIN,
  payload: {
    name: name,
    value: value
  }
})

export const verifySession = (token) => async (dispatch) => {
  try {
    const verified = await Verify(token)
    dispatch({
      type: CHECK_SESSION,
      payload: verified
    })
  } catch (error) {
    console.log(error)
  }
}
