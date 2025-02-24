import React from 'react'
import Navbar from './components/Navbar.jsx/Navbar'
import Hero from './components/Hero.jsx/Hero'
import Banner from './components/Banner.jsx/Banner'
import WhyChoose from './components/WhyChoose.jsx/WhyChoose'
import About from './components/About.jsx/About'
import Footer from './components/Footer.jsx/Footer'
import Popup from './components/Popup/Popup'
import { useState } from 'react'

const App = () => {

  const  [ShowPopup, setShowPopup] = useState(false)
  const  HanlePopup = () => {
    setShowPopup(true)
  }
  return (
    <div className='overflow-x-hidden'>
      <Navbar HanlePopup={HanlePopup}/>
      <Hero />
      <Banner />
      <WhyChoose />
      <About HanlePopup={HanlePopup}/>
      <Banner />
      <Footer />
      <Popup ShowPopup={ShowPopup} setShowPopup = {setShowPopup} />
    </div>
  )
}

export default App