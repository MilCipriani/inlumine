import { useLanguage } from '../translation/index'

//import LanguageToggle from './LanguageToggle'

import X from '../assets/X.svg?react'

interface FullScreenMenuProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
}

export default function FullScreenMenu({ isMenuOpen, setIsMenuOpen }: FullScreenMenuProps) {
  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  const { t } = useLanguage()

  return (
    <div
        className={`fixed inset-0 bg-white z-[100] transition-all duration-800 ease-in-out flex items-center justify-center ${
        isMenuOpen 
          ? 'opacity-100 visible' 
          : 'opacity-0 invisible'
    }`}>
      <div className='w-full h-full flex flex-col items-center justify-center gap-8 text-2xl font-serif px-12'>
        <button
          onClick={() => setIsMenuOpen(false)}
        >
          <X aria-hidden className="size-5"/>
        </button>

        <a onClick={handleLinkClick} >In Lumine</a>

        <nav>
          <ul className="flex flex-col items-center gap-4 text-base">
            <li className="transform transition-transform duration-300 hover:scale-110">
              <a 
                onClick={handleLinkClick}
                className="hover:opacity-70 transition-opacity"
              >
                {t('nav.about')}
              </a>
            </li>
            <li className="transform transition-transform duration-300 hover:scale-110">
              <a  
                onClick={handleLinkClick}
                className="hover:opacity-70 transition-opacity"
              >
                {t('nav.history')}
              </a>
            </li>
            <li className="transform transition-transform duration-300 hover:scale-110">
              <a 
                onClick={handleLinkClick}
                className="hover:opacity-70 transition-opacity"
              >
                {t('nav.team')}
              </a>
            </li>
            <li className="transform transition-transform duration-300 hover:scale-110">
              <a 
                onClick={handleLinkClick}
                className="hover:opacity-70 transition-opacity"
              >
                {t('nav.courses')}
              </a>
            </li>
            <li className="transform transition-transform duration-300 hover:scale-110">
              <a 
                onClick={handleLinkClick}
                className="hover:opacity-70 transition-opacity"
              >
                {t('nav.services')}
              </a>
            </li>
            <li className="transform transition-transform duration-300 hover:scale-110" onClick={handleLinkClick}><span>LanguageToggle here</span></li>
            <li className="transform transition-transform duration-300 hover:scale-110 button-phone">
              <a 
                onClick={handleLinkClick}
                className="hover:opacity-70 transition-opacity"
              >
                {t('nav.button.contacts')}
              </a>
            </li>
            <li className='mt-16 transform transition-transform duration-300 normal-case'>© In Lumine</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}