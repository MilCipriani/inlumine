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
    },
    created() {
      setLoaded(true)
    },
  }
)
  return (
    <section className="mt-16 lg:mt-24 flex flex-col gap-8">
        <h2 className='text-center'>{t('sections.courses.h2')}</h2>

        <div ref={sliderRef} className="keen-slider">
          {cardsData.map((card: CourseCardData) => (<div key={card.id} className="keen-slider__slide">
                                        <CourseCard  card={card}/>
                                  </div>))}
        </div>

        

        {/*Navigation dots*/}
          {!slideCount && loaded && instanceRef.current && (
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

  );
}