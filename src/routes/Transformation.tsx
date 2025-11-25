import { useLanguage } from '../translation'

import Courses from '../sections/Courses'
import Services from '../sections/Services'


function Transformation() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col gap-24 mt-16 pb-16 sm:pb-32">
      <h1>{t('sections.transformation.h1')}</h1>
      <Courses filter='sem' />
      <Courses filter='transf'/>
      <Services />
     
    </div>
  )
}

export default Transformation