import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Signup from './Form';
import Login from './Login';
import TrainUpdate from './TrainUpdate';
const Allroutes = () => {
  return (
    <div>
      <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='Contact' element={<Contact/>}/>
    <Route path='About' element={<About/>}/>
    <Route path='Signup' element={<Signup/>}/>
    <Route path='Login' element={<Login/>}/>
    <Route path='TrainForm' element={<TrainUpdate/>}/>


      </Routes>
    </div>
  )
}

export default Allroutes
