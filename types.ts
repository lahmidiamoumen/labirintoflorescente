export enum Language {
  EN = 'EN',
  FR = 'FR',
  PT = 'PT'
}

export interface ServiceContent {
  title: string;
  description: string;
}

export interface LegalSection {
  heading: string;
  content: string;
}

export interface LegalPageContent {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}

export interface TranslationContent {
  nav: {
    home: string;
    about: string;
    services: string;
    contact: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
    learnMore: string;
  };
  about: {
    title: string;
    companyName: string;
    description: string;
    specialization: string;
  };
  services: {
    title: string;
    items: {
      containment: ServiceContent;
      indoorOutdoor: ServiceContent;
      roofing: ServiceContent;
      decontamination: ServiceContent;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      service: string;
      servicePlaceholder: string;
      message: string;
      submit: string;
    };
    address: string;
  };
  footer: {
    rights: string;
    privacy: string;
    terms: string;
    cookies: string;
  };
  legal: {
    privacy: LegalPageContent;
    terms: LegalPageContent;
    cookies: LegalPageContent;
  };
}