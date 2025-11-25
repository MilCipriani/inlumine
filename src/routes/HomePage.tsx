import Hero from '../sections/Hero'
import FAQ from '../sections/FAQ'
import Paths from '../sections/Paths'
//import CalendarWidget from '../sections/CalendarWidget'
//import SocialProof from '../sections/SocialProof'
import Contacts from '../sections/Contacts'

function HomePage() {
  return (
    <>
      <Hero />
      <Paths />
      <FAQ />
      {/*<CalendarWidget />
      <SocialProof />*/}
      <Contacts />
    </>
  )
}

export default HomePage