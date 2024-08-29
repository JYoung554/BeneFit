import { useState, useEffect } from 'react'
import connect from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import Register from './components/pages/Register'
import Login from './components/pages/Login'
import { AuthReducer } from './store/reducers'
import { SetAuthenticated } from './store/actions/AuthActions'

const mapStateToProps = async ({ authState }) => {
  return { authState }
}

const mapDispatchToProps = async (dispatch) => {
  return {
    SetAuthenticated: (value) => dispatch(SetAuthenticated(value))
  }
}

const App = (props) => {
  const checkToken = async () => {
    const token = localStorage.getToken()
    if (token) {
      props.authState.authenticated(true)
    }
  }

  useEffect(() => {
    checkToken()
    if (props.SetAuthenticated) {
    }
  }, [])

  return (
    <div>
      <Routes>
        <Route element={<Register />} path="/register"></Route>
        <Route element={<Login />} path="/login"></Route>
      </Routes>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
