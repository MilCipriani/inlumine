import { Link } from "react-router-dom"
import type { TeamCardData } from "../data/TeamCardData"
import { useLanguage } from '../translation/index'

interface TeamCardProps {
  card: TeamCardData
}

export default function TeamCard({ card }:TeamCardProps) {
  const { t } = useLanguage()
  const route = card.website ? card.website : `/team/${card.id}`

  return (
    <Link to={route} target={card.website ? "_blank" : undefined} rel={card.website ? "noopener noreferrer" : undefined} className="flex flex-col bg-white rounded-3xl h-full">
      <div className="bg-cover bg-no-repeat rounded-3xl aspect-square" style={{ backgroundImage: `url(${card.img})` }}></div>
      <div className="flex flex-col p-4 gap-4">
        <h3>{t(card.h3)}</h3>
        <p className="text-[var(--text-light)]">{t(card.p)}</p>
      </div>
    </Link>
  );
}