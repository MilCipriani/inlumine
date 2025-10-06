import { useLanguage } from '../translation/index.ts'
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
      <Logo className='w-16 h-16 lg:w-25 lg:h-25'/>
      <ul className='hidden md-plus:flex gap-8 text-base items-center'>
        <li><a >{t('nav.about')}</a></li>
        <li><a >{t('nav.history')}</a></li>
        <li><a >{t('nav.team')}</a></li>
        <li><a >{t('nav.courses')}</a></li>
        <li><a >{t('nav.services')}</a></li>
        <li className='w-6 h-2.5 flex justify-center items-center'><img src={SpFlag}></img></li>
        {/*Img is temporary, will be replaced with a toggle element for the language system */}
      </ul>
      <a className='button hidden md-plus:block'>{t('nav.button.contacts')}</a>
      <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md-plus:hidden trasp"
        ><Hamburger className="size-9"/></button>
    </nav>

  );
}