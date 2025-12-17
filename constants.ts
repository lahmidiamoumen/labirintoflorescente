
import { Language, TranslationContent } from './types';

export const TRANSLATIONS: Record<Language, TranslationContent> = {
  [Language.EN]: {
    meta: {
      title: "Safe Shield | Advanced Containment & Environmental Safety",
      description: "European leaders in thermo-retractable containment, asbestos decontamination, and industrial safety netting. Expert solutions in Portugal & France."
    },
    nav: {
      home: "Home",
      about: "About",
      services: "Solutions",
      contact: "Contact",
      tryAi: "AI Simulator",
    },
    hero: {
      headline: "Advanced Environmental Containment Solutions",
      subheadline: "Specialists in Thermo-Retractable Films and Industrial Safety Netting for a cleaner future.",
      cta: "Get a Quote",
      learnMore: "Our Solutions",
    },
    about: {
      title: "Clean Industrial Safety",
      companyName: "SAFE SHIELD UNIPESSOAL LDA",
      description: "We are a premier construction engineering firm dedicated to environmental safety. We specialize in securing sensitive industrial zones through advanced containment technologies that prevent contamination and ensure structural integrity.",
      specialization: "Licensed Activity: Specialized technical construction, decontamination, and environmental protection.",
    },
    services: {
      title: "Precision Engineering",
      items: {
        containment: {
          title: "Heat-Shrink Wrap",
          description: "Premium eco-friendly films for total site isolation. Creates a weather-tight, dust-free environment perfect for sensitive works."
        },
        indoorOutdoor: {
          title: "Adaptive Structures",
          description: "Modular containment systems designed for both interior restoration and exterior high-rise façade protection."
        },
        roofing: {
          title: "Roofing & Netting",
          description: "Integrated under-roof safety systems combined with high-grade fall protection netting for zero-risk operations."
        },
        decontamination: {
          title: "Decontamination",
          description: "Rigorous protocols for hazardous substance removal, ensuring a safe and clean site handover."
        }
      }
    },
    contact: {
      title: "Start Your Project",
      subtitle: "Our consultants are ready to design a custom safety and containment plan for your infrastructure.",
      form: {
        name: "Full Name",
        email: "Work Email",
        service: "Technical Solution",
        servicePlaceholder: "Select technical area...",
        message: "Project Requirements",
        submit: "Submit Inquiry",
      },
      address: "Headquarters",
    },
    footer: {
      rights: "Safe Shield. Precision Safety Engineering.",
      privacy: "Privacy",
      terms: "Terms",
      cookies: "Cookies",
    },
    legal: {
      privacy: { title: "Privacy", lastUpdated: "2024", intro: "Data protection notice.", sections: [] },
      terms: { title: "Terms", lastUpdated: "2024", intro: "Service terms.", sections: [] },
      cookies: { title: "Cookies", lastUpdated: "2024", intro: "Cookie usage.", sections: [] }
    },
    cookieConsent: { message: "We use cookies to ensure the best experience.", accept: "Accept", decline: "Decline", privacyLink: "Privacy" },
    aiFeature: {
      title: "Safe Shield AI",
      subtitle: "Visualize our containment solution on your structure in seconds.",
      dropzone: { drag: "Drop project photo", or: "or", browse: "Select File", support: "JPG/PNG up to 10MB" },
      processing: { title: "Processing...", step1: "Scanning structure...", step2: "Applying virtual wrap...", step3: "Rendering..." },
      result: { before: "Original", after: "Containment Simulation", regenerate: "New Scan", disclaimer: "AI-generated visualization." },
      error: { title: "Scan Failed", desc: "Try a clearer image." }
    }
  },
  [Language.FR]: {
    meta: {
      title: "Safe Shield | Confinement Avancé & Sécurité Environnementale",
      description: "Leader européen du confinement thermorétractable, désamiantage et filets de sécurité."
    },
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Solutions",
      contact: "Contact",
      tryAi: "Simulateur IA",
    },
    hero: {
      headline: "Solutions de Confinement Environnemental",
      subheadline: "Spécialistes du film thermo-rétractable et filets de sécurité pour un avenir plus propre.",
      cta: "Demander Devis",
      learnMore: "Solutions",
    },
    about: {
      title: "Sécurité Industrielle Propre",
      companyName: "SAFE SHIELD UNIPESSOAL LDA",
      description: "Nous sommes une entreprise d'ingénierie de construction dédiée à la sécurité environnementale. Nous sécurisons les zones industrielles sensibles via des technologies avancées.",
      specialization: "Activité : Travaux de construction spécialisés, décontamination et protection de l'environnement.",
    },
    services: {
      title: "Ingénierie de Précision",
      items: {
        containment: {
          title: "Confinement Thermique",
          description: "Films premium pour isolation totale du site. Crée un environnement étanche et hors poussière."
        },
        indoorOutdoor: {
          title: "Structures Adaptatives",
          description: "Systèmes de confinement modulaires pour rénovation intérieure et protection de façade extérieure."
        },
        roofing: {
          title: "Toiture & Filets",
          description: "Systèmes de sécurité intégrés combinés avec des filets anti-chute pour des opérations sans risque."
        },
        decontamination: {
          title: "Décontamination",
          description: "Protocoles rigoureux pour l'élimination de substances dangereuses."
        }
      }
    },
    contact: {
      title: "Démarrer un Projet",
      subtitle: "Nos consultants sont prêts à concevoir un plan de sécurité sur mesure.",
      form: {
        name: "Nom complet",
        email: "Email professionnel",
        service: "Solution technique",
        servicePlaceholder: "Choisir un domaine...",
        message: "Besoins du projet",
        submit: "Envoyer",
      },
      address: "Siège social",
    },
    footer: { rights: "Safe Shield. Ingénierie de sécurité.", privacy: "Vie privée", terms: "Conditions", cookies: "Cookies" },
    legal: { privacy: { title: "Privacy", lastUpdated: "2024", intro: "", sections: [] }, terms: { title: "Terms", lastUpdated: "2024", intro: "", sections: [] }, cookies: { title: "Cookies", lastUpdated: "2024", intro: "", sections: [] } },
    cookieConsent: { message: "Nous utilisons des cookies.", accept: "Accepter", decline: "Refuser", privacyLink: "Plus d'infos" },
    aiFeature: {
      title: "Safe Shield IA",
      subtitle: "Visualisez notre solution de confinement sur votre structure.",
      dropzone: { drag: "Déposez une photo", or: "ou", browse: "Parcourir", support: "JPG/PNG max 10Mo" },
      processing: { title: "Traitement...", step1: "Scan structure...", step2: "Application film...", step3: "Rendu..." },
      result: { before: "Original", after: "Simulation IA", regenerate: "Nouveau scan", disclaimer: "Simulation générée par IA." },
      error: { title: "Échec du scan", desc: "Réessayez avec une photo plus claire." }
    }
  },
  [Language.PT]: {
    meta: {
      title: "Safe Shield | Confinamento Avançado & Segurança Ambiental",
      description: "Líderes europeus em confinamento termorretrátil e descontaminação de amianto."
    },
    nav: {
      home: "Início",
      about: "Sobre",
      services: "Soluções",
      contact: "Contacto",
      tryAi: "Simulador IA",
    },
    hero: {
      headline: "Soluções de Confinamento Ambiental",
      subheadline: "Especialistas em filmes termorretráteis e redes de segurança industrial para um futuro limpo.",
      cta: "Pedir Orçamento",
      learnMore: "Soluções",
    },
    about: {
      title: "Segurança Industrial Limpa",
      companyName: "SAFE SHIELD UNIPESSOAL LDA",
      description: "Somos uma empresa de engenharia dedicada à segurança ambiental. Especializamo-nos em proteger zonas industriais através de tecnologias de confinamento avançadas.",
      specialization: "Objeto Social: Outras atividades especializadas de construção, descontaminação e proteção ambiental.",
    },
    services: {
      title: "Engenharia de Precisão",
      items: {
        containment: {
          title: "Confinamento Térmico",
          description: "Filmes premium para isolamento total do estaleiro. Cria um ambiente estanque e livre de poeiras."
        },
        indoorOutdoor: {
          title: "Estruturas Adaptativas",
          description: "Sistemas de confinamento modulares para renovação interior e proteção de fachadas exteriores."
        },
        roofing: {
          title: "Coberturas e Redes",
          description: "Sistemas de segurança integrados combinados com redes anti-queda para operações de risco zero."
        },
        decontamination: {
          title: "Descontaminação",
          description: "Protocolos rigorosos para remoção de substâncias perigosas."
        }
      }
    },
    contact: {
      title: "Iniciar Projeto",
      subtitle: "Os nossos consultores estão prontos para desenhar um plano de segurança à medida.",
      form: {
        name: "Nome Completo",
        email: "Email Profissional",
        service: "Solução Técnica",
        servicePlaceholder: "Selecione a área...",
        message: "Detalhes do Projeto",
        submit: "Enviar Pedido",
      },
      address: "Sede",
    },
    footer: { rights: "Safe Shield. Engenharia de Segurança.", privacy: "Privacidade", terms: "Termos", cookies: "Cookies" },
    legal: { privacy: { title: "Privacidade", lastUpdated: "2024", intro: "", sections: [] }, terms: { title: "Termos", lastUpdated: "2024", intro: "", sections: [] }, cookies: { title: "Cookies", lastUpdated: "2024", intro: "", sections: [] } },
    cookieConsent: { message: "Utilizamos cookies.", accept: "Aceitar", decline: "Recusar", privacyLink: "Saber mais" },
    aiFeature: {
      title: "Safe Shield IA",
      subtitle: "Visualize a nossa solução no seu edifício.",
      dropzone: { drag: "Arraste a foto do projeto", or: "ou", browse: "Explorar", support: "JPG/PNG até 10MB" },
      processing: { title: "A processar...", step1: "A analisar...", step2: "A aplicar filme...", step3: "A renderizar..." },
      result: { before: "Original", after: "Simulação IA", regenerate: "Novo Scan", disclaimer: "Simulação gerada por IA." },
      error: { title: "Falha no Scan", desc: "Tente uma foto mais clara." }
    }
  }
};
