import { useLanguage } from '../translation/index.ts'
import { useInView } from '../hooks/useInView'
import { Link } from 'react-router-dom'

import soul from '../assets/soulCoach.jpg'
import essenza from '../assets/luminosaEssenza.jpg'
import vita from '../assets/luminosaVita.jpg'
import meta from '../assets/metamorfica.jpg'
import albero from '../assets/albero.jpg'
import riflex from '../assets/riflessologiaPlantareOrganica.jpg'
import SmallArrow from '../assets/smallArrow.svg?react'

export default function Services() {
  const { t } = useLanguage()

  //one observer per card, allows the fade-in animations to be out of sync (removed after first scroll into view)
  const { ref: soulRef, isVisible: soulVisible } = useInView({ threshold: 0.2 });
  const { ref: essenzaRef, isVisible: essenzaVisible } = useInView({ threshold: 0.2 });
  const { ref: vitaRef, isVisible: vitaVisible } = useInView({ threshold: 0.2 });
  const { ref: metaRef, isVisible: metaVisible } = useInView({ threshold: 0.2 });
  const { ref: alberoRef, isVisible: alberoVisible } = useInView({ threshold: 0.2 });
  const { ref: riflexRef, isVisible: riflexVisible } = useInView({ threshold: 0.2 });

  return (
    <section id='services' className="flex flex-col gap-8">
      <h2 className='text-start mb-8 sm:mb-16'>{t('sections.services.h2')}</h2>

      <div className='w-full flex flex-col md:flex-row justify-start items-center gap-8'>
        <Link to={'/services/soul'}
        className='w-[80%] md:w-[30%] ml-[-20%] md:m-0 h-80'>
          <div
            ref={soulRef}
            aria-label={t('sections.services.soul.alt')}
            className={`relative w-full h-full rounded-3xl bg-center bg-cover flex flex-col items-center justify-end text-white text-2xl p-4 ${soulVisible ? 'fade-in-right' : 'fade-hidden'}`}
            style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.5) 10%, rgba(0,0,0,0) 40%), url(${soul})` }}
          >
            <SmallArrow className="w-8 h-8 ml-auto mb-auto text-white"/>
            <p>{t('sections.services.soul.h1')}</p>
            <div className='w-full h-full absolute top-0 right-0 hover:bg-gray-200/15 rounded-3xl'></div>
          </div>
        </Link>
        
        <Link to={'/services/essenza'}
        className='w-[80%] md:w-[30%] h-80'>
          <div
            ref={essenzaRef}
            aria-label={t('sections.services.essenza.alt')}
            className={`relative w-full h-full rounded-3xl bg-center bg-cover flex flex-col items-center justify-end text-white text-2xl p-4 ${essenzaVisible ? 'fade-in-right' : 'fade-hidden'}`}
            style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 40%), url(${essenza})` }}
          >
            <SmallArrow className="w-8 h-8 ml-auto mb-auto text-white"/>
            <p>{t('sections.services.essenza.h1')}</p>
            <div className='w-full h-full absolute top-0 right-0 hover:bg-gray-200/15 rounded-3xl'></div>
          </div>
        </Link>

        <Link to={'/services/vita'}
        className='w-[80%] md:w-[30%] ml-[20%] md:m-0 h-80'>
          <div
            ref={vitaRef}
            aria-label={t('sections.services.vita.alt')}
            className={`relative w-full h-full rounded-3xl bg-center bg-cover flex flex-col items-center justify-end text-white text-2xl p-4 ${vitaVisible ? 'fade-in-right' : 'fade-hidden'}`}
            style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 40%), url(${vita})` }}
          >
            <SmallArrow className="w-8 h-8 ml-auto mb-auto text-white"/>
            <p>{t('sections.services.vita.h1')}</p>
            <div className='w-full h-full absolute top-0 right-0 hover:bg-gray-200/15 rounded-3xl'></div>
          </div>
        </Link>
      </div>

      <div className='w-full flex flex-col md:flex-row justify-end items-center gap-8'>
        <Link to={'/services/meta'}
        className='w-[80%] md:w-[30%] h-80'>
          <div
            ref={metaRef}
            aria-label={t('sections.services.meta.alt')}
            className={`relativew-full h-full rounded-3xl bg-center bg-cover flex flex-col items-center justify-end text-white text-2xl p-4 ${metaVisible ? 'fade-in-right' : 'fade-hidden'}`}
            style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 40%), url(${meta})` }}
          >
            <SmallArrow className="w-8 h-8 ml-auto mb-auto text-[var(--feather-blue)]"/>
            <p>{t('sections.services.meta.h1')}</p>
            <div className='w-full h-full absolute top-0 right-0 hover:bg-gray-200/15 rounded-3xl'></div>
          </div>
        </Link>

        <Link to={'/services/albero'}
        className='w-[80%] md:w-[30%] ml-[20%] md:ml-0 h-80'>
          <div
            ref={alberoRef}
            aria-label={t('sections.services.albero.alt')}
            className={`relative w-full h-full rounded-3xl bg-center bg-cover flex flex-col items-center justify-end text-white text-2xl p-4 ${alberoVisible ? 'fade-in-right' : 'fade-hidden'}`}
            style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 40%), url(${albero})` }}
          >
            <SmallArrow className="w-8 h-8 ml-auto mb-auto text-white"/>
            <p>{t('sections.services.albero.h1')}</p>
            <div className='w-full h-full absolute top-0 right-0 hover:bg-gray-200/15 rounded-3xl'></div>
          </div>
        </Link>

        <Link to={'/services/riflex'}
        className='w-[80%] md:w-[30%] h-80'>
          <div
            ref={riflexRef}
            aria-label={t('sections.services.riflex.alt')}
            className={`relative w-full h-full rounded-3xl bg-center bg-cover flex flex-col items-center justify-end text-white text-2xl p-4 ${riflexVisible ? 'fade-in-right' : 'fade-hidden'}`}
            style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 40%), url(${riflex})` }}
          >
            <SmallArrow className="w-8 h-8 ml-auto mb-auto text-white"/>
            <p>{t('sections.services.riflex.h1')}</p>
            <div className='w-full h-full absolute top-0 right-0 hover:bg-gray-200/15 rounded-3xl'></div>
          </div>
        </Link>
      </div>
    </section>
  );
}
