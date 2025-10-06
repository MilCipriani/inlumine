import { useLanguage } from '../translation/index.ts'
import soul from '../assets/soulCoach.jpg'
import essenza from '../assets/luminosaEssenza.jpg'
import vita from '../assets/luminosaVita.jpg'
import metamorfica from '../assets/metamorfica.jpg'
import albero from '../assets/albero.jpg'
import riflex from '../assets/riflessologiaPlantareOrganica.jpg'

export default function Services() {
  const { t } = useLanguage()
  return (
    <section className="mt-16 lg:mt-24 flex flex-col gap-8">
      <h2 className='text-center'>{t('sections.services.h2')}</h2>
      <div className='w-full flex flex-col md:flex-row justify-start items-center gap-8'>
        <div className='w-[80%] md:w-[30%] ml-[-20%] md:m-0 h-80 rounded-3xl bg-center bg-cover flex flex-col items-center justify-end text-white text-2xl p-4' style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.5) 10%, rgba(0,0,0,0) 40%), url(${soul})` }}><p>{t('sections.services.soul')}</p></div>
        <div className='w-[80%] md:w-[30%] h-80 rounded-3xl bg-center bg-cover flex flex-col items-center justify-end text-white text-2xl p-4' style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 40%), url(${essenza})`}}><p>{t('sections.services.essenza')}</p></div>
        <div className='w-[80%] md:w-[30%] ml-[20%] md:m-0 h-80 rounded-3xl bg-center bg-cover flex flex-col items-center justify-end text-white text-2xl p-4' style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 40%), url(${vita})` }}>{t('sections.services.vita')}</div>
      </div>

      <div className='w-full flex flex-col md:flex-row justify-end items-center gap-8'>
        <div className='w-[80%] md:w-[30%] h-80 rounded-3xl bg-center bg-cover flex flex-col items-center justify-end text-white text-2xl p-4' style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 40%), url(${metamorfica})` }}>{t('sections.services.metamorfica')}</div>
        <div className='w-[80%] md:w-[30%] ml-[-20%] md:ml-0 h-80 rounded-3xl bg-center bg-cover flex flex-col items-center justify-end text-white text-2xl p-4' style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 40%), url(${albero})` }}>{t('sections.services.albero')}</div>
        <div className='w-[80%] md:w-[30%] h-80 rounded-3xl bg-center bg-cover flex flex-col items-center justify-end text-white text-2xl p-4' style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 40%), url(${riflex})` }}>{t('sections.services.riflex')}</div>
      </div>
    </section>

  );
}