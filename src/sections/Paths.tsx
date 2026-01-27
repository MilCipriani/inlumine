import { useLanguage } from '../translation/index.ts'
import { Link } from 'react-router-dom'

import bookImg from '../assets/book.webp'
import seagullImg from '../assets/seagull.webp'
import services from '../assets/services.webp'



export default function Paths() {
  const { t } = useLanguage()
  return (
    <section id='paths' className="w-full flex flex-col items-center justify-center gap-8 mt-28 lg:mt-37 scroll-mt-24 lg:scroll-mt-37">
      <h2 className='whitespace-pre-line text-center mb-8 sm:mb-16'>{t('sections.features.h2')}</h2>

      <div className="w-full flex flex-col sm:flex-row gap-8 justify-center items-center">
        <Link to={'/education'} className="w-full sm:w-1/3 max-w-md">
          <figure className="relative w-full aspect-[4/3] rounded-3xl">
            <img src={bookImg} alt={t('sections.features.alt.alt1')} className='w-full h-full object-cover rounded-3xl'/>
            <figcaption className="absolute bottom-0 left-0 w-full h-full flex items-end justify-center text-center text-xl lg:text-2xl text-[var(--white)] bg-[linear-gradient(to_top,_rgba(0,0,0,0.7)_15%,_rgba(0,0,0,0)_60%)] p-4 rounded-3xl">{t('sections.features.feature1')}</figcaption>
          </figure>
        </Link>

        <Link to={'/transformation'} className="w-full sm:w-1/3 max-w-md">
          <figure className="relative w-full aspect-[4/3] rounded-3xl">
            <img src={seagullImg} alt={t('sections.features.alt.alt2')} className='w-full h-full object-cover rounded-3xl'/>
            <figcaption className="absolute bottom-0 left-0 w-full h-full flex items-end justify-center text-center text-xl lg:text-2xl text-[var(--white)] bg-[linear-gradient(to_top,_rgba(0,0,0,0.7)_15%,_rgba(0,0,0,0)_60%)] p-4 rounded-3xl">{t('sections.features.feature2')}</figcaption>
          </figure>
        </Link>

        <Link to={'/services'} className="w-full sm:w-1/3 max-w-md">
          <figure className="relative w-full aspect-[4/3] rounded-3xl">
            <img src={services} alt={t('sections.features.alt.alt3')} className='w-full h-full object-cover rounded-3xl'/>
            <figcaption className="absolute bottom-0 left-0 w-full h-full flex items-end justify-center text-center text-xl lg:text-2xl text-[var(--white)] bg-[linear-gradient(to_top,_rgba(0,0,0,0.7)_15%,_rgba(0,0,0,0)_60%)] p-4 rounded-3xl">{t('sections.features.feature4')}</figcaption>
          </figure>
        </Link>
      </div>
      

    </section>

  );
}