import type { AdCardData } from "../data/AdCardData"
import { useLanguage } from '../translation/index'
import Calendar from '../assets/calendar.svg?react'
import type { TranslationKey } from "../translation/translationTyping"

interface AdCardProps {
  card: AdCardData
}

export default function AdCard({ card }:AdCardProps) {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col justify-start bg-white rounded-3xl h-full">
      <img src={card.banner} className="h-[40%] rounded-3xl object-cover"></img>
      <div className="flex flex-col gap-4 p-4 h-full">
        <h2>{t(card.h2)}</h2>
        <p>{t(card.p)}</p>
        <div className="flex items-center justify-between mt-auto gap-2">
          <span className="flex items-center justify-start gap-2 w-[50%]"><Calendar />{t(card.date as TranslationKey)}</span>
          <div className="flex items-center justify-end gap-2 w-[50%]">
            {card.img.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`Profile ${index}`}
                className="aspect-square rounded-full object-cover flex-1 min-w-0 max-w-24 max-h-24"
              />
            ))}
          </div>
        </div>
      </div>
      
      
    </div>
  );
}