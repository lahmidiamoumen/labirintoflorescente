
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

export interface AiFeature {
  title: string;
  subtitle: string;
  dropzone: {
    drag: string;
    or: string;
    browse: string;
    support: string;
  };
  processing: {
    title: string;
    step1: string;
    step2: string;
    step3: string;
  };
  result: {
    before: string;
    after: string;
    regenerate: string;
    disclaimer: string;
  };
  error: {
    title: string;
    desc: string;
  };
}

export interface TranslationContent {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    gallery: string;
    contact: string;
    tryAi: string;
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
    hazardTitle: string;
    hazardDescription: string;
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
  gallery: {
    title: string;
    subtitle: string;
    label: string;
    viewReport: string;
    stats: {
      completed: string;
      integrity: string;
      incidents: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    commercialLabel: string;
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
    unitsTitle: string;
    contactTitle: string;
    rights: string;
    privacy: string;
    terms: string;
    cookies: string;
    tagline: string;
    brandSubtitle: string;
  };
  legal: {
    privacy: LegalPageContent;
    terms: LegalPageContent;
    cookies: LegalPageContent;
  };
  cookieConsent: {
    message: string;
    accept: string;
    decline: string;
    privacyLink: string;
  };
  aiFeature: AiFeature;
}
