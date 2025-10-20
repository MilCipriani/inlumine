import { useParams } from 'react-router-dom'
import { useLanguage } from '../translation'
import { cardsData } from '../data/ServiceCardData'


function ServicePage() {
  const { id } = useParams() //gets id from URL
  const { t } = useLanguage()

  const service = cardsData.find(service => service.id === id)

  //if invalid id
  if (!service) {
    return <div>Service not found</div>
  }
  
  return (
    <div className="flex flex-col sm:flex-row gap-8 mt-8 pb-16 sm:pb-32">

      <img src={service.img} className='w-full sm:w-1/3 sm:aspect-[2/3] rounded-3xl object-cover'></img>

      <div className='flex flex-col rounded-3xl gap-8 p-4 sm:p-8'>
        <h1>{t(service.h1)}</h1>
        <h3>{t(service.subtitle)}</h3>
        <p className='whitespace-pre-line text-[var(--text-light)] text-justify'>{t(service.description)}</p>

        {service.teachers && (
          <div>
            
          </div>
        )}

      </div>

    </div>
  )
}

export default ServicePage