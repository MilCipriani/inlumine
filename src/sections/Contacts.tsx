import { useLanguage } from '../translation/index.ts'

export default function Contacts() {
  const { t } = useLanguage()
  return (
    <section id='contacts' className="scroll-mt-28 lg:scroll-mt-37 mt-28 lg:mt-37 flex flex-col gap-8">
      <h2 className='text-center whitespace-pre-line mb-16'>{t('sections.contacts.h2')}</h2>


    </section>

  );
}