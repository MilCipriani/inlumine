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
      card9: {
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
        duartion: string
        h3: string
        p: string
        subtitle: string
        description: string
      }
      card2: {
        date: string
        duartion: string
        h3: string
        p: string
        subtitle: string
        description: string
      }
      card3: {
        date: string
        duartion: string
        h3: string
        p: string
        subtitle: string
        description: string
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
    cards: {
      card1: {
        date: string
        h2: string
        p: string
      }
    }
  }
  contacts: {
    h2: string
    form: {
      title: string
      name: {
        inputName: string
        placeholder: string
        warning: string
      }
      surname: {
        inputName: string
        placeholder: string
        warning: string
      }
      mail: {
        inputName: string
        placeholder: string
        warning: string
      }
      phone: {
        inputName: string
        placeholder: string
      }
      message: {
        inputName: string
        placeholder: string
        warning: string
      }
      loading: string
      submitted: string
      failed: string
      submit: string
    }
    callToAction1: string
    callToAction2: string
    allRightsReserved: string
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
  | 'sections.team.cards.card9.name'
  | 'sections.team.cards.card9.details'

  | 'sections.courses.moreInfo'
  | 'sections.courses.h2'
  | 'sections.courses.cards.card1.date'
  | 'sections.courses.cards.card1.duration' 
  | 'sections.courses.cards.card1.h3'
  | 'sections.courses.cards.card1.p'
  | 'sections.courses.cards.card1.subtitle'
  | 'sections.courses.cards.card1.description'
  | 'sections.courses.cards.card2.date'
  | 'sections.courses.cards.card2.duration' 
  | 'sections.courses.cards.card2.h3'
  | 'sections.courses.cards.card2.p'
  | 'sections.courses.cards.card2.subtitle'
  | 'sections.courses.cards.card2.description'
  | 'sections.courses.cards.card3.date'
  | 'sections.courses.cards.card3.duration'
  | 'sections.courses.cards.card3.h3'
  | 'sections.courses.cards.card3.p'
  | 'sections.courses.cards.card3.subtitle'
  | 'sections.courses.cards.card3.description'

  | 'sections.services.h2'
  | 'sections.services.soul'
  | 'sections.services.essenza'
  | 'sections.services.vita'
  | 'sections.services.metamorfica'
  | 'sections.services.albero'
  | 'sections.services.riflex'

  | 'sections.ad.h2' 
  | 'sections.ad.cards.card1.h2'
  | 'sections.ad.cards.card1.p'
  | 'sections.ad.cards.card1.date'



  | 'sections.contacts.h2'
  | 'sections.contacts.form.title'
  | 'sections.contacts.form.name.inputName'
  | 'sections.contacts.form.name.placeholder'
  | 'sections.contacts.form.name.warning'
  | 'sections.contacts.form.surname.inputName'
  | 'sections.contacts.form.surname.placeholder'
  | 'sections.contacts.form.surname.warning'
  | 'sections.contacts.form.mail.inputName'
  | 'sections.contacts.form.mail.placeholder'
  | 'sections.contacts.form.mail.warning'
  | 'sections.contacts.form.phone.inputName'
  | 'sections.contacts.form.phone.placeholder'
  | 'sections.contacts.form.message.inputName'
  | 'sections.contacts.form.message.placeholder'
  | 'sections.contacts.form.message.warning'
  | 'sections.contacts.form.loading'
  | 'sections.contacts.form.submitted'
  | 'sections.contacts.form.failed'
  | 'sections.contacts.form.submit'
  | 'sections.contacts.callToAction1'
  | 'sections.contacts.callToAction2'
  | 'sections.contacts.allRightsReserved'