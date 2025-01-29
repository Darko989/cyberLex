const translations = {
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About Us',
        'nav-services': 'Services',
        'nav-expertise': 'Expertise',
        'nav-contact': 'Contact Us',

        // Mobile Titles
        'mobile-title': 'COMPLIANCE',
        'mobile-services-title': 'SERVICES',

        // Hero Section
        'hero-subtitle': 'Providing specialized consultancy in GDPR, IT law, Serbian data protection, and AI regulations. Whether you\'re a startup, a large corporation, or a public authority, we deliver tailored solutions to meet your unique needs.',
        'hero-cta': 'Get Started',

        // About Section
        'about-title': 'About Us',
        'legal-expert': 'Legal Expert',
        'dpo-expert': 'DPO & IT Expert',
        'uros-bio': 'A seasoned lawyer specialized in various legal fields with extensive experience in public authorities, where he served as a patient rights lawyer. His diverse background enables him to provide comprehensive legal solutions across multiple domains.',
        'darko-bio': 'An accomplished professional with dual expertise in IT and data protection. Having served as a QA Director and Data Protection Officer for multiple companies, Darko brings a unique blend of technical knowledge and privacy expertise to ensure comprehensive compliance solutions.',
        'linkedin-connect': 'Connect on LinkedIn',

        // Services Section
        'services-title': 'Our Services',
        'gdpr-title': 'GDPR Compliance',
        'gdpr-desc': 'Comprehensive GDPR implementation and compliance strategies tailored to your organization\'s needs. We ensure your data protection practices meet EU standards.',
        'it-law-title': 'IT Law',
        'it-law-desc': 'Expert legal guidance for digital businesses and tech companies, covering software licensing, cloud services, and digital contracts.',
        'data-protection-title': 'Data Protection',
        'data-protection-desc': 'Specialized expertise in Serbian data protection law implementation, ensuring local compliance while meeting international standards.',
        'ai-title': 'AI Regulations',
        'ai-desc': 'Navigate the evolving landscape of AI legal frameworks with our expert guidance on compliance and risk management.',
        'learn-more': 'Learn More About Our Services',

        // Expertise Section
        'expertise-title': 'Why Choose Us',
        'expert-knowledge-title': 'Expert Knowledge',
        'expert-knowledge-desc': 'Our team combines deep legal expertise with technical understanding, ensuring comprehensive solutions for your compliance needs.',
        'tailored-solutions-title': 'Tailored Solutions',
        'tailored-solutions-desc': 'We develop customized compliance strategies that align perfectly with your business objectives and industry requirements.',
        'track-record-title': 'Proven Track Record',
        'track-record-desc': 'With years of experience helping businesses navigate complex regulations, we deliver reliable and effective compliance solutions.',

        // Hero Section Letters
        'left-1': 'C',
        'left-2': 'O',
        'left-3': 'M',
        'left-4': 'P',
        'left-5': 'L',
        'right-1': 'I',
        'right-2': 'A',
        'right-3': 'N',
        'right-4': 'C',
        'right-5': 'E',
        'right-6': '',

        // Hero Section Letters - Services
        'services-1': 'S',
        'services-2': 'E',
        'services-3': 'R',
        'services-4': 'V',
        'services-5': 'I',
        'services-6': 'C',
        'services-7': 'E',
        'services-8': 'S',

        // Contact Section
        'contact-title': 'Get in Touch',
        'contact-subtitle': 'Let\'s discuss how we can help your business navigate the complex legal landscape',
        'name-placeholder': 'Your Name',
        'email-placeholder': 'Your Email',
        'service-placeholder': 'Select Service',
        'message-placeholder': 'Your Message',
        'send-message': 'Send Message',

        // Footer
        'email-us': 'Email Us',
        'call-us': 'Call Us',
        'visit-us': 'Visit Us',
        'privacy-policy': 'Privacy Policy',
        'copyright': '© 2025 CyberLex Compliance. Your trusted partner in digital legal compliance.',

        // Cookie Banner
        'cookie-message': 'We use cookies to enhance your experience on our website. By continuing to browse, you agree to our use of cookies. You can learn more about how we use cookies in our Privacy Policy.',
        'accept-cookies': 'Accept All Cookies',
        'decline-cookies': 'Decline Non-Essential',

        // Compliance Page
        'services-subtitle': 'Comprehensive Legal and Technical Solutions for Your Digital Compliance Needs',
        
        // Cybersecurity Compliance Section
        'cyber-compliance-title': 'Cybersecurity Compliance',
        'cyber-compliance-desc': 'Comprehensive compliance solutions tailored to your industry\'s regulatory requirements.',
        'gdpr-compliance-detail': 'Complete assessment and implementation of GDPR requirements, including data mapping, privacy notices, and consent management.',
        'serbian-law-detail': 'Expert guidance on Serbian data protection regulations, ensuring local compliance while maintaining international standards.',
        'iso-title': 'ISO 27001 Implementation',
        'iso-desc': 'End-to-end support for implementing and maintaining ISO 27001 certification, including gap analysis and documentation.',
        'hipaa-title': 'HIPAA Compliance',
        'hipaa-desc': 'Healthcare data protection and compliance solutions, including risk assessments and policy development.',

        // Serbian Law Section
        'serbian-law-title': 'Serbian Law Expertise',
        'serbian-law-intro': 'Specialized legal services focused on Serbian regulations and compliance requirements.',
        'serbian-dp-law-title': 'Serbian Data Protection Law',
        'serbian-dp-law-desc': 'Comprehensive implementation of Serbian data protection regulations, ensuring full compliance with local requirements while maintaining international standards.',
        'local-compliance-title': 'Local Regulatory Compliance',
        'local-compliance-desc': 'Expert guidance on Serbian business regulations, helping organizations navigate local legal requirements and industry standards.',
        'cross-border-title': 'Cross-Border Data Transfer',
        'cross-border-desc': 'Management of international data transfers in compliance with Serbian law and international regulations like GDPR.',
        'documentation-title': 'Documentation & Reporting',
        'documentation-desc': 'Preparation and maintenance of all required documentation and reports in accordance with Serbian legal requirements.',

        // AI Section
        'ai-tech-title': 'AI & Advanced Technology',
        'ai-tech-desc': 'Navigate the complex landscape of artificial intelligence regulations and emerging technologies.',
        'ai-framework-title': 'AI Compliance Framework',
        'ai-framework-desc': 'Implementation of compliance frameworks for AI systems, ensuring ethical and legal operation.',
        'ai-risk-title': 'AI Risk Assessment',
        'ai-risk-desc': 'Comprehensive evaluation of AI systems for potential risks and compliance issues.',
        'algo-audit-title': 'Algorithm Auditing',
        'algo-audit-desc': 'Independent review and validation of AI algorithms for bias and regulatory compliance.',
        'ai-doc-title': 'AI Documentation',
        'ai-doc-desc': 'Development of required documentation for AI systems, including impact assessments and technical specifications.',

        // Data Protection Section
        'data-protection-services-title': 'Data Protection Services',
        'data-protection-services-desc': 'Robust data protection solutions to safeguard your sensitive information.',
        'dpia-title': 'Data Privacy Impact Assessments',
        'dpia-desc': 'Comprehensive evaluation of data processing activities and associated privacy risks.',
        'privacy-design-title': 'Privacy by Design Implementation',
        'privacy-design-desc': 'Integration of privacy considerations throughout the development lifecycle of products and services.',
        'breach-response-title': 'Data Breach Response Planning',
        'breach-response-desc': 'Development and implementation of incident response plans and procedures.',
        'vendor-risk-title': 'Third-Party Risk Management',
        'vendor-risk-desc': 'Assessment and monitoring of vendor compliance with data protection requirements.',

        // Training and Support Section
        'training-support-title': 'Training and Support',
        'training-support-desc': 'Comprehensive training programs and ongoing support services.',
        'employee-training-title': 'Employee Awareness Training',
        'employee-training-desc': 'Customized training programs on data protection, security awareness, and compliance requirements.',
        'dpo-service-title': 'DPO as a Service',
        'dpo-service-desc': 'Outsourced Data Protection Officer services for ongoing compliance management.',
        'compliance-monitoring-title': 'Compliance Monitoring',
        'compliance-monitoring-desc': 'Regular audits and assessments to ensure ongoing compliance with regulatory requirements.',
        'support-title': '24/7 Support',
        'support-desc': 'Round-the-clock assistance for compliance-related queries and incidents.',

        // Privacy Policy Page
        'privacy-policy-title': 'Privacy Policy',
        'privacy-policy-last-updated': 'Last Updated: March 15, 2024',
        'privacy-intro': 'This Privacy Policy describes how CyberLex Compliance ("we," "us," or "our") collects, uses, and protects your personal information.',
        
        'info-collect-title': 'Information We Collect',
        'info-collect-desc': 'We collect information that you provide directly to us, including:',
        'info-collect-1': 'Name and contact information',
        'info-collect-2': 'Email address',
        'info-collect-3': 'Phone number',
        'info-collect-4': 'Company information',
        'info-collect-5': 'Information provided in forms and correspondence',

        'info-use-title': 'How We Use Your Information',
        'info-use-desc': 'We use the collected information for:',
        'info-use-1': 'Providing our services',
        'info-use-2': 'Communicating with you',
        'info-use-3': 'Improving our services',
        'info-use-4': 'Legal compliance',
        'info-use-5': 'Marketing (with your consent)',

        'info-share-title': 'Information Sharing',
        'info-share-desc': 'We do not sell your personal information. We may share your information with:',
        'info-share-1': 'Service providers who assist in our operations',
        'info-share-2': 'Legal authorities when required by law',
        'info-share-3': 'Professional advisors and consultants',

        'data-security-title': 'Data Security',
        'data-security-desc': 'We implement appropriate technical and organizational measures to protect your personal information.',

        'data-rights-title': 'Your Rights',
        'data-rights-desc': 'You have the right to:',
        'data-rights-1': 'Access your personal information',
        'data-rights-2': 'Correct inaccurate information',
        'data-rights-3': 'Request deletion of your information',
        'data-rights-4': 'Object to processing',
        'data-rights-5': 'Data portability',

        'contact-privacy-title': 'Contact Us About Privacy',
        'contact-privacy-desc': 'For privacy-related inquiries, please contact us at:',

        'mobile-title': 'COMPLIANCE'
    },
    sr: {
        // Navigation
        'nav-home': 'Početna',
        'nav-about': 'O nama',
        'nav-services': 'Usluge',
        'nav-expertise': 'Stručnost',
        'nav-contact': 'Kontakt',

        // Mobile Titles
        'mobile-title': 'USKLAĐENOST',
        'mobile-services-title': 'USLUGE',

        // Hero Section
        'hero-subtitle': 'Pružamo specijalizovane konsultantske usluge u oblasti GDPR-a, IT prava, srpskog zakona o zaštiti podataka i AI regulativa. Bez obzira da li ste startup, velika korporacija ili državni organ, pružamo prilagođena rešenja koja odgovaraju vašim jedinstvenim potrebama.',
        'hero-cta': 'Započnite',

        // About Section
        'about-title': 'O nama',
        'legal-expert': 'Pravni stručnjak',
        'dpo-expert': 'DPO & IT stručnjak',
        'uros-bio': 'Iskusni pravnik specijalizovan za različite pravne oblasti sa velikim iskustvom u državnim organima, gde je radio kao advokat za prava pacijenata. Njegovo raznovrsno iskustvo omogućava mu da pruži sveobuhvatna pravna rešenja u više domena.',
        'darko-bio': 'Uspešan profesionalac sa dvostrukom ekspertizom u IT-u i zaštiti podataka. Radio je kao QA direktor i službenik za zaštitu podataka za više kompanija, Darko donosi jedinstvenu kombinaciju tehničkog znanja i ekspertize u privatnosti kako bi osigurao sveobuhvatna rešenja za usklađenost.',
        'linkedin-connect': 'Povežite se na LinkedIn-u',

        // Services Section
        'services-title': 'Naše usluge',
        'gdpr-title': 'GDPR usklađenost',
        'gdpr-desc': 'Sveobuhvatne GDPR strategije implementacije i usklađenosti prilagođene potrebama vaše organizacije. Osiguravamo da vaše prakse zaštite podataka ispunjavaju EU standarde.',
        'it-law-title': 'IT pravo',
        'it-law-desc': 'Stručno pravno vođenje za digitalna preduzeća i tehnološke kompanije, uključujući licenciranje softvera, cloud usluge i digitalne ugovore.',
        'data-protection-title': 'Zaštita podataka',
        'data-protection-desc': 'Specijalizovana ekspertiza u implementaciji srpskog zakona o zaštiti podataka, osiguravajući lokalnu usklađenost uz ispunjavanje međunarodnih standarda.',
        'ai-title': 'AI regulative',
        'ai-desc': 'Navigirajte kroz evolvirajući pejzaž AI pravnih okvira uz naše stručno vođenje o usklađenosti i upravljanju rizicima.',
        'learn-more': 'Saznajte više o našim uslugama',

        // Expertise Section
        'expertise-title': 'Zašto nas izabrati',
        'expert-knowledge-title': 'Stručno znanje',
        'expert-knowledge-desc': 'Naš tim kombinuje duboku pravnu ekspertizu sa tehničkim razumevanjem, osiguravajući sveobuhvatna rešenja za vaše potrebe usklađenosti.',
        'tailored-solutions-title': 'Prilagođena rešenja',
        'tailored-solutions-desc': 'Razvijamo prilagođene strategije usklađenosti koje se savršeno uklapaju sa vašim poslovnim ciljevima i industrijskim zahtevima.',
        'track-record-title': 'Dokazani rezultati',
        'track-record-desc': 'Sa godinama iskustva u pomoći preduzećima da se snađu u složenim propisima, pružamo pouzdana i efikasna rešenja za usklađenost.',

        // Hero Section Letters
        'left-1': 'U',
        'left-2': 'S',
        'left-3': 'K',
        'left-4': 'L',
        'left-5': 'A',
        'right-1': 'Đ',
        'right-2': 'E',
        'right-3': 'N',
        'right-4': 'O',
        'right-5': 'S',
        'right-6': 'T',

        // Hero Section Letters - Services
        'services-1': 'U',
        'services-2': 'S',
        'services-3': 'L',
        'services-4': '',
        'services-5': 'U',
        'services-6': 'G',
        'services-7': 'E',
        'services-8': '',

        // Contact Section
        'contact-title': 'Kontaktirajte nas',
        'contact-subtitle': 'Razgovarajmo o tome kako možemo pomoći vašem poslovanju da se snađe u složenom pravnom pejzažu',
        'name-placeholder': 'Vaše ime',
        'email-placeholder': 'Vaš email',
        'service-placeholder': 'Izaberite uslugu',
        'message-placeholder': 'Vaša poruka',
        'send-message': 'Pošaljite poruku',

        // Footer
        'email-us': 'Pošaljite email',
        'call-us': 'Pozovite nas',
        'visit-us': 'Posetite nas',
        'privacy-policy': 'Politika privatnosti',
        'copyright': '© 2025 CyberLex Compliance. Vaš pouzdani partner u digitalnoj pravnoj usklađenosti.',

        // Cookie Banner
        'cookie-message': 'Koristimo kolačiće da bismo poboljšali vaše iskustvo na našoj web stranici. Nastavljanjem pregledanja, slažete se sa našom upotrebom kolačića. Više o tome kako koristimo kolačiće možete saznati u našoj Politici privatnosti.',
        'accept-cookies': 'Prihvati sve kolačiće',
        'decline-cookies': 'Odbij neesencijalne',

        // Compliance Page
        'services-subtitle': 'Sveobuhvatna pravna i tehnička rešenja za vaše potrebe digitalne usklađenosti',
        
        // Cybersecurity Compliance Section
        'cyber-compliance-title': 'Usklađenost sa sajber bezbednošću',
        'cyber-compliance-desc': 'Sveobuhvatna rešenja za usklađenost prilagođena regulatornim zahtevima vaše industrije.',
        'gdpr-compliance-detail': 'Kompletna procena i implementacija GDPR zahteva, uključujući mapiranje podataka, obaveštenja o privatnosti i upravljanje pristankom.',
        'serbian-law-detail': 'Stručno vođenje o srpskim propisima o zaštiti podataka, osiguravajući lokalnu usklađenost uz održavanje međunarodnih standarda.',
        'iso-title': 'Implementacija ISO 27001',
        'iso-desc': 'Potpuna podrška za implementaciju i održavanje ISO 27001 sertifikacije, uključujući analizu jaza i dokumentaciju.',
        'hipaa-title': 'HIPAA usklađenost',
        'hipaa-desc': 'Rešenja za zaštitu zdravstvenih podataka i usklađenost, uključujući procene rizika i razvoj politika.',

        // Serbian Law Section
        'serbian-law-title': 'Ekspertiza srpskog prava',
        'serbian-law-intro': 'Specijalizovane pravne usluge fokusirane na srpske propise i zahteve usklađenosti.',
        'serbian-dp-law-title': 'Srpski zakon o zaštiti podataka',
        'serbian-dp-law-desc': 'Sveobuhvatna implementacija srpskih propisa o zaštiti podataka, osiguravajući potpunu usklađenost sa lokalnim zahtevima uz održavanje međunarodnih standarda.',
        'local-compliance-title': 'Lokalna regulatorna usklađenost',
        'local-compliance-desc': 'Stručno vođenje o srpskim poslovnim propisima, pomažući organizacijama da se snađu u lokalnim pravnim zahtevima i industrijskim standardima.',
        'cross-border-title': 'Prekogranični prenos podataka',
        'cross-border-desc': 'Upravljanje međunarodnim prenosom podataka u skladu sa srpskim zakonom i međunarodnim propisima poput GDPR-a.',
        'documentation-title': 'Dokumentacija i izveštavanje',
        'documentation-desc': 'Priprema i održavanje sve potrebne dokumentacije i izveštaja u skladu sa srpskim pravnim zahtevima.',

        // AI Section
        'ai-tech-title': 'AI i napredne tehnologije',
        'ai-tech-desc': 'Navigacija kroz kompleksan pejzaž regulativa veštačke inteligencije i novih tehnologija.',
        'ai-framework-title': 'Okvir za usklađenost AI',
        'ai-framework-desc': 'Implementacija okvira za usklađenost AI sistema, osiguravajući etičko i pravno poslovanje.',
        'ai-risk-title': 'Procena rizika AI',
        'ai-risk-desc': 'Sveobuhvatna evaluacija AI sistema za potencijalne rizike i probleme usklađenosti.',
        'algo-audit-title': 'Revizija algoritama',
        'algo-audit-desc': 'Nezavisni pregled i validacija AI algoritama za pristrasnost i regulatornu usklađenost.',
        'ai-doc-title': 'AI dokumentacija',
        'ai-doc-desc': 'Razvoj potrebne dokumentacije za AI sisteme, uključujući procene uticaja i tehničke specifikacije.',

        // Data Protection Section
        'data-protection-services-title': 'Usluge zaštite podataka',
        'data-protection-services-desc': 'Robusna rešenja za zaštitu podataka radi očuvanja vaših osetljivih informacija.',
        'dpia-title': 'Procene uticaja na privatnost podataka',
        'dpia-desc': 'Sveobuhvatna evaluacija aktivnosti obrade podataka i povezanih rizika za privatnost.',
        'privacy-design-title': 'Implementacija privatnosti po dizajnu',
        'privacy-design-desc': 'Integracija razmatranja privatnosti kroz ceo životni ciklus razvoja proizvoda i usluga.',
        'breach-response-title': 'Planiranje odgovora na povrede podataka',
        'breach-response-desc': 'Razvoj i implementacija planova i procedura za odgovor na incidente.',
        'vendor-risk-title': 'Upravljanje rizicima trećih strana',
        'vendor-risk-desc': 'Procena i praćenje usklađenosti dobavljača sa zahtevima zaštite podataka.',

        // Training and Support Section
        'training-support-title': 'Obuka i podrška',
        'training-support-desc': 'Sveobuhvatni programi obuke i usluge kontinuirane podrške.',
        'employee-training-title': 'Obuka zaposlenih',
        'employee-training-desc': 'Prilagođeni programi obuke o zaštiti podataka, bezbednosnoj svesti i zahtevima usklađenosti.',
        'dpo-service-title': 'DPO kao usluga',
        'dpo-service-desc': 'Usluge spoljnog službenika za zaštitu podataka za kontinuirano upravljanje usklađenošću.',
        'compliance-monitoring-title': 'Praćenje usklađenosti',
        'compliance-monitoring-desc': 'Redovne revizije i procene za osiguranje kontinuirane usklađenosti sa regulatornim zahtevima.',
        'support-title': 'Podrška 24/7',
        'support-desc': 'Neprekidna pomoć za upite i incidente vezane za usklađenost.',

        // Privacy Policy Page
        'privacy-policy-title': 'Politika Privatnosti',
        'privacy-policy-last-updated': 'Poslednje ažuriranje: 15. mart 2024.',
        'privacy-intro': 'Ova Politika privatnosti opisuje kako CyberLex Compliance ("mi," "nas," ili "naš") prikuplja, koristi i štiti vaše lične podatke.',
        
        'info-collect-title': 'Informacije koje prikupljamo',
        'info-collect-desc': 'Prikupljamo informacije koje nam direktno dostavljate, uključujući:',
        'info-collect-1': 'Ime i kontakt informacije',
        'info-collect-2': 'Email adresa',
        'info-collect-3': 'Broj telefona',
        'info-collect-4': 'Informacije o kompaniji',
        'info-collect-5': 'Informacije dostavljene u obrascima i prepisci',

        'info-use-title': 'Kako koristimo vaše informacije',
        'info-use-desc': 'Prikupljene informacije koristimo za:',
        'info-use-1': 'Pružanje naših usluga',
        'info-use-2': 'Komunikaciju sa vama',
        'info-use-3': 'Unapređenje naših usluga',
        'info-use-4': 'Pravnu usklađenost',
        'info-use-5': 'Marketing (uz vašu saglasnost)',

        'info-share-title': 'Deljenje informacija',
        'info-share-desc': 'Ne prodajemo vaše lične podatke. Možemo deliti vaše informacije sa:',
        'info-share-1': 'Pružaocima usluga koji pomažu u našem poslovanju',
        'info-share-2': 'Pravnim organima kada to zakon zahteva',
        'info-share-3': 'Profesionalnim savetnicima i konsultantima',

        'data-security-title': 'Bezbednost podataka',
        'data-security-desc': 'Primenjujemo odgovarajuće tehničke i organizacione mere za zaštitu vaših ličnih podataka.',

        'data-rights-title': 'Vaša prava',
        'data-rights-desc': 'Imate pravo da:',
        'data-rights-1': 'Pristupite svojim ličnim podacima',
        'data-rights-2': 'Ispravite netačne informacije',
        'data-rights-3': 'Zahtevate brisanje vaših informacija',
        'data-rights-4': 'Prigovorite obradi',
        'data-rights-5': 'Prenosivost podataka',

        'contact-privacy-title': 'Kontaktirajte nas u vezi sa privatnošću',
        'contact-privacy-desc': 'Za upite vezane za privatnost, molimo vas da nas kontaktirate na:',

        'mobile-title': 'USKLAĐENOST'
    }
}; 