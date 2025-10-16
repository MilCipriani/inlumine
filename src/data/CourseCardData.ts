import type { TranslationKey } from '../translation/translationTyping'
import riflex from '../assets/riflessologiaPlantareOrganica.jpg'
import meta from '../assets/metamorfica.jpg'
import vo from '../assets/luminosaVita.jpg'

export interface CourseCardData {
  id: string
  date: TranslationKey
  duration: TranslationKey
  h3: TranslationKey
  p: TranslationKey
  img: string
  subtitle: TranslationKey
  description: TranslationKey
}

export const cardsData: CourseCardData[] = [
  {
    //Riflex
    id: "1",
    date: "sections.courses.cards.card1.date",
    duration: "sections.courses.cards.card1.duration",
    h3: "sections.courses.cards.card1.h3",
    p: "sections.courses.cards.card1.p",
    img: riflex,
    subtitle: "sections.courses.cards.card1.subtitle",
    description: "sections.courses.cards.card1.description"
  },
  {
    //Metamorfica
    id: "2",
    date: "sections.courses.cards.card2.date",
    duration: "sections.courses.cards.card2.duration",
    h3: "sections.courses.cards.card2.h3",
    p: "sections.courses.cards.card2.p",
    img: meta,
    subtitle: "sections.courses.cards.card2.subtitle",
    description: "sections.courses.cards.card2.description"
  },
  {
    //Volare Oltre
    id: "3",
    date: "sections.courses.cards.card3.date",
    duration: "sections.courses.cards.card3.duration",
    h3: "sections.courses.cards.card3.h3",
    p: "sections.courses.cards.card3.p",
    img: vo,
    subtitle: "sections.courses.cards.card3.subtitle",
    description: "sections.courses.cards.card3.description"
  },  
];