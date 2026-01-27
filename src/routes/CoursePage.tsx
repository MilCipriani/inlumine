import { useParams } from 'react-router-dom'
import { useLanguage } from '../translation'
import { cardsData } from '../data/CourseCardData'
import Calendar from '../assets/calendar.svg?react'
import GPS from '../assets/gps.svg?react'
import Timer from '../assets/timer.svg?react'
import Price from '../assets/price.svg?react'
import type { TranslationKey } from '../translation/translationTyping'



function CoursePage() {
  const { id } = useParams() //gets id from URL
  const { t } = useLanguage()
  
  const course = cardsData.find(course => course.id === id)
  
  //if invalid course id
  if (!course) {
    return <div>Course not found</div>
  }
  
  return (
    <div className="flex flex-col lg:flex-row gap-8 mt-8 sm:mb-32 lg:mb-48">
      
      <article className='w-full lg:w-4/5 flex flex-col gap-8'>
        <h1>{t(course.h3)}</h1>
        <img src={course.img} alt={t(`sections.courses.cards.card${course.id}.alt` as TranslationKey)} className='w-full sm:max-h-80 object-cover rounded-3xl' />
        <h3>{t(course.subtitle)}</h3>
        <p className='text-justify whitespace-pre-line text-[var(--text-light)]'>{t(course.description)}</p>
      </article>
      
      <aside aria-label={t('sections.courses.aria.details')} className='flex flex-col justify-center gap-4 w-full lg:w-1/5 h-fit p-8 bg-white rounded-3xl'>
        <div className='flex xs:flex-col lg:flex-row gap-2 items-center'>
          <Calendar aria-hidden="true" className='flex-none'/>
          <p className='text-start'>{t(course.date)}</p>
        </div>
        {course.location && ( 
          <div className='flex xs:flex-col lg:flex-row gap-2 items-center'>
            <GPS aria-hidden="true" className='flex-none'/>
            <p className='text-start'>{course.location}</p>
          </div>
        )}
        <div className='flex xs:flex-col lg:flex-row gap-2 items-center'>
          <Timer aria-hidden="true" className='flex-none'/>
          <p className='text-start'>{t(course.duration)}</p>
        </div>
        <div className='flex xs:flex-col lg:flex-row gap-2 items-center'>
          <Price aria-hidden="true" className='flex-none w-6 h-6 text-[var(--text-highlight)]'/>
          <p className='text-start whitespace-pre-line'>{course.price ? t(course.price as TranslationKey) : course.price}</p>
        </div>
        
      </aside>
      
    </div>
  )
}

export default CoursePage