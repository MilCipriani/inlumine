import './index.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import HomePage from './routes/HomePage'
import AboutPage from './routes/AboutPage'
import CoursePage from './routes/CoursePage'
import ServicePage from './routes/ServicePage'
import Education from './routes/Education'
import Transformation from './routes/Transformation'

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <BrowserRouter>
    <ScrollToTop />
      <div className='relative mt-16 lg:mt-25 px-8 py-8 lg:px-16 xl:px-70 bg-[#f3ebdb] min-h-full'>
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path='/education' element={<Education />} />
          <Route path='/transformation' element={<Transformation />} />

          <Route path="/courses/:id" element={<CoursePage />} />
          <Route path="/services/:id" element={<ServicePage />} />

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
