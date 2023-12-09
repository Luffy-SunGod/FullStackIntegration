import { useState } from 'react'

import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './component/Navbar'
import Home from './component/Home'
import Login from './component/Login'
import Signup from './component/Signup'
import About from './component/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/about' element={<About/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/signup' element={<Signup/>}></Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
