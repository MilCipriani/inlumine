import { useLanguage } from '../translation/index.ts'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useState } from 'react'
import CourseCard from '../components/CourseCard.tsx'
import type { CourseCardData } from "../data/CourseCardData"
import { cardsData } from '../data/CourseCardData.ts'

export default function Courses() {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [showDots, setShowDots] = useState(false)
 
  const slideCount = cardsData.length

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: slideCount > 3,
    mode: "free-snap",
    breakpoints: {
      "(min-width: 100px)": {
      slides: { perView: 1, spacing: 10 },
      },
      "(min-width: 768px)": {
      slides: { perView: 2, spacing: 10 },
      },
      "(min-width: 1000px)": {
      slides: { perView: 3, spacing: 10 },
      },
      "(min-width: 1280px)": {
      slides: { perView: 2, spacing: 15 },
      },
      "(min-width: 1480px)": {
      slides: { perView: 3, spacing: 10 },
      }
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
      setShowDots(slider.track.details.maxIdx > 0)
    },
    created(slider) {
      setLoaded(true)
      setShowDots(slider.track.details.maxIdx > 0)
    },
  }
)
  return (
    <section id='courses' className="scroll-mt-28 lg:scroll-mt-37 mt-28 lg:mt-37 flex flex-col gap-8">
        <h2 className='text-center mb-8 sm:mb-16'>{t('sections.courses.h2')}</h2>

        <div ref={sliderRef} className="keen-slider">
          {cardsData.map((card: CourseCardData) => (<div key={card.id} className="keen-slider__slide">
                                        <CourseCard  card={card}/>
                                  </div>))}
        </div>

        

        {/*Navigation dots*/}
          {showDots && loaded && instanceRef.current && (
            <div className="dots">
              {[...Array(instanceRef.current.track.details.maxIdx + 1).keys()].map((idx) => {
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

  );
}