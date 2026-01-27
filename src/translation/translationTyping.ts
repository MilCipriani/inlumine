export interface TranslationStructure {
  nav: {
    about: string
    faq: string
    courses: string
    education: string
    transformation: string
    services: string
    calendar: string
    button: {
      contacts: string
    }
    aria: {
      logo: string
      hamburger: string
    }
  }
  sections: {
    hero: {
      h4: string
      explore: string
      paths: string
      alt: string
    },
    faq: {
      questions: {
        question1: string
        question2: string
        question3: string
        question4: string
        question5: string
      }
      answers: {
        answer1: string
        answer2: string
        answer3: string
        answer4: string
        answer5: string
      }
      contact: string
      path: string
    }
    apenb: {
      h2: string
      p: string
    }
    features: {
      h2: string
      feature1: string
      feature2: string
      feature3: string
      feature4: string
      alt: {
        alt1: string
        alt2:string
        alt3: string
      }
      aria: {
        carousel: string
        slide1: string
        slide2: string
        slide3: string
      }
    }
    founderQuote: {
      h2: string
      p: string
      alt: string
    }
    history: {
      h2: string
      2004: string
      2014: string
      2018: string
      2023: string
      alt: string
    }
    team: {
      h2: string
      dots: string
      cards: {
        alt: string
        websiteAria: string
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
        card10: {
          name: string
          details: string
        }
      }
    }
    courses: {
      h2:string
      moreInfo: string
      aria: {
        details: string
      }
      cards: {
        //Education
        riflex: {
          date: string
          duration: string
          h3: string
          p: string
          subtitle: string
          description: string
          alt: string
        }
        meta: {
          date: string
          duration: string
          h3: string
          p: string
          subtitle: string
          description: string
          alt: string
        }
        shiro: {
          date: string
          duration: string
          h3: string
          p: string
          subtitle: string
          description: string
          alt: string
        }
        oli33: {
          date: string
          duration: string
          h3: string
          p: string
          subtitle: string
          description: string
          alt: string
        }
        organi: {
          date: string
          duration: string
          price: string
          h3: string
          p: string
          subtitle: string
          description: string
          alt: string
        }
        cristallo: {
          date: string
          duration: string
          h3: string
          p: string
          subtitle: string
          description: string
          alt: string
        }
        aroma: {
          date: string
          duration: string
          h3: string
          p: string
          subtitle: string
          description: string
          alt: string
        }
        ennea: {
          date: string
          duration: string
          price: string
          h3: string
          p: string
          subtitle: string
          description: string
          alt: string
        }

        //Transformation
        alto: {
          date: string
          duration: string
          h3: string
          p: string
          subtitle: string
          description: string
          alt: string
        }
        albero: {
          date: string
          duration: string
          h3: string
          p: string
          subtitle: string
          description: string
          alt: string
        }
        //Seminars
        volare: {
          date: string
          duration: string
          h3: string
          p: string
          subtitle: string
          description: string
          alt: string
        }
        costellazioni: {
          date: string
          duration: string
          h3: string
          p: string
          subtitle: string
          description: string
          alt: string
        }
      }
    }
    seminars: {
      h2: string
    }
    education: {
      h1: string
    }
    transformation: {
      h1: string
    }
    services: {
      h2: string
      soul: {
        h1: string
        subtitle: string
        description: string
        info: string
        alt: string
      }
      essenza: {
        h1: string
        subtitle: string
        description: string
        info: string
        alt: string
      }
      vita: {
        h1: string
        subtitle: string
        description: string
        info: string
        alt: string
      }
      meta: {
        h1: string
        subtitle: string
        description: string
        info: string
        alt: string
      }
      albero: {
        h1: string
        subtitle: string
        description: string
        info: string
        alt: string
      }
      riflex: {
        h1: string
        subtitle: string
        description: string
        info: string
        alt: string
      }
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
        privacy: string
        privacyPolicy: string
        privacyFile: string
        privacyMessage: string
        submit: string
      }
      callToAction1: string
      callToAction2: string
      allRightsReserved: string
      disclaimer: string
    }
  }
}

export type SupportedLanguages = 'es' | 'it';

