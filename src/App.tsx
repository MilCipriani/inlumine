import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Menu from './components/Menu'

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />


    </div>
  )
}

export default App
