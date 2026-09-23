export const CV_LANGS = ['fr', 'en', 'de'];

export const CV_FILES = {
  fr: 'CV_Fatima_Ezzohra_Dadi_FR.pdf',
  en: 'CV_Fatima_Ezzohra_Dadi_EN.pdf',
  de: 'CV_Fatima_Ezzohra_Dadi_DE.pdf',
};

export function getCvLang(siteLang) {
  if (siteLang === 'ar') return 'fr';
  if (CV_LANGS.includes(siteLang)) return siteLang;
  return 'fr';
}

export const CV_CONTENT = {
  fr: {
    role: 'Développeuse Web & Multimédia · UX/UI Designer',
    profile: 'Spécialiste du numérique au profil hybride, je combine la rigueur technique du développement Front-end (HTML5, CSS3, JavaScript, ReactJS, PHP, WordPress) avec une expertise en design UX/UI (Figma, prototypage, Design System) et en modélisation 3D (3DS Max). Titulaire d\'une Licence Professionnelle Métiers du Numérique à l\'EiSINe (2026), après un DUT Web & Multimédia à l\'ESTM, j\'ai forgé mon expérience entre missions freelance, stages en développement et design, et un solide parcours en relation client (Glovo/INTELCIA). Mon approche repose sur l\'équilibre entre fonctionnalité et esthétique : je conçois des solutions digitales performantes, ergonomiques et créatives, de la maquette à la mise en production. Rigoureuse, polyvalente et orientée utilisateur, je m\'investis dans l\'optimisation de l\'expérience et le déploiement d\'interfaces innovantes.',
    sections: {
      contact: 'Contact',
      languages: 'Langues',
      skills: 'Compétences',
      interests: 'Centres d\'intérêt',
      experience: 'Expérience professionnelle',
      education: 'Formations',
      certifications: 'Certifications',
      soft: 'Soft Skills',
    },
    contact: {
      license: 'Permis B',
    },
    languages: [
      { name: 'Français', level: 'Courant — maîtrise professionnelle' },
      { name: 'Anglais', level: 'Bilingue — niveau C1' },
      { name: 'Arabe', level: 'Langue maternelle' },
    ],
    skillGroups: [
      {
        title: 'Développement Web',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Python', 'HTML Email', 'ReactJS', 'PHP', 'Git', 'APIs REST'],
      },
      {
        title: 'Design & Interface',
        tags: ['UX/UI Design', 'Figma', 'Canva', 'Prototypage', 'Design System', 'Wireframes', 'Audit UX', 'i18n', 'App Store / Play Store'],
      },
      {
        title: 'Marketing & Digital',
        tags: ['SEO', 'Newsletters HTML', 'Email B2B', 'Inbound Marketing', 'Social Media'],
      },
      {
        title: 'Support & Gestion',
        tags: ['Relation client', 'Customer Success', 'Helpdesk IT', 'Gestion de projet'],
      },
    ],
    interests: 'Musique · Sport · Cuisine · Voyage · Art · Théâtre',
    experiences: [
      {
        title: 'Stagiaire Design & UI/UX',
        date: 'Mars — Juin 2026',
        place: 'CamAnalytics — Reims, France',
        bullets: [
          'Conception et prototypage d\'interfaces utilisateur pour des solutions analytiques',
          'Wireframes, maquettes haute-fidélité et documentation de specs développeur sur Figma',
          'Optimisation UX et cohérence visuelle des supports de communication digitale',
        ],
      },
      {
        title: 'Freelance Web & Design',
        date: 'Depuis août 2022',
        place: 'Auto-entrepreneur — Meknès, Maroc',
        bullets: [
          'Sites web sur mesure et identités visuelles pour clients internationaux',
          'Gestion complète des projets : cahier des charges, design, développement et livraison',
        ],
      },
      {
        title: 'Chargée de Clientèle — Projet Glovo',
        date: 'Mai 2024 — Juil. 2025',
        place: 'INTELCIA — Meknès, Maroc',
        bullets: [
          'Support utilisateur en temps réel pour l\'application Glovo',
          'Suivi des indicateurs CSAT et fidélisation des partenaires',
          'Gestion des réclamations et résolution multi-canal',
        ],
      },
      {
        title: 'Serveuse & Caissière',
        date: 'Oct. 2025 — Présent',
        place: 'ThaiJap — Charleville-Mézières, France',
        bullets: [
          'Accueil, service clientèle, prise de commandes et gestion de caisse',
          'Travail en équipe dans un environnement rythmé',
        ],
      },
      {
        title: 'Stagiaire Développeur Web',
        date: 'Avr. — Juil. 2024',
        place: 'WEHELP DIGITAL — Meknès, Maroc',
        bullets: [
          'Intégration de maquettes responsives en HTML5, CSS3 et JavaScript',
          'Développement PHP, APIs REST et maintenance CMS',
        ],
      },
      {
        title: 'Responsable Logistique',
        date: 'Sept. 2023 — Avr. 2024',
        place: 'JLM ESTM — Meknès, Maroc',
        bullets: [
          'Gestion opérationnelle des flux pour projets événementiels',
          'Management d\'équipe, planification et coordination',
        ],
      },
      {
        title: 'Stagiaire Développeur Web',
        date: 'Juil. — Août 2023',
        place: 'WEHELP DIGITAL — Meknès, Maroc',
        bullets: [
          'Intégration web responsive et bonnes pratiques Front-end',
          'Maintenance CMS et consolidation des fondamentaux',
        ],
      },
      {
        title: 'Stagiaire Enseignante',
        date: 'Juin 2023',
        place: 'École Primaire.com — Ifrane, Maroc',
        bullets: [
          'Pédagogie active et gestion de groupes d\'apprentissage',
          'Conception de supports éducatifs adaptés',
        ],
      },
    ],
    education: [
      {
        title: 'Licence Pro — Métiers du Numérique',
        date: '2025 — 2026',
        place: 'EiSINe — Charleville-Mézières',
        desc: 'Conception, rédaction web, développement et multimédia interactif',
      },
      {
        title: 'DUT — Développement Web & Multimédia',
        date: '2022 — 2024',
        place: 'ESTM — Meknès, Maroc',
        desc: '',
      },
      {
        title: 'Bac Sciences Mathématiques A',
        date: '2022',
        place: 'Lycée Mohamed 5 — Azrou, Maroc',
        desc: '',
      },
    ],
    certifications: [
      { title: 'Marketing Inbound', issuer: 'HubSpot Academy' },
      { title: 'Marketing des Réseaux Sociaux', issuer: 'HubSpot Academy' },
      { title: 'Principes Fondamentaux du Marketing Digital', issuer: 'Google' },
    ],
    softSkills: ['Autonomie', 'Créativité', 'Communication', 'Adaptabilité', 'Gestion de projet', 'Travail en équipe', 'Rigueur', 'Curiosité'],
    skillsWithLevels: [
      { name: 'UX/UI & Figma', level: 9 },
      { name: 'HTML / CSS / JS', level: 9 },
      { name: 'HTML Email', level: 8 },
      { name: 'Canva', level: 8 },
      { name: 'Node.js / Python', level: 7 },
      { name: 'Wireframes / Audit UX', level: 8 },
      { name: 'i18n (6 langues)', level: 8 },
      { name: 'App Store / Play', level: 7 },
    ],
    gaming: {
      playerStats: 'STATS_JOUEUR',
      skillTree: 'ARBRE_COMPÉTENCES',
      lore: 'FORMATION',
      localization: 'LANGUES',
      achievements: 'SUCCÈS',
      mission: 'MISSION',
      questLog: 'JOURNAL_QUÊTES',
      classLabel: 'Classe',
      guildLabel: 'Guilde',
      serverLabel: 'Serveur',
      classValue: 'Dev Web & Designer UX/UI',
      guildValue: 'EiSINe · Freelance Digital',
      serverValue: 'Charleville-Mézières, FR',
      bar1: 'CODE',
      bar2: 'DESIGN',
      bar1Pct: 92,
      bar2Pct: 90,
      lvl: 'NIV.',
      tel: 'TÉL',
      mail: 'MAIL',
      portfolio: 'PORTFOLIO',
    },
  },

  en: {
    role: 'Web & Multimedia Developer · UX/UI Designer',
    profile: 'Digital specialist with a hybrid profile, I combine the technical rigor of Front-end development (HTML5, CSS3, JavaScript, ReactJS, PHP, WordPress) with expertise in UX/UI design (Figma, prototyping, Design System) and 3D modeling (3DS Max). A graduate of a Professional Bachelor\'s in Digital Careers at EiSINe (2026), after a Web & Multimedia DUT at ESTM, I have built experience across freelance missions, web and design internships, and a strong customer relations background (Glovo/INTELCIA). My approach balances functionality and aesthetics: I create high-performing, ergonomic and creative digital solutions, from mockup to production. Rigorous, versatile and user-focused, I am committed to optimizing user experience and deploying innovative interfaces.',
    sections: {
      contact: 'Contact',
      languages: 'Languages',
      skills: 'Skills',
      interests: 'Interests',
      experience: 'Professional Experience',
      education: 'Education',
      certifications: 'Certifications',
      soft: 'Soft Skills',
    },
    contact: { license: 'Driving License B' },
    languages: [
      { name: 'French', level: 'Fluent — professional proficiency' },
      { name: 'English', level: 'Bilingual — C1 level' },
      { name: 'Arabic', level: 'Native language' },
    ],
    skillGroups: [
      {
        title: 'Web Development',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Python', 'HTML Email', 'ReactJS', 'PHP', 'Git', 'REST APIs'],
      },
      {
        title: 'Design & Interface',
        tags: ['UX/UI Design', 'Figma', 'Canva', 'Prototyping', 'Design System', 'Wireframes', 'UX Audit', 'i18n', 'App Store / Play Store'],
      },
      {
        title: 'Marketing & Digital',
        tags: ['SEO', 'HTML Newsletters', 'B2B Email', 'Inbound Marketing', 'Social Media'],
      },
      {
        title: 'Support & Management',
        tags: ['Customer Relations', 'Customer Success', 'IT Helpdesk', 'Project Management'],
      },
    ],
    interests: 'Music · Sports · Cooking · Travel · Art · Theatre',
    experiences: [
      {
        title: 'Design & UI/UX Intern',
        date: 'Mar — Jun 2026',
        place: 'CamAnalytics — Reims, France',
        bullets: [
          'Design and prototyping of user interfaces for analytical solutions',
          'Wireframes, high-fidelity mockups and developer spec documentation on Figma',
          'UX optimization and visual consistency across digital communication assets',
        ],
      },
      {
        title: 'Freelance Web & Design',
        date: 'Since Aug 2022',
        place: 'Self-employed — Meknès, Morocco',
        bullets: [
          'Custom websites and visual identities for international clients',
          'Full project management: brief, design, development and delivery',
        ],
      },
      {
        title: 'Customer Service Agent — Glovo Project',
        date: 'May 2024 — Jul 2025',
        place: 'INTELCIA — Meknès, Morocco',
        bullets: [
          'Real-time user support for the Glovo delivery application',
          'CSAT monitoring and partner retention',
          'Complaint handling and multi-channel issue resolution',
        ],
      },
      {
        title: 'Waitress & Cashier',
        date: 'Oct 2025 — Present',
        place: 'ThaiJap — Charleville-Mézières, France',
        bullets: [
          'Customer welcome, order taking and cash register management',
          'Teamwork in a fast-paced environment',
        ],
      },
      {
        title: 'Web Developer Intern',
        date: 'Apr — Jul 2024',
        place: 'WEHELP DIGITAL — Meknès, Morocco',
        bullets: [
          'Responsive mockup integration in HTML5, CSS3 and JavaScript',
          'PHP development, REST APIs and CMS maintenance',
        ],
      },
      {
        title: 'Logistics Manager',
        date: 'Sep 2023 — Apr 2024',
        place: 'JLM ESTM — Meknès, Morocco',
        bullets: [
          'Operational flow management for event projects',
          'Team management, planning and coordination',
        ],
      },
      {
        title: 'Web Developer Intern',
        date: 'Jul — Aug 2023',
        place: 'WEHELP DIGITAL — Meknès, Morocco',
        bullets: [
          'Responsive web integration and Front-end best practices',
          'CMS maintenance and fundamentals consolidation',
        ],
      },
      {
        title: 'Teaching Intern',
        date: 'Jun 2023',
        place: 'École Primaire.com — Ifrane, Morocco',
        bullets: [
          'Active pedagogy and learning group management',
          'Educational material design for diverse audiences',
        ],
      },
    ],
    education: [
      {
        title: 'Professional Bachelor — Digital Careers',
        date: '2025 — 2026',
        place: 'EiSINe — Charleville-Mézières',
        desc: 'Web design, development and interactive multimedia',
      },
      {
        title: 'Associate Degree — Web Development & Multimedia',
        date: '2022 — 2024',
        place: 'ESTM — Meknès, Morocco',
        desc: '',
      },
      {
        title: 'High School Diploma — Mathematics Sciences A',
        date: '2022',
        place: 'Mohamed 5 High School — Azrou, Morocco',
        desc: '',
      },
    ],
    certifications: [
      { title: 'Inbound Marketing', issuer: 'HubSpot Academy' },
      { title: 'Social Media Marketing', issuer: 'HubSpot Academy' },
      { title: 'Fundamentals of Digital Marketing', issuer: 'Google' },
    ],
    softSkills: ['Autonomy', 'Creativity', 'Communication', 'Adaptability', 'Project Management', 'Teamwork', 'Rigor', 'Curiosity'],
    skillsWithLevels: [
      { name: 'UX/UI & Figma', level: 9 },
      { name: 'HTML / CSS / JS', level: 9 },
      { name: 'HTML Email', level: 8 },
      { name: 'Canva', level: 8 },
      { name: 'Node.js / Python', level: 7 },
      { name: 'Wireframes / UX Audit', level: 8 },
      { name: 'i18n (6 languages)', level: 8 },
      { name: 'App Store / Play', level: 7 },
    ],
    gaming: {
      playerStats: 'PLAYER_STATS',
      skillTree: 'SKILL_TREE',
      lore: 'LORE_KNOWLEDGE',
      localization: 'LOCALIZATION',
      achievements: 'ACHIEVEMENTS',
      mission: 'MISSION_STATEMENT',
      questLog: 'QUEST_LOG',
      classLabel: 'Class',
      guildLabel: 'Guild',
      serverLabel: 'Server',
      classValue: 'Web Dev & UX/UI Designer',
      guildValue: 'EiSINe · Freelance Digital',
      serverValue: 'Charleville-Mézières, FR',
      bar1: 'CODE',
      bar2: 'DESIGN',
      bar1Pct: 92,
      bar2Pct: 90,
      lvl: 'LVL.',
      tel: 'TEL',
      mail: 'MAIL',
      portfolio: 'PORTFOLIO',
    },
  },

  de: {
    role: 'Web- & Multimedia-Entwicklerin · UX/UI-Designerin',
    profile: 'Digital-Spezialistin mit hybridem Profil — ich verbinde die technische Präzision der Front-end-Entwicklung (HTML5, CSS3, JavaScript, ReactJS, PHP, WordPress) mit Expertise in UX/UI-Design (Figma, Prototyping, Design System) und 3D-Modellierung (3DS Max). Absolventin des Berufsbachelors Digitale Berufe an der EiSINe (2026), nach einem DUT Web & Multimedia an der ESTM, habe ich Erfahrung in Freelance-Projekten, Web- und Design-Praktika sowie in der Kundenbetreuung (Glovo/INTELCIA) gesammelt. Mein Ansatz vereint Funktionalität und Ästhetik: Ich entwickle leistungsstarke, ergonomische und kreative digitale Lösungen — vom Mockup bis zur Produktion. Gewissenhaft, vielseitig und nutzerorientiert setze ich mich für die Optimierung der User Experience und den Einsatz innovativer Interfaces ein.',
    sections: {
      contact: 'Kontakt',
      languages: 'Sprachen',
      skills: 'Kompetenzen',
      interests: 'Interessen',
      experience: 'Berufserfahrung',
      education: 'Ausbildung',
      certifications: 'Zertifizierungen',
      soft: 'Soft Skills',
    },
    contact: { license: 'Führerschein Klasse B' },
    languages: [
      { name: 'Französisch', level: 'Fließend — berufliche Kenntnisse' },
      { name: 'Englisch', level: 'Zweisprachig — Niveau C1' },
      { name: 'Arabisch', level: 'Muttersprache' },
    ],
    skillGroups: [
      {
        title: 'Webentwicklung',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Python', 'HTML Email', 'ReactJS', 'PHP', 'Git', 'REST APIs'],
      },
      {
        title: 'Design & Interface',
        tags: ['UX/UI Design', 'Figma', 'Canva', 'Prototyping', 'Design System', 'Wireframes', 'UX-Audit', 'i18n', 'App Store / Play Store'],
      },
      {
        title: 'Marketing & Digital',
        tags: ['SEO', 'HTML-Newsletter', 'B2B E-Mail', 'Inbound Marketing', 'Social Media'],
      },
      {
        title: 'Support & Management',
        tags: ['Kundenbetreuung', 'Customer Success', 'IT-Helpdesk', 'Projektmanagement'],
      },
    ],
    interests: 'Musik · Sport · Kochen · Reisen · Kunst · Theater',
    experiences: [
      {
        title: 'Design & UI/UX Praktikantin',
        date: 'März — Juni 2026',
        place: 'CamAnalytics — Reims, Frankreich',
        bullets: [
          'UI/UX-Redesign Kunden-App: Audit, Wireframes, Figma-Mockups und Entwickler-Specs',
          '15 mehrsprachige HTML-Newsletter-Templates — Gmail/Outlook-Kompatibilität, Versand Node.js & Python (SMTP, Microsoft Graph)',
          '6 animierte E-Mail-Signaturen GIF (Canva/Figma) + HTML/CSS — Python-Automatisierung (build_all.py)',
          'App Store & Google Play Visuals in 6 Sprachen (FR, EN, ES, DE, PT, IT)',
          'Design des wöchentlichen Kundenberichts — B2B-Kommunikation und Markenkonsistenz',
        ],
      },
      {
        title: 'Freelance Web & Design',
        date: 'Seit Aug. 2022',
        place: 'Selbstständig — Meknès, Marokko',
        bullets: [
          'Maßgeschneiderte Websites und visuelle Identitäten für internationale Kunden',
          'Komplettes Projektmanagement: Briefing, Design, Entwicklung und Lieferung',
        ],
      },
      {
        title: 'Kundenbetreuerin — Glovo-Projekt',
        date: 'Mai 2024 — Juli 2025',
        place: 'INTELCIA — Meknès, Marokko',
        bullets: [
          'Echtzeit-Support für die Glovo-Lieferanwendung',
          'CSAT-Monitoring und Partnerbindung',
          'Beschwerdemanagement und Multi-Channel-Problemlösung',
        ],
      },
      {
        title: 'Kellnerin & Kassiererin',
        date: 'Okt. 2025 — Heute',
        place: 'ThaiJap — Charleville-Mézières, Frankreich',
        bullets: [
          'Kundenempfang, Bestellaufnahme und Kassenverwaltung',
          'Teamarbeit in einem lebhaften Umfeld',
        ],
      },
      {
        title: 'Webentwicklerin Praktikum',
        date: 'Apr. — Juli 2024',
        place: 'WEHELP DIGITAL — Meknès, Marokko',
        bullets: [
          'Responsive Mockup-Integration in HTML5, CSS3 und JavaScript',
          'PHP-Entwicklung, REST APIs und CMS-Wartung',
        ],
      },
      {
        title: 'Logistik-Verantwortliche',
        date: 'Sep. 2023 — Apr. 2024',
        place: 'JLM ESTM — Meknès, Marokko',
        bullets: [
          'Operatives Flussmanagement für Veranstaltungsprojekte',
          'Teammanagement, Planung und Koordination',
        ],
      },
      {
        title: 'Webentwicklerin Praktikum',
        date: 'Juli — Aug. 2023',
        place: 'WEHELP DIGITAL — Meknès, Marokko',
        bullets: [
          'Responsive Web-Integration und Front-end Best Practices',
          'CMS-Wartung und Festigung der Grundlagen',
        ],
      },
      {
        title: 'Lehramtspraktikantin',
        date: 'Juni 2023',
        place: 'École Primaire.com — Ifrane, Marokko',
        bullets: [
          'Aktive Pädagogik und Lerngruppen-Management',
          'Gestaltung von Lernmaterialien für verschiedene Zielgruppen',
        ],
      },
    ],
    education: [
      {
        title: 'Berufsbachelor — Digitale Berufe',
        date: '2025 — 2026',
        place: 'EiSINe — Charleville-Mézières',
        desc: 'Webdesign, Entwicklung und interaktives Multimedia',
      },
      {
        title: 'DUT — Webentwicklung & Multimedia',
        date: '2022 — 2024',
        place: 'ESTM — Meknès, Marokko',
        desc: '',
      },
      {
        title: 'Abitur — Mathematik-Naturwissenschaften A',
        date: '2022',
        place: 'Gymnasium Mohamed 5 — Azrou, Marokko',
        desc: '',
      },
    ],
    certifications: [
      { title: 'Inbound Marketing', issuer: 'HubSpot Academy' },
      { title: 'Social Media Marketing', issuer: 'HubSpot Academy' },
      { title: 'Grundlagen des digitalen Marketings', issuer: 'Google' },
    ],
    softSkills: ['Autonomie', 'Kreativität', 'Kommunikation', 'Anpassungsfähigkeit', 'Projektmanagement', 'Teamarbeit', 'Sorgfalt', 'Neugier'],
    skillsWithLevels: [
      { name: 'UX/UI & Figma', level: 9 },
      { name: 'HTML / CSS / JS', level: 9 },
      { name: 'HTML Email', level: 8 },
      { name: 'Canva', level: 8 },
      { name: 'Node.js / Python', level: 7 },
      { name: 'Wireframes / UX-Audit', level: 8 },
      { name: 'i18n (6 Sprachen)', level: 8 },
      { name: 'App Store / Play', level: 7 },
    ],
    gaming: {
      playerStats: 'SPIELER_STATS',
      skillTree: 'SKILL_BAUM',
      lore: 'BILDUNG',
      localization: 'SPRACHEN',
      achievements: 'ERRUNGENSCHAFTEN',
      mission: 'MISSIONS_BRIEFING',
      questLog: 'QUEST_LOG',
      classLabel: 'Klasse',
      guildLabel: 'Gilde',
      serverLabel: 'Server',
      classValue: 'Web- & UX/UI-Entwicklerin',
      guildValue: 'EiSINe · Freelance Digital',
      serverValue: 'Charleville-Mézières, FR',
      bar1: 'CODE',
      bar2: 'DESIGN',
      bar1Pct: 92,
      bar2Pct: 90,
      lvl: 'STUFE',
      tel: 'TEL',
      mail: 'E-MAIL',
      portfolio: 'PORTFOLIO',
    },
  },
};
