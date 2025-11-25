import type { TeamCardData } from "../data/TeamCardData"
import { useLanguage } from '../translation/index'
import Arrow from '../assets/arrow.svg?react'

interface TeamCardProps {
  card: TeamCardData
}

export default function TeamCard({ card }:TeamCardProps) {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col bg-white rounded-3xl h-full">
      <div className="bg-cover bg-no-repeat rounded-3xl aspect-square" role="img" aria-label={`${t('sections.team.cards.alt')}${t(card.h3)}`} style={{ backgroundImage: `url(${card.img})` }}></div>
      <div className="flex flex-col p-4 gap-4 h-full">
        <h3>{t(card.h3)}</h3>
        <p className="text-[var(--text-light)]">{t(card.p)}</p>
        {card.website && (
          <a href={card.website} aria-label={t('sections.team.cards.websiteAria')} className="bg-[var(--feather-blue)] rounded-2xl w-fit ml-auto mt-auto hover:bg-[var(--blue-highlight)]" target="_blank" rel="noopener noreferrer"><Arrow className="w-12 h-12 text-white"/></a>
        )}
      </div>
    </div>
  );
}