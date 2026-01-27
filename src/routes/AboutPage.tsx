import FounderQuote from '../sections/FounderQuote'
import History from '../sections/History'
import Team from '../sections/Team'
import Ad from '../sections/Ad'
import Footer from '../sections/Footer'

function AboutPage() {
  return (
    <div className=''>
      <FounderQuote />
      <History />
      <Team />
      <Ad />
      <Footer className='mt-16 sm:mt-32'/>
    </div>
  )
}

export default AboutPage