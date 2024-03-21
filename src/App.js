import React from 'react'
import OurFood from './components/OurFood'
import Header from './components/Header'
import Footer from './components/Footer'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import SignIn from './components/SignIn'
import "./App.css"
import { useState } from 'react'

const App = () => {
  const[count,setCount]=useState(0)
  const handleAdd=()=>{
    setCount(count+1)
  }
  return (
    <>
      <Header count={count}/>
      <Routes>
        <Route path="/" element={<Home handleAdd={handleAdd}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/ourfood"element={<OurFood/>}/>
        <Route path="/signin" element={<SignIn/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App