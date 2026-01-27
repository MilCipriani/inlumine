import { useLanguage } from '../translation/index.ts'


export default function Footer({className}: {className?: string}) {
  const { t } = useLanguage()
  
  return (
    <footer className={`w-full h-fit flex flex-col gap-8 ${className || ''}`}>
      <p className='text-center'>{t('sections.contacts.allRightsReserved')}</p>
      <p className='text-justify'>{t('sections.contacts.disclaimer')}</p>
    </footer>

  );
}