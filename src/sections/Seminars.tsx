import { useLanguage } from '../translation/index.ts'
import CourseCard from '../components/CourseCard.tsx'
import type { CourseCardData } from "../data/CourseCardData.ts"
import { cardsData } from '../data/CourseCardData.ts'

export default function Seminars() {
  const { t } = useLanguage()

  return (
    <section id='courses' className="flex flex-col gap-8">
      <h2 className='text-start mb-8 sm:mb-16'>{t('sections.seminars.h2')}</h2>

      <div className="flex flex-col sm:grid sm:grid-cols-3 gap-8">
        {cardsData.filter((card) => card.type == 'sem').map((card: CourseCardData) => (<div key={card.id} className="">
                                                    <CourseCard  card={card}/>
                                                  </div>))}
      </div>

    </section>

  );
}