import { useParams } from 'react-router-dom'
import { useLanguage } from '../translation'
import { cardsData } from '../data/CourseCardData'
import Calendar from '../assets/calendar.svg?react'
import Timer from '../assets/timer.svg?react'
import Price from '../assets/price.svg?react'



function CoursePage() {
  const { id } = useParams() //gets id from URL
  const { t } = useLanguage()
  
  const course = cardsData.find(course => course.id === id)
  
  //if invalid course id
  if (!course) {
    return <div>Course not found</div>
  }
  
  return (
    <div className="flex flex-col sm:flex-row gap-8 mt-8 pb-16 sm:pb-32">
      
      <div className='w-full sm:w-4/5 flex flex-col gap-8'>
        <h1>{t(course.h3)}</h1>
        <img src={course.img} className='w-full sm:max-h-80 object-cover rounded-3xl mx-auto'></img>
        <h3 className=''>{t(course.subtitle)}</h3>
        <p className='text-justify whitespace-pre-line text-[var(--text-light)]'>{t(course.description)}</p>
      </div>
      
      <div className='flex flex-col justify-center gap-4 w-full sm:w-1/5 h-fit p-8 bg-white rounded-3xl'>
        <div className='flex xs:flex-col md:flex-row gap-2 items-center'>
          <Calendar className=''/>
          <p>{t(course.date)}</p>
        </div>
        <div className='flex xs:flex-col md:flex-row gap-2 items-center'>
          <Timer className='flex-none'/>
          <p className='text-center'>{t(course.duration)}</p>
        </div>
        <div className='flex xs:flex-col md:flex-row gap-2 items-center'>
          <Price className='w-6 h-6 text-[var(--text-highlight)]'/>
          <p className='text-center'>{course.price}</p>
        </div>
        
      </div>
      
    </div>
  )
}

export default CoursePage