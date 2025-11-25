import FounderQuote from '../sections/FounderQuote'
import History from '../sections/History'
import Team from '../sections/Team'
import Ad from '../sections/Ad'

function AboutPage() {
  return (
    <div className='pb-16 sm:pb-32'>
      <FounderQuote />
      <History />
      <Team />
      <Ad />
    </div>
  )
}

export default AboutPage