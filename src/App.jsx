import React, { useState } from 'react'

import Header from './Components/Header'
import About from './Components/About'
import Projects from './Components/Projects'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Loginpopup from './Components/Loginpopup/Loginpopup'

const App = () => {
  const[showLogin,setShowLogin]=useState(false)
  return (
    <>
   {showLogin && <Loginpopup setShowLogin={setShowLogin} />}

    <div className='w-full overflow-hidden'>

      <Header setShowLogin={setShowLogin}/>
      <About/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
    
    </>
  )
}

export default App
