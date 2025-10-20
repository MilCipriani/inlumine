import { useParams } from 'react-router-dom'
import { useLanguage } from '../translation'
import { cardsData } from '../data/TeamCardData'

function CoursePage() {
  const { id } = useParams() //gets id from URL
  const { t } = useLanguage()
  
  const member = cardsData.find(member => member.id === id)
  
  //if invalid team member id
  if (!member) {
    return <div>Team member not found</div>
  }
  
  return (
    <div className="flex gap-32 mt-8 pb-16 sm:pb-32">
      <div className='w-2/3 flex flex-col gap-8 mt-8'>
        <h1>{t(member.h3)}</h1>
        <p>{t(member.p)}</p>
      </div>
      <div className='w-1/3'>
        <img src={member.img} className='w-full rounded-3xl'/>
      </div>

    </div>
  )
}

export default CoursePage