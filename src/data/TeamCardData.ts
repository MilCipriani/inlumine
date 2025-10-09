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
  id: string;
  img: string;
  h3: TranslationKey;
  p: TranslationKey;
}

export const cardsData: TeamCardData[] = [
  {
    id: "0",
    img: monicagiglio,
    h3: "sections.team.cards.card0.name",
    p: "sections.team.cards.card0.details",
  },
  {
    id: "1",
    img: alessiafignon,
    h3: "sections.team.cards.card1.name",
    p: "sections.team.cards.card1.details",
  },
  {
    id: "2",
    img: monicagreco,
    h3: "sections.team.cards.card2.name",
    p: "sections.team.cards.card2.details",
  },
  {
    id: "3",
    img: katyawulhfard,
    h3: "sections.team.cards.card3.name",
    p: "sections.team.cards.card3.details",
  },
  {
    id: "4",
    img: gabriellalucci,
    h3: "sections.team.cards.card4.name",
    p: "sections.team.cards.card4.details",
  },
  {
    id: "5",
    img: gloriadamaschi,
    h3: "sections.team.cards.card5.name",
    p: "sections.team.cards.card5.details",
  },
  {
    id: "6",
    img: ileniacasano,
    h3: "sections.team.cards.card6.name",
    p: "sections.team.cards.card6.details",
  },
  {
    id: "7",
    img: priscazocca,
    h3: "sections.team.cards.card7.name",
    p: "sections.team.cards.card7.details",
  },
  {
    id: "8",
    img: danielebianchini,
    h3: "sections.team.cards.card8.name",
    p: "sections.team.cards.card8.details",
  },
    {
    id: "9",
    img: mauriziocusani,
    h3: "sections.team.cards.card9.name",
    p: "sections.team.cards.card9.details",
  },
];