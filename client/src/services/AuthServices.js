import Client from '../services/index'

export const Register = async (formData) => {
  try {
    const res = Client.post('/auth/register', formData)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const Login = async (formData) => {
  try {
    localStorage.setItem(token, res.data.token)
    const res = Client.post('/auth/login', formData)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const Verify = async () => {
  try {
    const res = Client.get('/auth/login')
    return res.data
  } catch (error) {}
}
