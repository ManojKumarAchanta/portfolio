import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'

const App = () => {
  return (
    <div id='main' className="overflow-y-hidden selection:text-cyan-400 w-full text-white [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] bg-cover">
      <Navbar/>
      <Hero/>
      <Projects/>
      <Skills/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default App
