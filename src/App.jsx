import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Vision from './pages/Vision';
import Announcements from './pages/Announcements';
import Contactus from './pages/Contactus';

export default function 

() {
  return (
    <div>
  <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/about' element={<Aboutus></Aboutus>}></Route>
    <Route path='/vision' element={<Vision></Vision>}></Route>
    <Route path='/announcement' element={<Announcements></Announcements>}></Route>
    <Route path='/contact' element={<Contactus></Contactus>}></Route>
    
  </Routes>

    </div>
  )
}
