import type { TranslationKey } from '../translation/translationTyping'

import soul from '../assets/soulCoach.jpg'
import essenza from '../assets/luminosaEssenza.jpg'
import vita from '../assets/luminosaVita.jpg'
import meta from '../assets/metamorfica.jpg'
import albero from '../assets/albero.jpg'
import riflex from '../assets/riflessologiaPlantareOrganica.jpg'
import costellaz from '../assets/costellazioni.jpg'

export interface ServiceCardData {
  id: string
  h1: TranslationKey
  img: string
  subtitle: TranslationKey
  description: TranslationKey
  info: TranslationKey
  teachers?: boolean
}

export const cardsData: ServiceCardData[] = [
  {
    id: 'soul',
    h1: "sections.services.soul.h1",
    img: soul,
    subtitle: "sections.services.soul.subtitle",
    description: "sections.services.soul.description",
    info: "sections.services.soul.info"
  },
  {
    id: 'essenza',
    h1: "sections.services.essenza.h1",
    img: essenza,
    subtitle: "sections.services.essenza.subtitle",
    description: "sections.services.essenza.description",
    info: "sections.services.essenza.info",
    teachers: true,
  },
  {
    id: 'vita',
    h1: "sections.services.vita.h1",
    img: vita,
    subtitle: "sections.services.vita.subtitle",
    description: "sections.services.vita.description",
    info: "sections.services.vita.info"
  },
  {
    id: 'meta',
    h1: "sections.services.meta.h1",
    img: meta,
    subtitle: "sections.services.meta.subtitle",
    description: "sections.services.meta.description",
    info: "sections.services.meta.info"
  },
  {
    id: 'albero',
    h1: "sections.services.albero.h1",
    img: albero,
    subtitle: "sections.services.albero.subtitle",
    description: "sections.services.albero.description",
    info: "sections.services.albero.info"
  },
  {
    id: 'riflex',
    h1: "sections.services.riflex.h1",
    img: riflex,
    subtitle: "sections.services.riflex.subtitle",
    description: "sections.services.riflex.description",
    info: "sections.services.riflex.info"
  },
  {
    id: 'costellaz',
    h1: "sections.services.costellaz.h1",
    img: costellaz,
    subtitle: "sections.services.costellaz.subtitle",
    description: "sections.services.costellaz.description",
    info: "sections.services.costellaz.info"
  },
];