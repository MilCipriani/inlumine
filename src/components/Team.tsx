import { useLanguage } from '../translation/index.ts'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


export default function Team() {
  const { t } = useLanguage()
  const [ref] = useKeenSlider<HTMLDivElement>({
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
  }
)
  return (
    <section className="mt-16 lg:mt-24 flex flex-col gap-8">
        <h2 className='text-center'>{t('sections.team.h2')}</h2>

        <div ref={ref} className="keen-slider">
          <div className="keen-slider__slide numberSlide1">1</div>
          <div className="keen-slider__slide numberSlide2">2</div>
          <div className="keen-slider__slide numberSlide3">3</div>
          <div className="keen-slider__slide numberSlide4">4</div>
          <div className="keen-slider__slide numberSlide5">5</div>
          <div className="keen-slider__slide numberSlide6">6</div>
        </div>
    </section>

  );
}