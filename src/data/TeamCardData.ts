import type { TranslationKey } from '../translation/translationTyping'
import monicagiglio from '../assets/team/MonicaGiglio.jpg'
import alessiafignon from '../assets/team/AlessiaFignon.jpg'
import monicagreco from '../assets/team/MonicaGreco.jpg'
import katyawulhfard from '../assets/team/KatyaWulhfard.jpg'
import gabriellalucci from '../assets/team/GabriellaLucci.jpg'
import gloriadamaschi from '../assets/team/GloriaDamaschi.jpg'
import ileniacasano from '../assets/team/IleniaCasano.jpg'
import priscazocca from '../assets/team/PriscaZocca.jpg'
import danielebianchini from '../assets/team/DanieleBianchini.jpeg'
import mauriziocusani from '../assets/team/MaurizioCusani.jpg'

export interface TeamCardData {
  id: string
  img: string
  h3: TranslationKey
  p: TranslationKey
  website?: string
}

export const cardsData: TeamCardData[] = [
  {
    id: "giglio",
    img: monicagiglio,
    h3: "sections.team.cards.card0.name",
    p: "sections.team.cards.card0.details",
    website: 'https://monicagiglio.es/'
  },
  {
    id: "fignon",
    img: alessiafignon,
    h3: "sections.team.cards.card1.name",
    p: "sections.team.cards.card1.details",
  },
  {
    id: "greco",
    img: monicagreco,
    h3: "sections.team.cards.card2.name",
    p: "sections.team.cards.card2.details",
  },
  {
    id: "wulhfard",
    img: katyawulhfard,
    h3: "sections.team.cards.card3.name",
    p: "sections.team.cards.card3.details",
  },
  {
    id: "lucci",
    img: gabriellalucci,
    h3: "sections.team.cards.card4.name",
    p: "sections.team.cards.card4.details",
  },
  {
    id: "damaschi",
    img: gloriadamaschi,
    h3: "sections.team.cards.card5.name",
    p: "sections.team.cards.card5.details",
  },
  {
    id: "casano",
    img: ileniacasano,
    h3: "sections.team.cards.card6.name",
    p: "sections.team.cards.card6.details",
  },
  {
    id: "zocca",
    img: priscazocca,
    h3: "sections.team.cards.card7.name",
    p: "sections.team.cards.card7.details",
  },
  {
    id: "bianchini",
    img: danielebianchini,
    h3: "sections.team.cards.card8.name",
    p: "sections.team.cards.card8.details",
  },
    {
    id: "cusani",
    img: mauriziocusani,
    h3: "sections.team.cards.card9.name",
    p: "sections.team.cards.card9.details",
  },
];