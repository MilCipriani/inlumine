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
    cards: {
      card0: {
        name: string
        details: string
      }
      card1: {
        name: string
        details: string
      }
      card2: {
        name: string
        details: string
      }
      card3: {
        name: string
        details: string
      }
      card4: {
        name: string
        details: string
      }
      card5: {
        name: string
        details: string
      }
      card6: {
        name: string
        details: string
      }
      card7: {
        name: string
        details: string
      }
      card8: {
        name: string
        details: string
      }
    }
  }
  courses: {
    h2:string
    moreInfo: string
    cards: {
      card1: {
        date: string
        h3: string
        p: string
      }
      card2: {
        date: string
        h3: string
        p: string
      }
      card3: {
        date: string
        h3: string
        p: string
      }
    }
  }
  services: {
    h2: string
    soul: string
    essenza: string
    vita: string
    metamorfica: string
    albero: string
    riflex: string
  }
  ad: {
    h2: string
  }
  contacts: {
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
  | 'sections.team.cards.card0.name'
  | 'sections.team.cards.card0.details' 
  | 'sections.team.cards.card1.name'
  | 'sections.team.cards.card1.details'
  | 'sections.team.cards.card2.name'
  | 'sections.team.cards.card2.details'
  | 'sections.team.cards.card3.name'
  | 'sections.team.cards.card3.details'
  | 'sections.team.cards.card4.name'
  | 'sections.team.cards.card4.details'
  | 'sections.team.cards.card5.name'
  | 'sections.team.cards.card5.details'
  | 'sections.team.cards.card6.name'
  | 'sections.team.cards.card6.details'
  | 'sections.team.cards.card7.name'
  | 'sections.team.cards.card7.details'
  | 'sections.team.cards.card8.name'
  | 'sections.team.cards.card8.details'


  | 'sections.courses.moreInfo'
  | 'sections.courses.h2'
  | 'sections.courses.cards.card1.date' 
  | 'sections.courses.cards.card1.h3'
  | 'sections.courses.cards.card1.p'
  | 'sections.courses.cards.card2.date' 
  | 'sections.courses.cards.card2.h3'
  | 'sections.courses.cards.card2.p'
  | 'sections.courses.cards.card3.date' 
  | 'sections.courses.cards.card3.h3'
  | 'sections.courses.cards.card3.p'

  | 'sections.services.h2'
  | 'sections.services.soul'
  | 'sections.services.essenza'
  | 'sections.services.vita'
  | 'sections.services.metamorfica'
  | 'sections.services.albero'
  | 'sections.services.riflex'

  | 'sections.ad.h2'

  | 'sections.contacts.h2'
