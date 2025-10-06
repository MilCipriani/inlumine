import type { TranslationKey } from '../translation/translationTyping'

export interface CourseCardData {
  id: string;
  date: TranslationKey
  h3: TranslationKey;
  p: TranslationKey;
}

export const cardsData: CourseCardData[] = [
  {
    id: "1",
    date: "sections.courses.cards.card1.date",
    h3: "sections.courses.cards.card1.h3",
    p: "sections.courses.cards.card1.p",
  },
  {
    id: "2",
    date: "sections.courses.cards.card2.date",
    h3: "sections.courses.cards.card2.h3",
    p: "sections.courses.cards.card2.p",
  },
  {
    id: "3",
    date: "sections.courses.cards.card3.date",
    h3: "sections.courses.cards.card3.h3",
    p: "sections.courses.cards.card3.p",
  },  
];