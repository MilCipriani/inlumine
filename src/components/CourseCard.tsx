import type { CourseCardData } from "../data/CourseCardData"
import { useLanguage } from '../translation/index'
import Calendar from '../assets/calendar.svg?react'

interface CourseCardProps {
  card: CourseCardData
}

export default function CourseCard({ card }:CourseCardProps) {

  const { t } = useLanguage()


  return (
    <div className="flex flex-col justify-start items-start p-8 gap-8 rounded-3xl bg-white h-full">
      <div className="w-full flex items-center justify-end gap-2">
        <p>{t(card.date)}</p>
        <Calendar />
      </div>
        <h3>{t(card.h3)}</h3>
        <p className="text-[var(--text-light)]">{t(card.p)}</p>
        <a className="mt-auto text-[var(--text-highlight)] cursor-pointer">{t('sections.courses.moreInfo')}</a>

    </div>
  );
}