import { useLanguage } from '../translation/index.ts'
import treeImg from '../assets/tree.webp'

export default function FounderQuote() {
  const { t } = useLanguage()
  return (
    <section className="flex flex-col-reverse md-plus:flex-row w-full items-center justify-center mt-28 lg:mt-37 rounded-3xl bg-white max-h-[100vh]">
      <img src={treeImg} alt={t('sections.founderQuote.alt')} className='w-full md-plus:max-w-[45%] object-cover aspect-auto rounded-b-3xl md-plus:rounded-none md-plus:rounded-l-3xl'/>
      <div className='p-8 sm:p-24 md:p-16 md-plus:p-8 flex flex-col items-center justify-center gap-8'>
        <h3 className='whitespace-pre-line text-center'>{t('sections.founderQuote.h2')}</h3>
        <p className='text-[var(--feather-blue)]'>{t('sections.founderQuote.p')}</p>
      </div>
    </section>

  );
}