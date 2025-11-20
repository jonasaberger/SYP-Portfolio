export const skills = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/></svg>`,
    title: "Softwareentwicklung",
    description:
      "Entwicklung robuster Anwendungen mit C#, Java und Python; saubere Code-Strukturen, Testbarkeit und wartbare Architekturen im Fokus.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 17l-5-5 5-5v3l-2 2 2 2v3zm8-10l5 5-5 5v-3l2-2-2-2V7z"/></svg>`,
    title: "Frontend-Entwicklung",
    description:
      "Moderne Web-UIs mit React; Grundlagen in Angular sowie weitere Frameworks wie C#-Razor Pages oder JavaFX für Desktop-Anwendungen.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a3 3 0 110 6 3 3 0 010-6zm0 6v6m0 0a3 3 0 100 6 3 3 0 000-6zm0 0a3 3 0 10-6 0 3 3 0 006 0zm6 0a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
    title: "Backend & Datenbanken",
    description:
      "API-Entwicklung, Business-Logik und Datenmodellierung; Erfahrung mit SQL- und NoSQL-Datenbanken sowie performanten Abfragen und Datenstrukturen.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C7 3 4 4.79 4 7v10c0 2.21 3 4 8 4s8-1.79 8-4V7c0-2.21-3-4-8-4zm0 2c3.87 0 6 .93 6 2s-2.13 2-6 2-6-.93-6-2 2.13-2 6-2zm0 6c3.87 0 6 .93 6 2s-2.13 2-6 2-6-.93-6-2 2.13-2 6-2z"/></svg>`,
    title: "Netzwerke & Infrastruktur",
    description:
      "Planen, Abbilden und Aufbau von Netzwerken; praktische Umsetzung und Simulationen mit Cisco Packet Tracer.",
  },
];


export type Skill = (typeof skills)[number];

