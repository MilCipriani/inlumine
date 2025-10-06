import { useState } from 'react'
import './index.css'
import Navbar from './sections/Navbar'
import Menu from './sections/Menu'
import Hero from './sections/Hero'
import Features from './sections/Features'
import FounderQuote from './sections/FounderQuote'
import History from './sections/History'
import Team from './sections/Team'
import Courses from './sections/Courses'
import Services from './sections/Services'
import Ad from './sections/Ad'
import Contacts from './sections/Contacts'

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className='relative px-8 py-8 lg:px-16 xl:px-60'>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <Features />
      <FounderQuote />
      <History />
      <Team />
      <Courses />
      <Services />
      <Ad />
      <Contacts />


    </div>
  )
}

export default App
