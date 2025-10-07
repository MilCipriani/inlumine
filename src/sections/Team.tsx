import { useLanguage } from '../translation/index.ts'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useState } from 'react'
import Card from '../components/TeamCard.tsx'
import { cardsData } from '../data/TeamCardData.ts'
import type { TeamCardData} from '../data/TeamCardData.ts'


export default function Team() {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    breakpoints: {
      "(min-width: 100px)": {
      slides: { perView: 1, spacing: 10 },
      },
      "(min-width: 720px)": {
      slides: { perView: 2, spacing: 10 },
      },
      "(min-width: 1000px)": {
      slides: { perView: 3, spacing: 10 },
      },
      "(min-width: 1280px)": {
      slides: { perView: 3, spacing: 15 },
      },
      "(min-width: 1480px)": {
      slides: { perView: 4, spacing: 10 },
      }
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  }
)
  return (
    <section id='team' className="scroll-mt-28 lg:scroll-mt-37 mt-28 lg:mt-37 flex flex-col gap-8">
        <h2 className='text-center'>{t('sections.team.h2')}</h2>

        <div ref={sliderRef} className="keen-slider">
                  {cardsData.map((card: TeamCardData) => (<div key={card.id} className="keen-slider__slide">
                                                <Card  card={card}/>
                                          </div>))}
                </div>

        {/*Navigation dots*/}
          {loaded && instanceRef.current && (
            <div className="dots">
            {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
                return (
                <button
                  key={idx}
                  onClick={() => {instanceRef.current?.moveToIdx(idx)}}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                ></button>
                )
              })
            }
            </div>
          )
        }
    </section>

  );
}