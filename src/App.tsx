import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import Hero from './components/Hero'
import Features from './components/Features'
import FounderQuote from './components/FounderQuote'

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className='relative px-8 py-8 lg:px-16 xl:px-60'>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <Features />
      <FounderQuote />


    </div>
  )
}

export default App
