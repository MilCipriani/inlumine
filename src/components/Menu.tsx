import { useLanguage } from '../translation/index'
import { HashLink } from 'react-router-hash-link'
import LanguageToggle from './LanguageToggle'

import X from '../assets/X.svg?react'

interface FullScreenMenuProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
}

export default function FullScreenMenu({ isMenuOpen, setIsMenuOpen }: FullScreenMenuProps) {
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  }

  const { t } = useLanguage()

  return (
    <div
        className={`h-[100dvh] fixed inset-0 bg-[#f3ebdb] z-[100] transition-all duration-800 ease-in-out flex items-center justify-center ${
        isMenuOpen 
          ? 'opacity-100 visible' 
          : 'opacity-0 invisible'
    }`}>
      <div className='w-full h-[100dvh] flex flex-col items-center justify-center gap-12 text-2xl font-serif px-12'>
        <button
          onClick={() => setIsMenuOpen(false)}
        >
          <X aria-hidden className="size-5"/>
        </button>

        <HashLink to="/#about" onClick={handleLinkClick}>In Lumine</HashLink>

        <nav>
          <ul className="flex flex-col items-center gap-4 text-base">
            <li className="transform transition-transform duration-300 hover:scale-110">
              <HashLink 
                to="/#about" 
                onClick={handleLinkClick}
                className="hover:opacity-70 transition-opacity"
              >
                {t('nav.about')}
              </HashLink>
            </li>
            <li className="transform transition-transform duration-300 hover:scale-110">
              <HashLink  
                to="/#history"
                onClick={handleLinkClick}
                className="hover:opacity-70 transition-opacity"
              >
                {t('nav.history')}
              </HashLink>
            </li>
            <li className="transform transition-transform duration-300 hover:scale-110">
              <HashLink 
                to="/#team"
                onClick={handleLinkClick}
                className="hover:opacity-70 transition-opacity"
              >
                {t('nav.team')}
              </HashLink>
            </li>
            <li className="transform transition-transform duration-300 hover:scale-110">
              <HashLink 
                to="/#courses"
                onClick={handleLinkClick}
                className="hover:opacity-70 transition-opacity"
              >
                {t('nav.courses')}
              </HashLink>
            </li>
            <li className="transform transition-transform duration-300 hover:scale-110">
              <HashLink 
                to="/#services"
                onClick={handleLinkClick}
                className="hover:opacity-70 transition-opacity"
              >
                {t('nav.services')}
              </HashLink>
            </li>
            <li className="transform transition-transform duration-300 hover:scale-110"><LanguageToggle /></li>
            <li className="transform transition-transform duration-300 hover:scale-110 button-phone mt-12">
              <HashLink 
                to="/#contacts"
                onClick={handleLinkClick}
                className="hover:opacity-70 transition-opacity"
              >
                {t('nav.button.contacts')}
              </HashLink>
            </li>
            <li className='mt-12 transform transition-transform duration-300 normal-case'>© In Lumine</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}