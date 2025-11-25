import { useLanguage } from '../translation/index.ts'
import { useState } from 'react';
import type { TranslationKey } from '../translation/translationTyping.ts';


import gigliofioriImg from '../assets/gigliofiori.webp'

export default function History() {
  const [activeYear, setActiveYear] = useState(2004)
  const yearButtons = [2004, 2014, 2018, 2023];

  const { t } = useLanguage()
  return (
    <section id='history' className="scroll-mt-28 lg:scroll-mt-37 mt-28 lg:mt-37 flex flex-col md:flex-row gap-8 md:gap-32 md:items-center">
        <div className='flex flex-col gap-12 min-h-[23rem]'>
          <h2 className='mb-4 md:mb-8 text-center'>{t('sections.history.h2')}</h2>

          <div className="flex items-center justify-around w-full">
            {yearButtons.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-4 py-2 cursor-pointer rounded-lg transition-colors duration-300
                  ${
                    activeYear === year
                      ? 'bg-[var(--feather-blue)] text-white'
                      : 'bg-white text-[var(--text-color)] hover:bg-gray-200'
                  }`}
              >
                {year}
              </button>
            ))}
          </div>

          <p className="text-justify whitespace-pre-line">{t(`sections.history.${activeYear}` as TranslationKey)}</p>

        </div>
        

        <img src={gigliofioriImg} alt={t('sections.history.alt')} className='rounded-3xl md:max-w-[40%]'></img>
    </section>

  );
}