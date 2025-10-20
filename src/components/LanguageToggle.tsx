import type { SupportedLanguages } from '../translation/translationTyping.ts';
import { useLanguage } from '../translation/index';


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
      aria-label={`traduce al ${currentLanguage === 'it' ? 'Español' : 'Italian'} - Traduci in ${currentLanguage === 'es' ? 'Italiano' : 'Spagnolo'}`}>
      <span className="">
        {currentLanguage === 'it' ? "ES" : "IT"}
      </span>
      
    </button>
  )
}