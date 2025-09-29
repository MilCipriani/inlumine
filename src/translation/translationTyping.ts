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
    about: string
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

  | 'sections.about'