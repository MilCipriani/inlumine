import type { SupportedLanguages } from '../translation/translationTyping.ts';
import { useLanguage } from '../translation/index';
import ItFlag from '../assets/ItalianFlag.svg?react'
import SpFlag from '../assets/SpanishFlag.svg?react'


export default function LanguageToggle() {

  const { currentLanguage, setLanguage } = useLanguage();

	const toggleLanguage = (): void => {
		const newLanguage: SupportedLanguages = currentLanguage === 'it' ? 'es' : 'it';
		setLanguage(newLanguage);
		console.log('new lang is set to: ', newLanguage);
	};

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="transition-colors px-1 cursor-pointer"
      title={`Switch to ${currentLanguage === 'it' ? 'Spanish' : 'Italian'}`}
      aria-label={`${currentLanguage === 'it' ? 'Traduce al Español' : 'Traduci in Italiano'}`}>
      <span className="flex gap-1" aria-hidden>
        {currentLanguage === 'it' ? <ItFlag className='w-6 h-6 rounded-full border-2 border-white'/> : <SpFlag className='w-6 h-6 rounded-full border-2 border-white'/>}
        {currentLanguage === 'es' ? "ES" : "IT"}
      </span>
      
    </button>
  )
}