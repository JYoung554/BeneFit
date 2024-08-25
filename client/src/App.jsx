import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Register from './components/pages/Register'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route element={<Register />} path="/register"></Route>
      </Routes>
    </div>
  )
}

export default App
