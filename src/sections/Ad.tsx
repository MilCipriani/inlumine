import { useLanguage } from '../translation/index.ts'

export default function Ad() {
  const { t } = useLanguage()
  return (
    <section className="mt-28 lg:mt-37 flex flex-col gap-8">
      <h2 className='text-center'>{t('sections.ad.h2')}</h2>


    </section>

  );
}