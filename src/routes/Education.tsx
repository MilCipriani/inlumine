import { useLanguage } from '../translation'

import Courses from '../sections/Courses'
import Apenb from '../components/Apenb'
import Footer from '../sections/Footer'


function Education() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col gap-24 mt-16">
      <h1>{t('sections.education.h1')}</h1>
      <Apenb />
      <Courses filter='edu'/>
      <Footer className='mt-16 sm:mt-32'/>
    </div>
  )
}

export default Education