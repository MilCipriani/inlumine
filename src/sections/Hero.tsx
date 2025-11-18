import { useLanguage } from '../translation/index.ts'
import { HashLink } from 'react-router-hash-link';
import featherImage from '../assets/feather.webp'


export default function Hero() {
  const { t } = useLanguage()
  return (
    <section id='about' className="w-full flex flex-col items-center justify-center gap-8 sm:gap-16 scroll-mt-28 lg:scroll-mt-37 mt-8 lg:mt-16">
      <div className='w-full flex flex-col items-center justify-center gap-8'>
        <h1 className='text-center text-[var(--feather-blue)]'>IN LUMINE</h1>
        <h4 className='whitespace-pre-line text-center text-[var(--text-light)] sm:max-w-[50rem]'>{t('sections.hero.h3')}</h4>
      </div>
      
      <div className='w-full flex items-center justify-center gap-4 sm:gap-8'>
        <HashLink to='/#FAQ' className='button flex items-center'>ESPLORA</HashLink>
        <HashLink to='/#paths' className='button-secondary'>SCOPRI I PERCORSI</HashLink>
      </div>
      
      <img src={featherImage} alt={t('sections.hero.alt')} className='w-full aspect-square md:aspect-[32/11] object-cover rounded-3xl'/>

    </section>

  );
}