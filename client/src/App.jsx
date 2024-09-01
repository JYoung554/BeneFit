import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import Register from './components/pages/Register'
import Feed from './components/pages/Feed'
import Login from './components/pages/Login'
import { AuthReducer } from './store/reducers'
import { SetAuthenticated, verifySession } from './store/actions/AuthActions'

const mapStateToProps = async ({ authState }) => {
  return { authState }
}

const mapDispatchToProps = async (dispatch) => {
  return {
    SetAuthenticated: (value) => dispatch(SetAuthenticated(value)),
    verified: (token) => dispatch(verifySession(token))
  }
}

const App = (props) => {
  const checkToken = () => {
    const token = localStorage.getToken('token')
    if (token) {
      props.verified(token)
      props.authState.authenticated(true)
    }
  }

  useEffect(() => {
    checkToken()
    if (props.authState.authenticated) {
      console.log('Hi')
    }
  }, [])

  return (
    <div>
      <Routes>
        <Route element={<Register />} path="/register"></Route>
        <Route element={<Login />} path="/login"></Route>
        <Route element={<Feed />} path="/feed"></Route>
      </Routes>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
