import { useParams } from 'react-router-dom'
import { useLanguage } from '../translation'
import { cardsData } from '../data/ServiceCardData'
import type { TranslationKey } from '../translation/translationTyping'


function ServicePage() {
  const { id } = useParams() //gets id from URL
  const { t } = useLanguage()

  const service = cardsData.find(service => service.id === id)

  //if invalid id
  if (!service) {
    return <div>Service not found</div>
  }
  
  return (
    <div className="flex flex-col lg:flex-row gap-8 mt-8 sm:mb-32 lg:mb-48">

      <img src={service.img} alt={t(`sections.services.${service.id}.alt` as TranslationKey)} className='w-full sm:w-1/3 sm:aspect-[2/3] rounded-3xl object-cover'/>

      <article className='flex flex-col rounded-3xl gap-8 p-4 sm:p-8'>
        <h1>{t(service.h1)}</h1>
        <h3>{t(service.subtitle)}</h3>
        <p className='whitespace-pre-line text-[var(--text-light)] text-justify'>{t(service.description)}</p>
        <div className='w-full px-4 py-8 rounded-3xl bg-white'>
          <p className='whitespace-pre-line text-[var(--text-light)] text-start'>{t(service.info)}</p>
        </div>
      </article>

    </div>
  )
}

export default ServicePage