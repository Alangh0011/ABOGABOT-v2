import React, { useState } from 'react'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Tiempo from './components/Tiempo/Tiempo'
import Testimonios from './components/Testimonios/Testimonios.jsx'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Tiempo/>
      <Testimonios/>
    </div>
  )
}

export default App
