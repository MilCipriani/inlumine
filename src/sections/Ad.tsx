import { useLanguage } from '../translation/index.ts'
import { useState } from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import AdCard from '../components/AdCard.tsx'
import type { AdCardData } from "../data/AdCardData"
import { cardsData } from '../data/AdCardData.ts'

export default function Ad() {
  const { t } = useLanguage()

  const slideNumber = cardsData.length

  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: slideNumber > 3,
    mode: "free-snap",
    breakpoints: {
      "(min-width: 100px)": {
      slides: { perView: 1, spacing: 20 },
      },
      "(min-width: 768px)": {
      slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1000px)": {
      slides: { perView: 3, spacing: 20 },
      },
      "(min-width: 1280px)": {
      slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1480px)": {
      slides: { perView: 3, spacing: 20 },
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
    <>
      { slideNumber > 0 && (
        <section className="mt-28 lg:mt-37 flex flex-col gap-8">
          <h2 className='text-center mb-16'>{t('sections.ad.h2')}</h2>

          <div ref={sliderRef} className="keen-slider">
            {cardsData.map((card: AdCardData) => (<div key={card.id} className="keen-slider__slide">
                                                      <AdCard  card={card}/>
                                                    </div>))}
          </div>

          {/*Navigation dots*/}
          {slideNumber > 3 && loaded && instanceRef.current && (
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
          )}

        </section>
      )}
    </>
    
  );
}