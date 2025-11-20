import PythonIcon from '../assets/logos/Python-logo.svg?raw';
import MongoIcon from '../assets/logos/MongoDB-logo.svg?raw';
import JavaIcon from '../assets/logos/Java-logo.svg?raw';
import ETL from '../assets/images/EscapeTheLore.png';
import MBOT from '../assets/images/MBOT.png';
import ADVENT from '../assets/images/Adventkalender.png';


export const projects = [
  {
    title: "Escape The Lore",
    techStack: "Python",
    description: "3AHINF 2023/24 SYP Projekt - HTL St.Johann\n2D Action-Game mittels Pygame.",
    ctaText: "Repo anzeigen →",
    ctaLink: "https://github.com/jonasaberger/EscapeTheLore",
    icon: PythonIcon,
    image: ETL
  },
  {
    title: "MBOT - Steuerungseinheit / Backend",
    techStack: "Python, Flask, MongoDB",
    description: "4AHINF 2024/25 SYP Projekt - HTL St.Johann\nEntwicklung einer Backend-Steuerungseinheit für einen autonomen Roboter.",
    ctaText: "Repo anzeigen →",
    ctaLink: "https://github.com/jonasaberger/SYP4_MBOT_G1",
    icon: [PythonIcon, MongoIcon],
    image: MBOT
  },
  {
    title: "Adventkalender - JavaFX-App ",
    techStack: "Java",
    description: "3AHINF 2023/24 SYP Projekt - HTL St.Johann\nEntwicklung einer Adventkalender-App mit JavaFX.",
    ctaText: "Repo anzeigen →",
    ctaLink: "https://github.com/jonasaberger/AdventkalenderSlim",
    icon: [JavaIcon],
    image: ADVENT
  }
];
