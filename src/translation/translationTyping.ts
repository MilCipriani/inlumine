export interface TranslationStructure {
  nav: {
    about: string
    history: string
    team: string
    courses: string
    services: string
    button: {
      contacts: string
    }
  }
  sections: {
    hero: {
      h1: string
      h3: string
    },
    features: {
      h2: string
      feature1: string
      feature2: string
      feature3: string
    }
  }
}

export type SupportedLanguages = 'es' | 'it';

export type TranslationKey =
  | 'nav.about'
  | 'nav.history'
  | 'nav.team'
  | 'nav.courses'
  | 'nav.services'
  | 'nav.button.contacts'

  | 'sections.hero.h1'
  | 'sections.hero.h3'
  | 'sections.features.h2'
  | 'sections.features.feature1'
  | 'sections.features.feature2'
  | 'sections.features.feature3'