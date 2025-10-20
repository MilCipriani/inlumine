import './index.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Menu from './components/Menu'
import HomePage from './routes/HomePage'
import CoursePage from './routes/CoursePage'
import ServicePage from './routes/ServicePage'
import TeamPage from './routes/TeamPage'

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <BrowserRouter>
      <div className='relative px-8 py-8 lg:px-16 xl:px-60'>
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
           
          <Route path="/courses/:id" element={<CoursePage />} />
          <Route path="/services/:id" element={<ServicePage />} />
          <Route path="/team/:id" element={<TeamPage />} />

        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
