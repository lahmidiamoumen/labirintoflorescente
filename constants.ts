
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
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookies: "Cookie Policy",
    },
    legal: {
      privacy: {
        title: "Privacy Policy",
        lastUpdated: "Last Updated: October 2023",
        intro: "At Labirinto Florescente, we are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information.",
        sections: [
          { heading: "Data Collection", content: "We collect information you provide directly to us, such as when you request a quote, including your name, email address, and phone number." },
          { heading: "Use of Information", content: "We use the information to respond to your inquiries, provide our specialized containment services, and improve our website functionality." },
          { heading: "Data Protection", content: "We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk." }
        ]
      },
      terms: {
        title: "Terms of Service",
        lastUpdated: "Last Updated: October 2023",
        intro: "By accessing our website and services, you agree to be bound by these Terms of Service.",
        sections: [
          { heading: "Services", content: "Labirinto Florescente provides specialized construction and containment services. All services are subject to a separate written agreement." },
          { heading: "Intellectual Property", content: "All content on this website, including text, graphics, and logos, is the property of Labirinto Florescente." },
          { heading: "Limitation de Liability", content: "Labirinto Florescente shall not be liable for any indirect, incidental, or consequential damages arising out of the use of our website." }
        ]
      },
      cookies: {
        title: "Cookie Policy",
        lastUpdated: "Last Updated: October 2023",
        intro: "We use cookies to enhance your experience on our website.",
        sections: [
          { heading: "What are Cookies?", content: "Cookies are small text files stored on your device that help us remember your preferences and analyze site traffic." },
          { heading: "How We Use Cookies", content: "We use essential cookies for website functionality and analytical cookies to understand how visitors interact with our site." },
          { heading: "Managing Cookies", content: "You can control and manage cookies through your browser settings." }
        ]
      }
    },
    cookieConsent: {
      message: "We use cookies to ensure you get the best experience on our website. By continuing to visit this site you agree to our use of cookies.",
      accept: "Accept",
      decline: "Decline",
      privacyLink: "Learn more"
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
      privacy: "Politique de Confidentialité",
      terms: "Conditions d'Utilisation",
      cookies: "Politique des Cookies",
    },
    legal: {
      privacy: {
        title: "Politique de Confidentialité",
        lastUpdated: "Dernière mise à jour : Octobre 2023",
        intro: "Chez Labirinto Florescente, nous nous engageons à protéger vos données personnelles. Cette politique explique comment nous collectons et utilisons vos informations.",
        sections: [
          { heading: "Collecte de Données", content: "Nous collectons les informations que vous nous fournissez directement, par exemple lors d'une demande de devis." },
          { heading: "Utilisation des Informations", content: "Nous utilisons ces informations pour répondre à vos demandes et fournir nos services spécialisés." },
          { heading: "Protection des Données", content: "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour assurer la sécurité de vos données." }
        ]
      },
      terms: {
        title: "Conditions d'Utilisation",
        lastUpdated: "Dernière mise à jour : Octobre 2023",
        intro: "En accédant à notre site web, vous acceptez d'être lié par ces conditions d'utilisation.",
        sections: [
          { heading: "Services", content: "Labirinto Florescente fournit des services de construction spécialisés. Tous les services font l'objet d'un contrat écrit séparé." },
          { heading: "Propriété Intellectuelle", content: "Tout le contenu de ce site web est la propriété de Labirinto Florescente." },
          { heading: "Limitation de Responsabilité", content: "Labirinto Florescente ne pourra être tenu responsable des dommages indirects liés à l'utilisation de notre site." }
        ]
      },
      cookies: {
        title: "Politique des Cookies",
        lastUpdated: "Dernière mise à jour : Octobre 2023",
        intro: "Nous utilisons des cookies pour améliorer votre expérience sur notre site.",
        sections: [
          { heading: "Qu'est-ce qu'un cookie ?", content: "Les cookies sont de petits fichiers texte stockés sur votre appareil qui nous aident à analyser le trafic du site." },
          { heading: "Utilisation des Cookies", content: "Nous utilisons des cookies essentiels pour le fonctionnement du site et des cookies analytiques." },
          { heading: "Gestion des Cookies", content: "Vous pouvez contrôler et gérer les cookies via les paramètres de votre navigateur." }
        ]
      }
    },
    cookieConsent: {
      message: "Nous utilisons des cookies pour vous garantir la meilleure expérience sur notre site web. En continuant, vous acceptez notre utilisation des cookies.",
      accept: "Accepter",
      decline: "Refuser",
      privacyLink: "En savoir plus"
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
          description: "Filmes termorretráteis premium para proteção ambiental, criando zonas de trabalho estanques, livres de poeira e seguras."
        },
        indoorOutdoor: {
          title: "Interior & Exterior",
          description: "Estruturas de confinamento versáteis adaptáveis a renovações interiores e trabalhos de fachada exterior."
        },
        roofing: {
          title: "Coberturas e Redes",
          description: "Soluções de confinamento sob o telhado combinadas com redes de segurança certificadas (filet antichute HOMME) para máxima segurança."
        },
        decontamination: {
          title: "Descontaminação",
          description: "Protocolos e instalações especializadas para a remoção de materiais perigosos e descontaminação de locais."
        }
      }
    },
    contact: {
      title: "Contacte-nos",
      subtitle: "Pronto para iniciar o seu projeto? A nossa equipa de especialistas está aqui para fornecer soluções de confinamento seguras e eficientes.",
      form: {
        name: "O Seu Nome",
        email: "O Seu Email",
        service: "Serviço de Interesse",
        servicePlaceholder: "Selecione um serviço...",
        message: "Detalhes do Projeto",
        submit: "Pedir Orçamento",
      },
      address: "Morada",
    },
    footer: {
      rights: "Todos os direitos reservados.",
      privacy: "Política de Privacidade",
      terms: "Termos de Serviço",
      cookies: "Política de Cookies",
    },
    legal: {
      privacy: {
        title: "Política de Privacidade",
        lastUpdated: "Última atualização: Outubro 2023",
        intro: "Na Labirinto Florescente, estamos comprometidos em proteger os seus dados pessoais. Esta política explica como recolhemos e utilizamos as suas informações.",
        sections: [
          { heading: "Recolha de Dados", content: "Recolhemos informações que nos fornece diretamente, como quando solicita um orçamento, incluindo o seu nome, email e número de telefone." },
          { heading: "Uso de Informações", content: "Utilizamos as informações para responder às suas questões, fornecer os nossos serviços especializados e melhorar a funcionalidade do site." },
          { heading: "Proteção de Dados", content: "Implementamos medidas técnicas e organizacionais adequadas para garantir um nível de segurança apropriado ao risco." }
        ]
      },
      terms: {
        title: "Termos de Serviço",
        lastUpdated: "Última atualização: Outubro 2023",
        intro: "Ao aceder ao nosso site e serviços, concorda em ficar vinculado a estes Termos de Serviço.",
        sections: [
          { heading: "Serviços", content: "A Labirinto Florescente fornece serviços de construção e confinamento especializados. Todos os serviços estão sujeitos a um contrato escrito separado." },
          { heading: "Propriedade Intelectual", content: "Todo o conteúdo deste site, incluindo texto, gráficos e logótipos, é propriedade da Labirinto Florescente." },
          { heading: "Limitação de Responsabilidade", content: "A Labirinto Florescente não será responsável por quaisquer danos indiretos decorrentes da utilização do nosso site." }
        ]
      },
      cookies: {
        title: "Política de Cookies",
        lastUpdated: "Última atualização: Outubro 2023",
        intro: "Utilizamos cookies para melhorar a sua experiência no nosso site.",
        sections: [
          { heading: "O que são Cookies?", content: "Cookies são pequenos ficheiros de texto armazenados no seu dispositivo que nos ajudam a lembrar as suas preferências." },
          { heading: "Como Usamos Cookies", content: "Utilizamos cookies essenciais para a funcionalidade do site e cookies analíticos para entender como os visitantes interagem com o nosso site." },
          { heading: "Gestão de Cookies", content: "Pode controlar e gerir cookies através das definições do seu navegador." }
        ]
      }
    },
    cookieConsent: {
      message: "Utilizamos cookies para garantir a melhor experiência no nosso site. Ao continuar a visitar este site, concorda com a nossa utilização de cookies.",
      accept: "Aceitar",
      decline: "Recusar",
      privacyLink: "Saber mais"
    }
  }
};
