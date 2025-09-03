import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './component/forms/Login'
import Home from './component/pages/Home'
import Success from './component/pages/Success'
Route

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/success" element={<Success/>} />
      </Routes>
    </div>
  )
}

export default App
