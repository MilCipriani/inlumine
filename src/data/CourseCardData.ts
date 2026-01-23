import type { TranslationKey } from '../translation/translationTyping'
import riflex from '../assets/riflessologiaPlantareOrganica.jpg'
import meta from '../assets/metamorfica.jpg'
import shiro from '../assets/Corsi/shiro.webp'
import oli from '../assets/Corsi/oli.png'
import organi from '../assets/Corsi/organi.jpg'
//import cristallo from '../assets/Corsi/cristallo.jpg'
import aroma from '../assets/Corsi/aroma.jpg'
import ennea from '../assets/Corsi/ennea.jpg'

import alto from '../assets/Corsi/alto.jpeg'
//import albero from '../assets/Corsi/albero.jpg'

import vo from '../assets/volareOltre.jpg'


export interface CourseCardData {
  id: string
  type: 'edu' | 'transf' | 'sem'
  date: TranslationKey
  price: string
  duration: TranslationKey
  h3: TranslationKey
  p: TranslationKey
  img: string
  subtitle: TranslationKey
  description: TranslationKey
}

export const cardsData: CourseCardData[] = [
  {
    //EDUCATIONAL COURSES ------------------------------------------------------

    //Riflex
    id: "RiflessologiaPlantare",
    type: 'edu',
    date: "sections.courses.cards.riflex.date",
    price: "€ 600",
    duration: "sections.courses.cards.riflex.duration",
    h3: "sections.courses.cards.riflex.h3",
    p: "sections.courses.cards.riflex.p",
    img: riflex,
    subtitle: "sections.courses.cards.riflex.subtitle",
    description: "sections.courses.cards.riflex.description"
  },
  {
    //Metamorfica
    id: "TecnicaMetamorfica",
    type: 'edu',
    date: "sections.courses.cards.meta.date",
    price: "€ 300",
    duration: "sections.courses.cards.meta.duration",
    h3: "sections.courses.cards.meta.h3",
    p: "sections.courses.cards.meta.p",
    img: meta,
    subtitle: "sections.courses.cards.meta.subtitle",
    description: "sections.courses.cards.meta.description"
  },
  {
    //Shiro Abhyangam
    id: "ShiroAbhyangam",
    type: 'edu',
    date: "sections.courses.cards.shiro.date",
    price: "€ 300",
    duration: "sections.courses.cards.shiro.duration",
    h3: "sections.courses.cards.shiro.h3",
    p: "sections.courses.cards.shiro.p",
    img: shiro,
    subtitle: "sections.courses.cards.shiro.subtitle",
    description: "sections.courses.cards.shiro.description"
  },
  {
    //33 Oli essenziali
    id: "33oliEssenziali",
    type: 'edu',
    date: "sections.courses.cards.oli33.date",
    price: "€ 450",
    duration: "sections.courses.cards.oli33.duration",
    h3: "sections.courses.cards.oli33.h3",
    p: "sections.courses.cards.oli33.p",
    img: oli,
    subtitle: "sections.courses.cards.oli33.subtitle",
    description: "sections.courses.cards.oli33.description"
  },
  {
    //Gli Organi e le malattie Psicosomatiche
    id: "OrganiPsicosomatica",
    type: 'edu',
    date: "sections.courses.cards.organi.date",
    price: "sections.courses.cards.organi.price",
    duration: "sections.courses.cards.organi.duration",
    h3: "sections.courses.cards.organi.h3",
    p: "sections.courses.cards.organi.p",
    img: organi,
    subtitle: "sections.courses.cards.organi.subtitle",
    description: "sections.courses.cards.organi.description"
  },
  /*{
    //Cristalloterapia
    id: "Cristalloterapia",
    type: 'edu',
    date: "sections.courses.cards.cristallo.date",
    price: "€ --",
    duration: "sections.courses.cards.cristallo.duration",
    h3: "sections.courses.cards.cristallo.h3",
    p: "sections.courses.cards.cristallo.p",
    img: cristallo,
    subtitle: "sections.courses.cards.cristallo.subtitle",
    description: "sections.courses.cards.cristallo.description"
  },*/
  {
    //Aromaterapia
    id: "Aromaterapia",
    type: 'edu',
    date: "sections.courses.cards.aroma.date",
    price: "€ 280",
    duration: "sections.courses.cards.aroma.duration",
    h3: "sections.courses.cards.aroma.h3",
    p: "sections.courses.cards.aroma.p",
    img: aroma,
    subtitle: "sections.courses.cards.aroma.subtitle",
    description: "sections.courses.cards.aroma.description"
  },
  {
    //Enneagramma
    id: "Enneagramma",
    type: 'edu',
    date: "sections.courses.cards.ennea.date",
    price: "sections.courses.cards.ennea.price",
    duration: "sections.courses.cards.ennea.duration",
    h3: "sections.courses.cards.ennea.h3",
    p: "sections.courses.cards.ennea.p",
    img: ennea,
    subtitle: "sections.courses.cards.ennea.subtitle",
    description: "sections.courses.cards.ennea.description"
  },
  


  //PERSONAL TRANSFORMATION COURSES ----------------------------------------------

  {
    //Alto Contatto
    id: "AltoContatto",
    type: 'transf',
    date: "sections.courses.cards.alto.date",
    price: "€ 450",
    duration: "sections.courses.cards.alto.duration",
    h3: "sections.courses.cards.alto.h3",
    p: "sections.courses.cards.alto.p",
    img: alto,
    subtitle: "sections.courses.cards.alto.subtitle",
    description: "sections.courses.cards.alto.description"
  }, 
  /*{
    //Decodifica Albero Genealogico
    id: "DecodificaAlberoGenealogico",
    type: 'transf',
    date: "sections.courses.cards.albero.date",
    price: "€ 480",
    duration: "sections.courses.cards.albero.duration",
    h3: "sections.courses.cards.albero.h3",
    p: "sections.courses.cards.albero.p",
    img: albero,
    subtitle: "sections.courses.cards.albero.subtitle",
    description: "sections.courses.cards.albero.description"
  },*/

  //SEMINARS -----------------------------------------------------------------------

  {
    //Volare Oltre
    id: "VolareOltre",
    type: 'sem',
    date: "sections.courses.cards.volare.date",
    price: "€ 480",
    duration: "sections.courses.cards.volare.duration",
    h3: "sections.courses.cards.volare.h3",
    p: "sections.courses.cards.volare.p",
    img: vo,
    subtitle: "sections.courses.cards.volare.subtitle",
    description: "sections.courses.cards.volare.description"
  },
  /*{
    //Costellazioni Familiari
    id: "CostellazioniFamiliari",
    type: 'sem',
    date: "sections.courses.cards.costellazioni.date",
    price: "€ 480",
    duration: "sections.courses.cards.costellazioni.duration",
    h3: "sections.courses.cards.costellazioni.h3",
    p: "sections.courses.cards.costellazioni.p",
    img: vo,
    subtitle: "sections.courses.cards.costellazioni.subtitle",
    description: "sections.courses.cards.costellazioni.description"
  },*/
];