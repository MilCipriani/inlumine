import { useLanguage } from '../translation/index.ts'
import CourseCard from '../components/CourseCard.tsx'
import type { CourseCardData } from "../data/CourseCardData"
import { cardsData } from '../data/CourseCardData.ts'

type CoursesProps = {
  filter: string;
}

export default function Courses({filter} : CoursesProps) {
  const { t } = useLanguage()

  return (
    <section className="flex flex-col gap-8">
      <h2 className='text-start mb-8 sm:mb-16'>
        {filter === 'edu' || filter === 'transf'
          ? t('sections.courses.h2')
          : t('sections.seminars.h2')}
      </h2>

      <div className="flex flex-col sm:grid sm:grid-cols-3 gap-8">
        {cardsData.filter((card) => card.type == filter).map((card: CourseCardData) => (<div key={card.id} className="">
                                                    <CourseCard  card={card}/>
                                                  </div>))}
      </div>

    </section>

  );
}