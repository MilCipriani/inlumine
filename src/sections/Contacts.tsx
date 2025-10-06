import { useLanguage } from '../translation/index.ts'

export default function Contacts() {
  const { t } = useLanguage()
  return (
    <section className="mt-16 lg:mt-24 flex flex-col gap-8">
      <h2 className='text-center whitespace-pre-line'>{t('sections.contacts.h2')}</h2>


    </section>

  );
}