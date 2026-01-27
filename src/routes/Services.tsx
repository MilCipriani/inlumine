import { useLanguage } from '../translation'

import ServicesSection from '../sections/ServicesSection'
import Footer from '../sections/Footer'


function Services() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col gap-24 mt-16">
      <h1>{t('sections.services.h2')}</h1>
      <ServicesSection />

      <Footer className='mt-16 sm:mt-32'/>
     
    </div>
  )
}

export default Services