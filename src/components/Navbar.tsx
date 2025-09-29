import { useLanguage } from '../translation/index.ts'
import Hamburger from '../assets/hamburger.svg?react'

interface NavbarProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
}

export default function Navbar({ isMenuOpen, setIsMenuOpen }: NavbarProps) {
  const { t } = useLanguage()
  return (
    <nav className="w-screen sticky top-0 left-0 z-50 md:h-32 px-4 md:px-16 lg:px-20 2xl:px-80 pt-8 pb-4 flex items-center justify-between font-serif">
      <h1 className="text-4xl"><a> Logo here </a></h1>
      <ul className='hidden md:flex gap-8 text-base uppercase'>
        <li><a >{t('nav.about')}</a></li>
        <li><a >{t('nav.history')}</a></li>
        <li><a >{t('nav.team')}</a></li>
        <li><a >{t('nav.courses')}</a></li>
        <li><a >{t('nav.services')}</a></li>
        <li><a >{t('nav.button.contacts')}</a></li>
      </ul>
      <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden trasp"
        ><Hamburger className="size-9"/></button>
    </nav>

  );
}