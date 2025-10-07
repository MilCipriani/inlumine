import { useLanguage } from '../translation/index.ts'
import { useKeenSlider } from "keen-slider/react"
import { useState, useEffect } from 'react'
import type { KeenSliderPlugin } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import bookImg from '../assets/book.webp'
import seagullImg from '../assets/seagull.webp'
import meditationImg from '../assets/meditation.webp'

const carousel: KeenSliderPlugin = (slider) => {
  const z = 150 //How far cards are from the center of rotation
  function rotate() {
    const deg = 360 * slider.track.details.progress
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
    })
    rotate()
  })
  slider.on("detailsChanged", rotate)
}

//Hook to check if screen is <768px (md tailwind breakpoint)
function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    
    //Set initial value
    setIsMobile(mediaQuery.matches)
    
    //Listen for changes
    const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return isMobile
}


export default function Features() {
  const { t } = useLanguage()
  const isMobile = useIsMobile()
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
  {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
  },
  [carousel]
  )
  return (
    <section className="w-full flex flex-col items-center justify-center gap-8 mt-28 lg:mt-37">
      <h2 className='whitespace-pre-line text-center'>{t('sections.features.h2')}</h2>

      {isMobile && (
        <div className="features-wrapper">
          <div className="features-scene">
            <div className="carousel keen-slider" ref={sliderRef}>
              <div className="carousel__cell number-slide1"><p className='text-center p-4 '>{t('sections.features.feature1')}</p></div>
              <div className="carousel__cell number-slide2"><p className='text-center p-4 '>{t('sections.features.feature2')}</p></div>
              <div className="carousel__cell number-slide3"><p className='text-center p-4 '>{t('sections.features.feature3')}</p></div>
            </div>
          </div>
        </div>
      )}

      {!isMobile && (
        <div className="w-full flex items-center justify-between">
          <figure className="relative w-[32%] aspect-[4/3] rounded-3xl">
            <img src={bookImg} className='w-full h-full object-cover rounded-3xl'/>
            <figcaption className="absolute bottom-0 left-0 w-full h-full flex items-end justify-center text-center text-xl lg:text-2xl text-[var(--white)] bg-[linear-gradient(to_top,_rgba(0,0,0,0.7)_15%,_rgba(0,0,0,0)_60%)] p-4 rounded-3xl">{t('sections.features.feature1')}</figcaption>
          </figure>

          <figure className="relative w-[32%] aspect-[4/3] rounded-3xl">
            <img src={seagullImg} className='w-full h-full object-cover rounded-3xl'/>
            <figcaption className="absolute bottom-0 left-0 w-full h-full flex items-end justify-center text-center text-xl lg:text-2xl text-[var(--white)] bg-[linear-gradient(to_top,_rgba(0,0,0,0.7)_15%,_rgba(0,0,0,0)_60%)] p-4 rounded-3xl">{t('sections.features.feature2')}</figcaption>
          </figure>

          <figure className="relative w-[32%] aspect-[4/3] rounded-3xl">
            <img src={meditationImg} className='w-full h-full object-cover rounded-3xl'/>
            <figcaption className="absolute bottom-0 left-0 w-full h-full flex items-end justify-center text-center text-xl lg:text-2xl text-[var(--white)] bg-[linear-gradient(to_top,_rgba(0,0,0,0.7)_15%,_rgba(0,0,0,0)_60%)] p-4 rounded-3xl">{t('sections.features.feature3')}</figcaption>
          </figure>

          
        </div>
      )}
      

    </section>

  );
}