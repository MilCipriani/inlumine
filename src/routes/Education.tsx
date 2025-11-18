import { useLanguage } from '../translation'

import Courses from '../sections/Courses'
import Apenb from '../components/Apenb'


function Education() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col gap-24 mt-16 pb-16 sm:pb-32">
      <h1>{t('sections.education.h1')}</h1>
      <Apenb />
      <Courses filter='edu'/>
    </div>
  )
}

export default Education