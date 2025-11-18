import { useLanguage } from '../translation/index.ts'
import apenb from '../assets/apenb.webp';


export default function Apenb() {
  const { t } = useLanguage()
  return (
    <section className="w-full flex flex-col items-center justify-center gap-8">
      <div className='relative w-full bg-white rounded-3xl p-8 sm:p-16 pt-24 sm:pt-24 flex flex-col items-center justify-center gap-8'>
        <img src={apenb} alt='Logo APENB' className='absolute top-[-1.5rem] left-1/2 -translate-x-1/2 w-24 aspect-square'/>
        <h2 className='whitespace-pre-line text-center'>{t('sections.apenb.h2')}</h2>
        <p className='whitespace-pre-line text-justify'>{t('sections.apenb.p')}</p>
        {/*<p className='whitespace-pre-line text-center'>{t('sections.apenb.p2')}</p>*/}
      </div>
      
      

    </section>

  );
}