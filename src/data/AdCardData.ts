import type { TranslationKey } from '../translation/translationTyping'
//import monicagiglio from '../assets/team/MonicaGiglio.jpg'
//import monicagreco from '../assets/team/MonicaGreco.jpg'
//import priscazocca from '../assets/team/PriscaZocca.jpg'

//import banner from '../assets/book.webp'

export interface AdCardData {
  id: string;
  banner: string;
  date: string;
  img: string[];
  h2: TranslationKey;
  p: TranslationKey;
}

export const cardsData: AdCardData[] = [/*
  {
    id: "0",
    date: 'sections.ad.cards.card1.date',
    banner: banner,
    img: [priscazocca, monicagreco],
    h2: "sections.ad.cards.card1.h2",
    p: "sections.ad.cards.card1.p",
  },
  {
    id: "1",
    date: "sections.ad.cards.card1.date",
    banner: banner,
    img: [monicagiglio],
    h2: "sections.ad.cards.card1.h2",
    p: "sections.ad.cards.card1.p",
  },*/
];