export const siteContent = {
  studio: {
    name: "Studio Fantauzzo",
    fullName: "Studio Consulenza - Rag. Fantauzzo",
    tagline: "Consulenza del lavoro e fiscale a Palermo",
    email: "info@studiofantauzzo.it",
    phone: "091 6823872",
    phoneHref: "tel:+390916823872",
    address: {
      street: "Via Ercole Bernabei 19",
      city: "Palermo",
      postalCode: "90145",
      country: "Italia",
      full: "Via Ercole Bernabei 19, 90145 Palermo",
    },
    url: "https://studiofantauzzo.it",
    portaleUrl: "https://fantauzzo-portal.vercel.app",
  },

  header: {
    logo: "Studio Fantauzzo",
    nav: [
      { label: "Home", href: "/" },
      { label: "Chi Siamo", href: "/chi-siamo" },
      { label: "Servizi", href: "/servizi" },
      { label: "FAQ", href: "/faq" },
      { label: "Contatti", href: "/contatti" },
    ],
    ctaAreaRiservata: "Area Riservata",
  },

  home: {
    hero: {
      title: "Consulenza del Lavoro e Fiscale a Palermo",
      subtitle:
        "Professionalità, trasparenza e assistenza personalizzata per imprese e professionisti.",
      ctaPrimary: "Scopri i servizi",
      ctaPrimaryHref: "/servizi",
      ctaSecondary: "Contattaci",
      ctaSecondaryHref: "/contatti",
      imageAlt:
        "Ufficio professionale di consulenza del lavoro e fiscale a Palermo",
      imageSrc: "/images/hero.webp",
    },
    servicesPreview: {
      title: "I nostri servizi",
      subtitle: "Soluzioni complete per le esigenze del tuo business",
      items: [
        {
          title: "Consulenza del Lavoro",
          description:
            "Gestione completa del personale, buste paga, contratti e adempimenti previdenziali.",
          icon: "briefcase",
        },
        {
          title: "Consulenza Fiscale",
          description:
            "Dichiarazioni dei redditi, P.IVA, IVA e assistenza in materia tributaria.",
          icon: "calculator",
        },
        {
          title: "Assistenza a Imprese e Professionisti",
          description:
            "Supporto continuativo e personalizzato per imprese, professionisti e privati.",
          icon: "users",
        },
      ],
    },
    whyUs: {
      title: "Perché sceglierci",
      items: [
        {
          title: "Esperienza pluriennale",
          description: "Esperienza pluriennale nel settore",
        },
        {
          title: "Assistenza personalizzata",
          description: "Assistenza personalizzata e continuativa",
        },
        {
          title: "Aggiornamento costante",
          description:
            "Aggiornamento costante su normative e adempimenti",
        },
        {
          title: "Approccio trasparente",
          description: "Approccio trasparente e diretto",
        },
      ],
    },
    ctaBanner: {
      title: "Hai bisogno di una consulenza?",
      subtitle: "Contattaci oggi.",
      button: "Prenota ora",
      buttonHref: "/contatti",
    },
  },

  chiSiamo: {
    title: "Chi Siamo",
    intro:
      "Lo Studio Consulenza del Rag. Fantauzzo Francesco è un punto di riferimento a Palermo per la consulenza del lavoro e fiscale. Da anni affianchiamo imprese, professionisti e privati con un approccio professionale, trasparente e orientato alle esigenze del cliente.",
    values: {
      title: "I nostri valori",
      items: [
        {
          title: "Professionalità",
          description:
            "Competenza tecnica e rigore nell'affrontare ogni pratica.",
        },
        {
          title: "Trasparenza",
          description:
            "Comunicazione chiara e onesta in ogni fase del rapporto.",
        },
        {
          title: "Aggiornamento continuo",
          description:
            "Monitoraggio costante delle normative e degli adempimenti.",
        },
        {
          title: "Approccio umano",
          description:
            "Ascolto attivo e relazione diretta con ogni cliente.",
        },
      ],
    },
    profile: {
      name: "Rag. Fantauzzo Francesco",
      role: "Consulente del Lavoro e Fiscale",
      location: "Palermo",
      description:
        "Titolare dello studio, il Rag. Fantauzzo Francesco offre consulenza specializzata in materia di lavoro e tributaria, con un approccio personalizzato e una profonda conoscenza del contesto normativo italiano.",
    },
  },

  servizi: {
    title: "I nostri servizi",
    subtitle:
      "Soluzioni complete per la gestione del personale e degli adempimenti fiscali",
    labor: {
      title: "Consulenza del Lavoro",
      description:
        "Gestione completa delle risorse umane e degli adempimenti previdenziali e assicurativi.",
      items: [
        "Elaborazione buste paga",
        "Assunzioni e cessazioni",
        "Gestione contratti (dipendenti, apprendisti, part-time, co.co.co.)",
        "Comunicazioni obbligatorie UNILAV",
        "CIG/CIGS e ammortizzatori",
        "Pratiche INPS e INAIL",
        "Gestione TFR",
        "Contenzioso del lavoro",
        "Licenziamenti e sanzioni disciplinari",
        "Trasferte e rimborsi",
        "CCNL applicabili",
        "Orario lavoro, ferie, permessi",
        "CUD / Certificazione Unica",
      ],
    },
    fiscal: {
      title: "Consulenza Fiscale e Tributaria",
      description:
        "Assistenza completa in materia fiscale e tributaria per privati, professionisti e imprese.",
      items: [
        "730 e Modello Redditi PF",
        "Dichiarazioni redditi persone giuridiche",
        "Apertura e chiusura Partita IVA",
        "Regime forfettario",
        "Liquidazioni IVA periodiche",
        "Dichiarazione IVA annuale",
        "Modello 770",
        "ISA",
        "Ravvedimento operoso",
        "Contenzioso tributario (CTP, CTR)",
        "Assistenza verifiche fiscali (AdE, GdF)",
        "Agevolazioni fiscali e crediti d'imposta",
        "Successioni e donazioni",
        "IMU/TASI/TARI",
        "Visure catastali",
      ],
    },
  },

  faq: {
    title: "Domande Frequenti",
    subtitle: "Risposte alle domande più comuni su fisco, lavoro e adempimenti",
    items: [
      {
        question: "Quanto costa aprire una Partita IVA?",
        answer:
          "I costi per l'apertura di una Partita IVA variano in base al regime fiscale scelto e agli adempimenti richiesti. Contattaci per una consulenza personalizzata e un preventivo su misura.",
      },
      {
        question:
          "Qual è la differenza tra regime forfettario e regime ordinario?",
        answer:
          "Il regime forfettario prevede un'aliquota fissa e semplificazioni contabili, ed è riservato a chi rientra nei requisiti di legge. Il regime ordinario applica le aliquote IRPEF progressive e richiede una contabilità più articolata. Ti aiutiamo a valutare quale regime conviene al tuo caso.",
      },
      {
        question: "Entro quando va presentata la dichiarazione dei redditi?",
        answer:
          "Le scadenze variano in base al tipo di dichiarazione e al metodo di invio. Per il Modello 730 e il Modello Redditi PF le date sono generalmente tra aprile e novembre. Ti assistiamo nel rispetto di tutte le scadenze fiscali.",
      },
      {
        question: "Come funziona il TFR e quando spetta al dipendente?",
        answer:
          "Il Trattamento di Fine Rapporto è una quota annua accantonata dal datore di lavoro. Spetta al dipendente al termine del rapporto di lavoro, salvo casi di anticipazione previsti dalla legge.",
      },
      {
        question: "Cosa succede se non pago le tasse in tempo?",
        answer:
          "Il ritardo nel pagamento comporta l'applicazione di sanzioni e interessi. In alcuni casi è possibile regolarizzare la posizione tramite ravvedimento operoso. Contattaci per valutare le opzioni disponibili.",
      },
      {
        question: "Posso assumere un dipendente senza avere una società?",
        answer:
          "Sì, anche i lavoratori autonomi e i titolari di Partita IVA possono assumere dipendenti, rispettando gli adempimenti previsti dalla normativa sul lavoro. Ti guidiamo in tutte le fasi del processo di assunzione.",
      },
      {
        question:
          "Cos'è la Certificazione Unica (CU) e quando viene rilasciata?",
        answer:
          "La Certificazione Unica riepiloga i redditi e le ritenute dell'anno precedente. Viene rilasciata dal datore di lavoro o dall'INPS entro il 16 marzo di ogni anno ed è necessaria per la compilazione del 730 o del Modello Redditi.",
      },
      {
        question:
          "Ho ricevuto un avviso dall'Agenzia delle Entrate: cosa devo fare?",
        answer:
          "Non ignorare l'avviso. Contattaci subito: analizzeremo la situazione e ti assisteremo nella risposta all'Agenzia delle Entrate o nella definizione della controversia.",
      },
      {
        question: "Quali documenti servono per elaborare le buste paga?",
        answer:
          "Servono i dati anagrafici del dipendente, il contratto di lavoro, le presenze/assenze del mese, eventuali straordinari, permessi e malattie. Ti forniamo un elenco completo al momento dell'attivazione del servizio.",
      },
      {
        question:
          "Come funziona il regime forfettario per i nuovi professionisti?",
        answer:
          "I nuovi professionisti possono accedere al regime forfettario con aliquota agevolata per i primi cinque anni, se rispettano i requisiti di fatturato e spese. Valutiamo insieme l'idoneità e gestiamo tutti gli adempimenti.",
      },
    ],
  },

  contatti: {
    title: "Contatti",
    subtitle: "Siamo a tua disposizione per qualsiasi richiesta di consulenza",
    form: {
      name: "Nome",
      namePlaceholder: "Il tuo nome",
      email: "Email",
      emailPlaceholder: "La tua email",
      phone: "Telefono",
      phonePlaceholder: "Il tuo telefono (opzionale)",
      phoneOptional: "opzionale",
      subject: "Oggetto",
      subjectPlaceholder: "Seleziona un oggetto",
      subjectOptions: [
        { value: "lavoro", label: "Consulenza del Lavoro" },
        { value: "fiscale", label: "Consulenza Fiscale" },
        { value: "altro", label: "Altro" },
      ],
      message: "Messaggio",
      messagePlaceholder: "Scrivi il tuo messaggio...",
      privacy:
        "Acconsento al trattamento dei dati personali secondo la Privacy Policy",
      submit: "Invia messaggio",
      loading: "Invio in corso...",
      success: "Messaggio inviato con successo. Ti risponderemo al più presto.",
      error:
        "Si è verificato un errore durante l'invio. Riprova o contattaci telefonicamente.",
      unavailable:
        "Il servizio di contatto non è al momento disponibile. Contattaci telefonicamente.",
      sendAnother: "Invia un altro messaggio",
      validation: {
        nameRequired: "Il nome è obbligatorio",
        emailRequired: "L'email è obbligatoria",
        emailInvalid: "Inserisci un indirizzo email valido",
        subjectRequired: "Seleziona un oggetto",
        messageRequired: "Il messaggio è obbligatorio",
        privacyRequired: "Devi accettare la privacy policy",
      },
    },
    sidebar: {
      title: "Informazioni di contatto",
      addressLabel: "Indirizzo",
      phoneLabel: "Telefono",
      emailLabel: "Email",
    },
    map: {
      title: "Dove siamo",
      embedUrl:
        "https://maps.google.com/maps?q=Via+Ercole+Bernabei+19,+90145+Palermo,+Italy&hl=it&z=16&output=embed",
    },
  },

  footer: {
    tagline: "Consulenza del lavoro e fiscale a Palermo",
    columns: {
      studio: "Studio",
      pages: "Pagine",
      contacts: "Contatti",
      legal: "Note legali",
    },
    legal: {
      privacy: "Privacy Policy",
      cookies: "Cookie Policy",
      piva: "P.IVA — Da inserire",
    },
    copyright: "© {year} Studio Fantauzzo. Sviluppato dal team QC Tech.",
  },
} as const;

export type SiteContent = typeof siteContent;
