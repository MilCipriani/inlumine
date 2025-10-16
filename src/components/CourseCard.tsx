import type { CourseCardData } from "../data/CourseCardData"
import { useLanguage } from '../translation/index'
import { Link } from "react-router-dom"
import Calendar from '../assets/calendar.svg?react'

interface CourseCardProps {
  card: CourseCardData
}

export default function CourseCard({ card }:CourseCardProps) {

  const { t } = useLanguage()


  return (
    <Link to={`/courses/${card.id}`} className="flex flex-col justify-start items-start p-8 gap-8 rounded-3xl bg-white h-full hover:bg-[var(--hover-blue)]">
      <div className="w-full flex items-start justify-between gap-2">
        <img src={card.img} className="w-1/3 aspect-square rounded-full object-cover"></img>
        <div className="h-fit flex gap-2 justify-end items-center">
          <p>{t(card.date)}</p>
          <Calendar />
        </div>
        
      </div>
      
      <h3>{t(card.h3)}</h3>
      <p className="text-[var(--text-light)]">{t(card.p)}</p>
    </Link>
  );
}