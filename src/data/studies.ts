export const studies = [
  {
    title: "Introduction to Cybersecurity",
    institution: "Cisco Networking Academy",
    description:
      "",
    tags: [
      "Cyber Best Practices",
      "Cybersecurity",
      "Network Vulnerabilities",
      "Privacy and Data Confidentiality",
      "Threat Detection",
    ],
      badgeImage : "https://images.credly.com/size/220x220/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
      badgeAlt : "IntroToCyberImage",  
      url: "https://www.credly.com/badges/8a320063-ede4-472b-9dd6-028c22e6825d/public_url",       
  },
  {
    title: "Introduction to Internet of Things",
    institution: "Cisco Networking Academy",
    description:
    "",
    tags: [
      "Digital Transformation",
      "Internet of Things",
    ],
    badgeImage : "https://images.credly.com/size/220x220/images/fce226c2-0f13-4e17-b60c-24fa6ffd88cb/Intro2IoT.png",
    badgeAlt : "IntroToIoTImage",  
    url: "https://www.credly.com/badges/5d99ac01-022f-4636-b602-add12209d5c3/public_url", 
  },
];

export type StudyItem = (typeof studies)[number];

