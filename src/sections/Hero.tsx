import { useLanguage } from '../translation/index.ts'
import featherImage from '../assets/feather.webp';


export default function Hero() {
  const { t } = useLanguage()
  return (
    <section className="w-full flex flex-col items-center justify-center gap-8 mt-8 lg:mt-16">
      <h1 className='whitespace-pre-line text-center'>{t('sections.hero.h1')}</h1>
      <h3 className='whitespace-pre-line text-center'>{t('sections.hero.h3')}</h3>
      <figure className='w-full'>
        <img src={featherImage} alt="A feather fluctuating on a blue background with a light coming from above" className='aspect-square md:aspect-[28/11] object-cover rounded-3xl'/>
      </figure>

    </section>

  );
}