export type TranslationKey =
  | 'nav.about'
  | 'nav.faq'
  | 'nav.courses'
  | 'nav.education'
  | 'nav.transformation'
  | 'nav.services'
  | 'nav.calendar'
  | 'nav.button.contacts'
  | 'nav.aria.logo'
  | 'nav.aria.hamburger'

  | 'sections.hero.h4'
  | 'sections.hero.explore'
  | 'sections.hero.paths'
  | 'sections.hero.alt'

  | 'sections.faq.questions.question1'
  | 'sections.faq.questions.question2'
  | 'sections.faq.questions.question3'
  | 'sections.faq.questions.question4'
  | 'sections.faq.questions.question5'
  | 'sections.faq.answers.answer1'
  | 'sections.faq.answers.answer2'
  | 'sections.faq.answers.answer3'
  | 'sections.faq.answers.answer4'
  | 'sections.faq.answers.answer5'
  | 'sections.faq.contact'
  | 'sections.faq.path'

  | 'sections.apenb.h2'
  | 'sections.apenb.p'
  | 'sections.apenb.p2'

  | 'sections.features.h2'
  | 'sections.features.feature1'
  | 'sections.features.feature2'
  | 'sections.features.feature3'
  | 'sections.features.feature4'
  | 'sections.features.alt.alt1'
  | 'sections.features.alt.alt2'
  | 'sections.features.alt.alt3'
  | 'sections.features.aria.carousel'
  | 'sections.features.aria.slide1'
  | 'sections.features.aria.slide2'
  | 'sections.features.aria.slide3'

  | 'sections.founderQuote.h2'
  | 'sections.founderQuote.p'
  | 'sections.founderQuote.alt'

  | 'sections.history.h2'
  | 'sections.history.2004'
  | 'sections.history.2014'
  | 'sections.history.2018'
  | 'sections.history.2023'
  | 'sections.history.alt'

  | 'sections.team.h2'
  | 'sections.team.dots'
  | 'sections.team.cards.alt'
  | 'sections.team.cards.websiteAria'
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
  | 'sections.team.cards.card10.name'
  | 'sections.team.cards.card10.details'

  | 'sections.courses.moreInfo'
  | 'sections.courses.h2'
  | 'sections.courses.aria.details'
  //Educational
  | 'sections.courses.cards.riflex.date'
  | 'sections.courses.cards.riflex.duration' 
  | 'sections.courses.cards.riflex.h3'
  | 'sections.courses.cards.riflex.p'
  | 'sections.courses.cards.riflex.subtitle'
  | 'sections.courses.cards.riflex.description'
  | 'sections.courses.cards.riflex.alt'

  | 'sections.courses.cards.meta.date'
  | 'sections.courses.cards.meta.duration' 
  | 'sections.courses.cards.meta.h3'
  | 'sections.courses.cards.meta.p'
  | 'sections.courses.cards.meta.subtitle'
  | 'sections.courses.cards.meta.description'
  | 'sections.courses.cards.meta.alt'

  | 'sections.courses.cards.shiro.date'
  | 'sections.courses.cards.shiro.duration' 
  | 'sections.courses.cards.shiro.h3'
  | 'sections.courses.cards.shiro.p'
  | 'sections.courses.cards.shiro.subtitle'
  | 'sections.courses.cards.shiro.description'
  | 'sections.courses.cards.shiro.alt'

  | 'sections.courses.cards.oli33.date'
  | 'sections.courses.cards.oli33.duration'
  | 'sections.courses.cards.oli33.h3'
  | 'sections.courses.cards.oli33.p'
  | 'sections.courses.cards.oli33.subtitle'
  | 'sections.courses.cards.oli33.description'
  | 'sections.courses.cards.oli33.alt'

  | 'sections.courses.cards.organi.date'
  | 'sections.courses.cards.organi.duration'
  | 'sections.courses.cards.organi.price'
  | 'sections.courses.cards.organi.h3'
  | 'sections.courses.cards.organi.p'
  | 'sections.courses.cards.organi.subtitle'
  | 'sections.courses.cards.organi.description'
  | 'sections.courses.cards.organi.alt'

  | 'sections.courses.cards.cristallo.date'
  | 'sections.courses.cards.cristallo.duration'
  | 'sections.courses.cards.cristallo.h3'
  | 'sections.courses.cards.cristallo.p'
  | 'sections.courses.cards.cristallo.subtitle'
  | 'sections.courses.cards.cristallo.description'
  | 'sections.courses.cards.cristallo.alt'

  | 'sections.courses.cards.aroma.date'
  | 'sections.courses.cards.aroma.duration'
  | 'sections.courses.cards.aroma.h3'
  | 'sections.courses.cards.aroma.p'
  | 'sections.courses.cards.aroma.subtitle'
  | 'sections.courses.cards.aroma.description'
  | 'sections.courses.cards.aroma.alt'

  | 'sections.courses.cards.ennea.date'
  | 'sections.courses.cards.ennea.duration'
  | 'sections.courses.cards.ennea.price'
  | 'sections.courses.cards.ennea.h3'
  | 'sections.courses.cards.ennea.p'
  | 'sections.courses.cards.ennea.subtitle'
  | 'sections.courses.cards.ennea.description'
  | 'sections.courses.cards.ennea.alt'
  //Transformation
  | 'sections.courses.cards.alto.date'
  | 'sections.courses.cards.alto.duration'
  | 'sections.courses.cards.alto.h3'
  | 'sections.courses.cards.alto.p'
  | 'sections.courses.cards.alto.subtitle'
  | 'sections.courses.cards.alto.description'
  | 'sections.courses.cards.alto.alt'

  | 'sections.courses.cards.albero.date'
  | 'sections.courses.cards.albero.duration'
  | 'sections.courses.cards.albero.h3'
  | 'sections.courses.cards.albero.p'
  | 'sections.courses.cards.albero.subtitle'
  | 'sections.courses.cards.albero.description'
  | 'sections.courses.cards.albero.alt'
  //Seminars
  | 'sections.seminars.h2'
  | 'sections.courses.cards.volare.date'
  | 'sections.courses.cards.volare.duration'
  | 'sections.courses.cards.volare.h3'
  | 'sections.courses.cards.volare.p'
  | 'sections.courses.cards.volare.subtitle'
  | 'sections.courses.cards.volare.description'
  | 'sections.courses.cards.volare.alt'

  | 'sections.courses.cards.costellazioni.date'
  | 'sections.courses.cards.costellazioni.duration'
  | 'sections.courses.cards.costellazioni.h3'
  | 'sections.courses.cards.costellazioni.p'
  | 'sections.courses.cards.costellazioni.subtitle'
  | 'sections.courses.cards.costellazioni.description'
  | 'sections.courses.cards.costellazioni.alt'

  | 'sections.education.h1'
  | 'sections.transformation.h1'

  | 'sections.services.h2'
  | 'sections.services.soul.h1'
  | 'sections.services.soul.subtitle'
  | 'sections.services.soul.description'
  | 'sections.services.soul.info'
  | 'sections.services.soul.alt'
  | 'sections.services.essenza.h1'
  | 'sections.services.essenza.subtitle'
  | 'sections.services.essenza.description'
  | 'sections.services.essenza.info'
  | 'sections.services.essenza.alt'
  | 'sections.services.vita.h1'
  | 'sections.services.vita.subtitle'
  | 'sections.services.vita.description'
  | 'sections.services.vita.info'
  | 'sections.services.vita.alt'
  | 'sections.services.meta.h1'
  | 'sections.services.meta.subtitle'
  | 'sections.services.meta.description'
  | 'sections.services.meta.info'
  | 'sections.services.meta.alt'
  | 'sections.services.albero.h1'
  | 'sections.services.albero.subtitle'
  | 'sections.services.albero.description'
  | 'sections.services.albero.info'
  | 'sections.services.albero.alt'
  | 'sections.services.riflex.h1'
  | 'sections.services.riflex.subtitle'
  | 'sections.services.riflex.description'
  | 'sections.services.riflex.info'
  | 'sections.services.riflex.alt'

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
  | 'sections.contacts.form.privacy'
  | 'sections.contacts.form.privacyPolicy'
  | 'sections.contacts.form.privacyFile'
  | 'sections.contacts.form.privacyMessage'
  | 'sections.contacts.form.submit'
  | 'sections.contacts.callToAction1'
  | 'sections.contacts.callToAction2'
  | 'sections.contacts.allRightsReserved'
  | 'sections.contacts.disclaimer'