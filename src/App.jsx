import React from 'react'
import Navbar from './components/Navbar.jsx/Navbar'
import Hero from './components/Hero.jsx/Hero'
import Banner from './components/Banner.jsx/Banner'
import WhyChoose from './components/WhyChoose.jsx/WhyChoose'
import About from './components/About.jsx/About'


const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Banner />
      <WhyChoose />
      <About />
    </div>
  )
}

export default App