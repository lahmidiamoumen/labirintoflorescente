
import { Language, TranslationContent } from './types';

export const TRANSLATIONS: Record<Language, TranslationContent> = {
  [Language.EN]: {
    meta: {
      title: "Safe Shield | Thermo-Retractable Containment & Safety Nets",
      description: "Specialists in thermo-retractable containment for protection, security, and workspace optimization. Safety nets and industrial shrinking solutions."
    },
    nav: {
      home: "Home",
      about: "Our Expertise",
      services: "Sectors",
      gallery: "Realizations",
      contact: "Contact",
      tryAi: "AI Simulator",
    },
    hero: {
      headline: "Thermo-Retractable Containment Solutions",
      subheadline: "We create custom, airtight, and resistant confined environments using heat-shrink films to protect, secure, and optimize your workspaces.",
      cta: "Get a Quote",
      learnMore: "Our Solutions",
    },
    about: {
      title: "Our Expertise in Thermo-Retractable Containment",
      companyName: "LABIRINTOFLORESCENTE, UNIPESSOAL LDA",
      description: "We are dedicated to offering thermo-retractable containment solutions that protect, secure, and optimize workspaces or storage areas. Using special films that shrink under the effect of heat, we create custom confined environments that are airtight and resistant, adapted to the specific needs of our clients.",
      specialization: "Activity: Specialized construction activities and industrial containment (Outras actividades especializadas de construção).",
      hazardTitle: "Hazard Control Division",
      hazardDescription: "Technical Scaffolding Confinement specifically engineered for Asbestos Mitigation (Amianto) and structural isolation.",
    },
    services: {
      title: "Technical Solutions",
      items: {
        containment: {
          title: "Under-Roof & Safety Nets",
          description: "Containment on the underside of roofs combined with the installation of man-safe fall protection nets."
        },
        indoorOutdoor: {
          title: "Civil Engineering & Industry",
          description: "Specialized containment for civil engineering structures (bridges, viaducts) and industrial sites (EDF power plants, petrochemicals)."
        },
        roofing: {
          title: "Structural & Over-Roofing",
          description: "Containment solutions for wooden structures and temporary over-roofing (sur-toiture) for weather protection."
        },
        decontamination: {
          title: "Agri-Food & Special Sectors",
          description: "Clean and hermetic containment solutions adapted for the agri-food industry and sensitive environments."
        }
      }
    },
    gallery: {
      title: "Project Realizations",
      subtitle: "Examples of our thermo-retractable films and safety net installations in various sectors.",
      label: "Our Portfolio",
      viewReport: "View Details",
      stats: {
        completed: "Projects Delivered",
        integrity: "Surface Covered",
        incidents: "Clients Satisfied"
      }
    },
    contact: {
      title: "Contact Us",
      subtitle: "Get in touch for a custom study of your containment or safety netting needs.",
      commercialLabel: "Sales Representative",
      form: {
        name: "Name",
        email: "Email",
        service: "Sector",
        servicePlaceholder: "Select a sector...",
        message: "Message",
        submit: "Send Message",
      },
      address: "Headquarters",
    },
    footer: {
      unitsTitle: "Our Services",
      contactTitle: "Contact Info",
      rights: "Safe Shield by LABIRINTOFLORESCENTE. Containment Specialists.",
      privacy: "Privacy",
      terms: "Terms",
      cookies: "Cookies",
      tagline: "Specialists in thermo-retractable containment and safety netting solutions for the construction and industrial sectors.",
      brandSubtitle: "TECHNICAL CONTAINMENT"
    },
    legal: {
      privacy: { title: "Privacy", lastUpdated: "2024", intro: "Data protection notice.", sections: [] },
      terms: { title: "Terms", lastUpdated: "2024", intro: "Service terms.", sections: [] },
      cookies: { title: "Cookies", lastUpdated: "2024", intro: "Cookie usage.", sections: [] }
    },
    cookieConsent: { message: "We use cookies to improve your experience.", accept: "Accept", decline: "Decline", privacyLink: "Privacy" },
    aiFeature: {
      title: "Virtual Wrap Simulator",
      subtitle: "Upload a photo to see a simulation of our white shrink-wrap on your structure.",
      dropzone: { drag: "Upload photo", or: "or", browse: "Browse Files", support: "JPG/PNG (Building/Scaffolding)" },
      processing: { title: "Processing...", step1: "Analyzing structure...", step2: "Applying shrink film...", step3: "Finalizing..." },
      result: { before: "Before", after: "Simulation", regenerate: "Try Again", disclaimer: "AI simulation for visualization purposes only." },
      error: { title: "Error", desc: "Could not process image. Please use a clear photo of a building or scaffold." }
    }
  },
  [Language.FR]: {
    meta: {
      title: "Safe Shield | Confinement Thermo-Rétractable & Filets",
      description: "Expertise en confinement thermo-rétractable pour protéger, sécuriser et optimiser des espaces. Filets antichute et solutions industrielles."
    },
    nav: {
      home: "Accueil",
      about: "Notre Expertise",
      services: "Secteurs",
      gallery: "Réalisations",
      contact: "Contact",
      tryAi: "Simulateur IA",
    },
    hero: {
      headline: "Solutions de Confinement Thermo-Rétractable",
      subheadline: "Nous créons des environnements confinés sur mesure, étanches et résistants, utilisant des films thermo-rétractables pour protéger et sécuriser vos espaces.",
      cta: "Demander un Devis",
      learnMore: "Nos Solutions",
    },
    about: {
      title: "Notre expertise en confinement thermo-rétractable",
      companyName: "LABIRINTOFLORESCENTE, UNIPESSOAL LDA",
      description: "Nous sommes dédiés à offrir des solutions de confinement thermo-rétractable qui protègent, sécurisent et optimisent des espaces de travail ou de stockage. Utilisant des films spéciaux qui rétrécissent sous l'effet de la chaleur, nous créons des environnements confinés sur mesure, étanches et résistants, adaptés aux besoins spécifiques de nos clients.",
      specialization: "Activité : Autres travaux de construction spécialisés et confinement industriel.",
      hazardTitle: "Division Contrôle des Risques",
      hazardDescription: "Confinement technique d'échafaudage spécialement conçu pour le désamiantage (Amiante) et l'isolation structurelle.",
    },
    services: {
      title: "Nos Solutions Techniques",
      items: {
        containment: {
          title: "Sous-face & Filets Antichute",
          description: "Confinement en sous-face de toiture combiné à la pose de filets antichute HOMME pour la sécurité."
        },
        indoorOutdoor: {
          title: "Ouvrages d'Arts & Industries",
          description: "Confinement spécialisé pour ouvrages d'arts (ponts) et sites industriels (centrales EDF, pétrochimie)."
        },
        roofing: {
          title: "Structures Bois & Sur-Toiture",
          description: "Protection de structures en bois et installation de sur-toitures temporaires thermo-rétractables."
        },
        decontamination: {
          title: "Agroalimentaire",
          description: "Solutions de confinement propres et étanches adaptées aux exigences de l'industrie agroalimentaire."
        }
      }
    },
    gallery: {
      title: "Nos Réalisations",
      subtitle: "Exemples de pose de films thermo-rétractables et filets de sécurité dans divers secteurs.",
      label: "Portfolio",
      viewReport: "Voir Détails",
      stats: {
        completed: "Projets Réalisés",
        integrity: "Surface Couverte",
        incidents: "Clients Satisfaits"
      }
    },
    contact: {
      title: "Contactez-nous",
      subtitle: "Contactez notre équipe pour une étude personnalisée de vos besoins en confinement.",
      commercialLabel: "Conseiller Commercial",
      form: {
        name: "Nom",
        email: "Email",
        service: "Secteur",
        servicePlaceholder: "Choisir un secteur...",
        message: "Message",
        submit: "Envoyer",
      },
      address: "Siège Social",
    },
    footer: {
      unitsTitle: "Nos Services",
      contactTitle: "Infos Contact",
      rights: "Safe Shield par LABIRINTOFLORESCENTE. Spécialistes du confinement.",
      privacy: "Vie privée",
      terms: "Conditions",
      cookies: "Cookies",
      tagline: "Spécialistes du confinement thermo-rétractable et des filets de sécurité pour la construction et l'industrie.",
      brandSubtitle: "CONFINEMENT TECHNIQUE"
    },
    legal: { privacy: { title: "Privacy", lastUpdated: "2024", intro: "", sections: [] }, terms: { title: "Terms", lastUpdated: "2024", intro: "", sections: [] }, cookies: { title: "Cookies", lastUpdated: "2024", intro: "", sections: [] } },
    cookieConsent: { message: "Nous utilisons des cookies pour améliorer votre expérience.", accept: "Accepter", decline: "Refuser", privacyLink: "Infos" },
    aiFeature: {
      title: "Simulateur Virtuel",
      subtitle: "Téléchargez une photo pour voir une simulation de notre film thermo-rétractable sur votre structure.",
      dropzone: { drag: "Déposez une photo", or: "ou", browse: "Parcourir", support: "JPG/PNG (Bâtiment/Échafaudage)" },
      processing: { title: "Traitement...", step1: "Analyse de la structure...", step2: "Application du film...", step3: "Finalisation..." },
      result: { before: "Avant", after: "Simulation", regenerate: "Réessayer", disclaimer: "Simulation IA à titre indicatif." },
      error: { title: "Erreur", desc: "Impossible de traiter l'image. Utilisez une photo claire." }
    }
  },
  [Language.PT]: {
    meta: {
      title: "Safe Shield | Confinamento Termorretrátil & Redes",
      description: "Especialistas em confinamento termorretrátil para proteger, segurar e otimizar espaços. Redes de segurança e soluções industriais."
    },
    nav: {
      home: "Início",
      about: "A Nossa Experiência",
      services: "Setores",
      gallery: "Realizações",
      contact: "Contacto",
      tryAi: "Simulador IA",
    },
    hero: {
      headline: "Soluções de Confinamento Termorretrátil",
      subheadline: "Criamos ambientes confinados à medida, estanques e resistentes, utilizando filmes termorretráteis para proteger e segurar os seus espaços.",
      cta: "Pedir Orçamento",
      learnMore: "Nossas Soluções",
    },
    about: {
      title: "A Nossa Especialização em Confinamento Termorretrátil",
      companyName: "LABIRINTOFLORESCENTE, UNIPESSOAL LDA",
      description: "Dedicamo-nos a oferecer soluções de confinamento termorretrátil que protegem, seguram e otimizam espaços de trabalho ou de armazenamento. Utilizando filmes especiais que encolhem sob o efeito do calor, criamos ambientes confinados à medida, estanques e resistentes, adaptados às necessidades específicas dos nossos clientes.",
      specialization: "Atividade: Outras atividades especializadas de construção e confinamento industrial.",
      hazardTitle: "Divisão de Controlo de Riscos",
      hazardDescription: "Confinamento técnico de andaimes especificamente projetado para a remoção de amianto (Amianto) e isolamento estrutural.",
    },
    services: {
      title: "Soluções Técnicas",
      items: {
        containment: {
          title: "Sub-telhado & Redes Anti-queda",
          description: "Confinamento em sub-cobertura combinado com a instalação de redes de segurança anti-queda (HOMME)."
        },
        indoorOutdoor: {
          title: "Obras de Arte & Indústrias",
          description: "Confinamento especializado para obras de arte (pontes) e instalações industriais (centrais EDF, petroquímica)."
        },
        roofing: {
          title: "Estruturas Madeira & Sobre-cobertura",
          description: "Proteção de estruturas de madeira e instalação de sobre-coberturas temporárias termorretráteis."
        },
        decontamination: {
          title: "Agroalimentar & Setores Especiais",
          description: "Soluções de confinamento limpas e estanques adaptadas às exigências da indústria agroalimentar."
        }
      }
    },
    gallery: {
      title: "Nossas Realizações",
      subtitle: "Exemples de aplicação de filmes termorretráteis e redes de segurança em vários setores.",
      label: "Portfólio",
      viewReport: "Ver Detalhes",
      stats: {
        completed: "Projetos Realizados",
        integrity: "Área Coberta",
        incidents: "Clientes Satisfeitos"
      }
    },
    contact: {
      title: "Contacte-nos",
      subtitle: "Entre em contacto para um estudo personalizado das suas necessidades de confinamento.",
      commercialLabel: "Consultor Comercial",
      form: {
        name: "Nome",
        email: "Email",
        service: "Setor",
        servicePlaceholder: "Selecione um setor...",
        message: "Mensagem",
        submit: "Enviar Mensagem",
      },
      address: "Sede",
    },
    footer: {
      unitsTitle: "Nossos Serviços",
      contactTitle: "Contactos",
      rights: "Safe Shield por LABIRINTOFLORESCENTE. Especialistas em Confinamento.",
      privacy: "Privacidade",
      terms: "Termos",
      cookies: "Cookies",
      tagline: "Especialistas em confinamento termorretrátil e redes de segurança para a construção e indústria.",
      brandSubtitle: "CONFINAMENTO TÉCNICO"
    },
    legal: { privacy: { title: "Privacidade", lastUpdated: "2024", intro: "", sections: [] }, terms: { title: "Termos", lastUpdated: "2024", intro: "", sections: [] }, cookies: { title: "Cookies", lastUpdated: "2024", intro: "", sections: [] } },
    cookieConsent: { message: "Utilizamos cookies para melhorar a sua experiência.", accept: "Aceitar", decline: "Recusar", privacyLink: "Saber mais" },
    aiFeature: {
      title: "Simulador Virtual",
      subtitle: "Carregue uma foto para ver uma simulação do nosso filme termorretrátil na sua estrutura.",
      dropzone: { drag: "Carregar foto", or: "ou", browse: "Explorar", support: "JPG/PNG (Edifício/Andaime)" },
      processing: { title: "A processar...", step1: "A analisar estrutura...", step2: "A aplicar filme...", step3: "A finalizar..." },
      result: { before: "Antes", after: "Simulação", regenerate: "Tentar Novamente", disclaimer: "Simulação IA apenas para visualização." },
      error: { title: "Erro", desc: "Não foi possível processar a imagem. Use uma foto clara." }
    }
  }
};
