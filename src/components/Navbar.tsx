import { useLanguage } from '../translation/index.ts'
import { HashLink } from 'react-router-hash-link'
import { useRef, useState, useEffect } from 'react'

import Hamburger from '../assets/hamburger.svg?react'
import Logo from '../assets/logo.svg?react'
import LanguageToggle from './LanguageToggle.tsx'

interface NavbarProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
}

export default function Navbar({ isMenuOpen, setIsMenuOpen }: NavbarProps) {
  const { t } = useLanguage()
  const [dropdownVisibility, setDropdownVisible] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)


  useEffect(() => {
    function handleClickOutside(event : MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-screen fixed top-0 left-0 z-50 flex items-center justify-between px-8 py-4 lg:px-16 xl:px-70 bg-[#f3ebdb]">
      {/*The logo dictates the height of the whole Nav (plus padding)*/}
      <HashLink smooth to="/#about" aria-label={t('nav.aria.logo')}>
        <Logo className='w-16 h-16 lg:w-25 lg:h-25 border-4 border-white rounded-full'/>
      </HashLink>
      <ul className='hidden md-plus:flex gap-8 text-base items-center'>
        <li className='hover:text-[var(--text-highlight)]'><HashLink smooth to="/about">{t('nav.about')}</HashLink></li>
        <li className='hover:text-[var(--text-highlight)]'><HashLink smooth to="/#FAQ">{t('nav.faq')}</HashLink></li>
        <li className='relative'>
          <button onClick={() => setDropdownVisible(true)} className='cursor-pointer hover:text-[var(--text-highlight)]'>{t('nav.courses')}</button>
          <div ref={dropdownRef} className={` flex flex-col p-4 gap-2 justify-center items-start bg-white rounded-3xl absolute top-8 left-0 transition-opacity duration-500 ease-in-out ${ dropdownVisibility ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            <HashLink smooth to="/education" className='hover:text-[var(--text-highlight)]'>{t('nav.education')}</HashLink>
            <HashLink smooth to="/transformation" className='hover:text-[var(--text-highlight)]'>{t('nav.transformation')}</HashLink>
          </div>
        </li>
        {/*<li className='hover:text-[var(--text-highlight)]'><HashLink smooth to="/calendar">{t('nav.calendar')}</HashLink></li>*/}
        <li className='w-6 h-2.5 flex justify-center items-center hover:text-[var(--text-highlight)]'><LanguageToggle /></li>
      </ul>

      <HashLink smooth to="/#contacts" className='button hidden md-plus:block'>
        {t('nav.button.contacts')}
      </HashLink>
      
      <button
          onClick={() => {
            const newState = !isMenuOpen;
            setIsMenuOpen(newState);
            // Toggle overflow based on new state
            if (newState) {
              document.body.style.overflow = "hidden";
              document.body.style.position = "fixed";
              document.body.style.width = "100%";
            } else {
              document.body.style.overflow = "auto";
              document.body.style.position = "";
              document.body.style.width = "";
            }
          }}
          className="md-plus:hidden trasp"
        ><Hamburger className="size-9 text-[var(--feather-blue)]" aria-label={t('nav.aria.hamburger')}/></button>
    </nav>

  );
}