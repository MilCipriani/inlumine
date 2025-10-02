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
  founderQuote: {
    h2: string
    p: string
  }
  history: {
    h2: string
    2004: string
    2014: string
    2018: string
    2023: string
  }
  team: {
    h2: string
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

  | 'sections.founderQuote.h2'
  | 'sections.founderQuote.p'

  | 'sections.history.h2'
  | 'sections.history.2004'
  | 'sections.history.2014'
  | 'sections.history.2018'
  | 'sections.history.2023'

  | 'sections.team.h2'