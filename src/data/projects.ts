import PythonIcon from '../assets/logos/Python-logo.svg?raw';
import MongoIcon from '../assets/logos/MongoDB-logo.svg?raw';
import JavaIcon from '../assets/logos/Java-logo.svg?raw';
import CassandraIcon from '../assets/logos/Cassandra-logo.svg?raw';
import PostgreSQLIcon from '../assets/logos/Postgres-logo.svg?raw';
import KubernetesIcon from '../assets/logos/Kubernetes-logo.svg?raw';
import DockerIcon from '../assets/logos/Docker-logo.svg?raw';


import ETL from '../assets/images/EscapeTheLore.png';
import MBOT from '../assets/images/MBOT.png';
import ADVENT from '../assets/images/Adventkalender.png';
import CASSANDRA from '../assets/images/CassandraBenchmark.jpg';


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
    title: "MBOT - Steuerungseinheit",
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
  },
  {
    title: "Cassandra - Benchmarking",
    techStack: "Python, Cassandra, MongoDB, PostgreSQL, Kubernetes, Docker",
    description: "5AHIF 2024/25 DBI - Projekt - HTL St.Johann\nEinführung in Apache Cassandra und Benchmarking im Vergleich zu MongoDB und PostgreSQL.",
    ctaText: "Repo anzeigen →",
    ctaLink: "",
    icon: [PythonIcon, CassandraIcon, MongoIcon, PostgreSQLIcon, KubernetesIcon, DockerIcon],
    image: CASSANDRA
  }
];
