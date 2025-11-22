import { Language, TranslationContent } from './types';

export const TRANSLATIONS: Record<Language, TranslationContent> = {
  [Language.EN]: {
    nav: {
      home: "Home",
      about: "About",
      services: "Solutions",
      contact: "Contact",
    },
    hero: {
      headline: "Advanced Environmental Containment Solutions",
      subheadline: "Specialists in Thermo-Retractable Films and Industrial Safety Netting",
      cta: "Request a Quote",
      learnMore: "Learn More",
    },
    about: {
      title: "About Us",
      companyName: "LABIRINTOFLORESCENTE, UNIPESSOAL LDA",
      description: "We are a specialized construction firm focused on technical environments. Our expertise lies in securing construction sites and industrial zones through advanced containment technologies.",
      specialization: "Registered Activity: Specialized construction activities, decontamination, and similar operations.",
    },
    services: {
      title: "Technical Solutions",
      items: {
        containment: {
          title: "Heat-Shrink Containment",
          description: "Premium thermo-retractable films for environmental protection, creating dust-free, weather-resistant, and secure work zones."
        },
        indoorOutdoor: {
          title: "Indoor & Outdoor",
          description: "Versatile containment structures adaptable to both interior renovations and exterior façade works, ensuring total isolation."
        },
        roofing: {
          title: "Roofing & Safety Nets",
          description: "Under-roof containment solutions combined with certified personnel safety nets (filet antichute HOMME) for maximum worker safety."
        },
        decontamination: {
          title: "Decontamination",
          description: "Specialized protocols and setups for hazardous material removal and site decontamination."
        }
      }
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Ready to start your project? Our team of experts is here to provide safe and efficient containment solutions.",
      form: {
        name: "Your Name",
        email: "Your Email",
        service: "Service of Interest",
        servicePlaceholder: "Select a service...",
        message: "Project Details",
        submit: "Request Quote",
      },
      address: "Address",
    },
    footer: {
      rights: "All rights reserved.",
    }
  },
  [Language.FR]: {
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Solutions",
      contact: "Contact",
    },
    hero: {
      headline: "Solutions Avancées de Confinement Environnemental",
      subheadline: "Spécialistes du confinement thermo-rétractable et filets de sécurité",
      cta: "Demander un Devis",
      learnMore: "En Savoir Plus",
    },
    about: {
      title: "À Propos",
      companyName: "LABIRINTOFLORESCENTE, UNIPESSOAL LDA",
      description: "Entreprise spécialisée dans les environnements techniques du bâtiment. Notre expertise réside dans la sécurisation des chantiers via des technologies de confinement avancées.",
      specialization: "Objet Social : Autres activités spécialisées de construction diverses, n.e., Descontaminação et activités similaires.",
    },
    services: {
      title: "Nos Solutions Techniques",
      items: {
        containment: {
          title: "Confinement Thermo-Rétractable",
          description: "Films thermo-rétractables pour la protection de l'environnement, créant des zones de travail étanches et hors poussière."
        },
        indoorOutdoor: {
          title: "Intérieur & Extérieur",
          description: "Structures de confinement adaptables pour rénovations intérieures et travaux de façade extérieurs."
        },
        roofing: {
          title: "Sous-face de Toiture & Filets",
          description: "Confinement en sous-face de toiture combiné avec la pose de filets antichute HOMME pour la sécurité maximale."
        },
        decontamination: {
          title: "Décontamination",
          description: "Protocoles et installations spécialisés pour l'élimination de matériaux dangereux et décontamination de sites."
        }
      }
    },
    contact: {
      title: "Contactez-nous",
      subtitle: "Prêt à démarrer votre projet ? Notre équipe d'experts est là pour fournir des solutions de confinement sûres et efficaces.",
      form: {
        name: "Votre Nom",
        email: "Votre Email",
        service: "Service Intéressé",
        servicePlaceholder: "Sélectionnez un service...",
        message: "Détails du projet",
        submit: "Demander un Devis",
      },
      address: "Adresse",
    },
    footer: {
      rights: "Tous droits réservés.",
    }
  },
  [Language.PT]: {
    nav: {
      home: "Início",
      about: "Sobre",
      services: "Soluções",
      contact: "Contacto",
    },
    hero: {
      headline: "Soluções Avançadas de Confinamento Ambiental",
      subheadline: "Especialistas em filmes termorretráteis e redes de segurança industrial",
      cta: "Pedir Orçamento",
      learnMore: "Saber Mais",
    },
    about: {
      title: "Sobre Nós",
      companyName: "LABIRINTOFLORESCENTE, UNIPESSOAL LDA",
      description: "Somos uma empresa especializada em construção técnica. A nossa especialidade é proteger estaleiros e zonas industriais através de tecnologias de confinamento avançadas.",
      specialization: "Objeto Social: Outras actividades especializadas de construção diversas, n.e., Descontaminação e actividades similares.",
    },
    services: {
      title: "Soluções Técnicas",
      items: {
        containment: {
          title: "Confinamento Termorretrátil",
          description: "Filmes termorretráteis premium para proteção ambiental, criando zonas de trabalho livres de poeira e resistentes às intempéries."
        },
        indoorOutdoor: {
          title: "Interior e Exterior",
          description: "Estruturas de confinamento versáteis adaptáveis tanto a renovações interiores como a trabalhos de fachada exterior."
        },
        roofing: {
          title: "Sub-telhado e Redes de Segurança",
          description: "Confinamento em sub-face de cobertura combinado com instalação de rede antiqueda (HOMEM) para segurança máxima."
        },
        decontamination: {
          title: "Descontaminação",
          description: "Protocolos e instalações especializadas para remoção de materiais perigosos e descontaminação de locais."
        }
      }
    },
    contact: {
      title: "Contacte-nos",
      subtitle: "Pronto para iniciar o seu projeto? A nossa equipa de especialistas está aqui para fornecer soluções de confinamento seguras e eficientes.",
      form: {
        name: "O seu Nome",
        email: "O seu Email",
        service: "Serviço de Interesse",
        servicePlaceholder: "Selecione um serviço...",
        message: "Detalhes do Projeto",
        submit: "Pedir Orçamento",
      },
      address: "Morada",
    },
    footer: {
      rights: "Todos os direitos reservados.",
    }
  }
};