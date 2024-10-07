import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Add from './components/Add'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Nav/>
    <br />
    <br />
    <Routes>
    <Route path='/' element={<Home/>} ></Route>
    <Route path='/add' element={<Add/>}></Route>
    </Routes>
    </>
  )
}

export default App