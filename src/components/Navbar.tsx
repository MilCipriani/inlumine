import { useLanguage } from '../translation/index.ts'
import { HashLink } from 'react-router-hash-link'

import Hamburger from '../assets/hamburger.svg?react'
import Logo from '../assets/logo.svg?react'
import SpFlag from '../assets/SpanishFlag.webp'

interface NavbarProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
}

export default function Navbar({ isMenuOpen, setIsMenuOpen }: NavbarProps) {
  const { t } = useLanguage()
  return (
    <nav className="w-screen sticky top-0 left-0 z-50 flex items-center justify-between py-4 -mx-8 px-8 lg:-mx-16 lg:px-16 xl:-mx-60 xl:px-60 bg-[var(--white)]">
      {/*The logo dictates the height of the whole Nav (plus padding)*/}
      <HashLink smooth to="/#about">
        <Logo className='w-16 h-16 lg:w-25 lg:h-25'/>
      </HashLink>
      <ul className='hidden md-plus:flex gap-8 text-base items-center'>
        <li><HashLink smooth to="/#about">{t('nav.about')}</HashLink></li>
        <li><HashLink smooth to="/#history">{t('nav.history')}</HashLink></li>
        <li><HashLink smooth to="/#team">{t('nav.team')}</HashLink></li>
        <li><HashLink smooth to="/#courses">{t('nav.courses')}</HashLink></li>
        <li><HashLink smooth to="/#services">{t('nav.services')}</HashLink></li>
        <li className='w-6 h-2.5 flex justify-center items-center'><img src={SpFlag}></img></li>
      </ul>
        {/*Img is temporary, will be replaced with a toggle element for the language system */}

      <HashLink smooth to="/#contacts" className='button hidden md-plus:block'>
        {t('nav.button.contacts')}
      </HashLink>
      
      <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md-plus:hidden trasp"
        ><Hamburger className="size-9"/></button>
    </nav>

  );
}