import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "Schüler – Informatik (Sekundarstufe II)",
    company: "HTL Saalfelden - Informatik",
    region: "Expositur St.Johann im Pongau, Österreich",
    date: "2021 – Gegenwart",
    description:
      "Ausbildung in der Abteilung Informatik mit ausgezeichneten Jahreszeugnissen (2021–2024). Vertiefung in Softwareentwicklung, Systemtechnik und Webtechnologien.",
    technologies: [
      "C",
      "C#",
      "Java",
      "HTML & CSS",
      "JavaScript",
      "React",
      "Angular",
      "DBs",
      "Figma",
      "JoyPI",
      "Python",
      "SAP Core BT",
    ],
  },
  {
    title: "Praktikant im Informatik-Bereich",
    company: "Foreus Intelligence GmbH",
    region: "Österreich",
    date: "08/2023 – 09/2023",
    description:
      "Analyse von Informationen aus offenen Quellen, Unterstützung bei Backgroundchecks sowie Mitarbeit bei der Analyse und Behebung von Sicherheitslücken.",
    technologies: [
      "OSINT-Tools",
      "Sicherheitsanalyse",
      "Dokumentation",
      "Recherchesysteme",
    ],
  },
  {
    title: "Schüler – Informatik-Mittelschule (Sekundarstufe I)",
    company: "Informatik-Mittelschule Bruck a.d. Großglocknerstraße",
    region: "Österreich",
    date: "2017 – 2021",
    description:
      "Abschluss der Sekundarstufe I mit Auszeichnung. Erste vertiefende Erfahrungen in Informatik und digitalen Technologien.",
    technologies: [
      "Grundlagen Informatik",
      "Office-Anwendungen",
      "Digitale Grundbildung",
      "ECDL-Zertifizierung"
    ],
  },
];


export type WorkItem = (typeof work)[number];

