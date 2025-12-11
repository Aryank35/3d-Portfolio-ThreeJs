const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Projects Completed" },
  { value: 2000, suffix: "+", label: "Hours of Coding" },
  { value: 100000, suffix: "+", label: "Lines of Code Written" },
  { value: 12, suffix: "+", label: "Production Deployments" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "JavaScript Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Three js Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git / GitHub",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    title: "Software Engineer · EvA (Evolutionary Algorithms Pvt. Ltd.)",
    companyShort: "EvA",
    date: "Jan 2025 – Present · Bhubaneswar · Full-time",
    imgPath: "/images/exp-eva.jpg",
    logoPath: "/images/logo-eva.jpg",
    badges: ["Three.js", "TypeScript", "React", "Performance"],
    achievement: "Built 3D configurator features used by 4500+ clients",
    stats: [
      { label: "3D Modules", value: "3+" },
      { label: "Clients", value: "4500+" },
    ],
    responsibilities: [
      "Worked on advanced fenestration configurators using Three.js and TypeScript.",
      "Built reusable, modular React components improving UI performance and load time.",
      "Implemented real-time visualization updates for configurator components.",
    ],
  },

  {
    title: "Software Developer Intern · HashedBit Innovations",
    companyShort: "HashedBit",
    date: "Jul 2024 – Aug 2024 · Remote",
    imgPath: "/images/exp-hashedbit.jpg",
    logoPath: "/images/logo-hashedbit.jpg",
    badges: ["React", "Bootstrap", "Forms"],
    achievement: "Delivered hospital portal pages & improved form UX",
    stats: [
      { label: "Pages shipped", value: "7" },
      { label: "Validation flows", value: "4+" },
    ],
    responsibilities: [
      "Implemented UI layouts and responsive pages for the Hospital Portal system.",
      "Built form validations, tables, modals, and filtering functionalities using React.",
      "Collaborated with backend team to consume REST APIs efficiently.",
    ],
  },

  {
    title: "Software Engineer Intern · OCAC Software Pvt. Ltd.",
    companyShort: "OCAC",
    date: "May 2024 – Jun 2024 · Bhubaneswar · On-site",
    imgPath: "/images/exp-ocac.jpg",
    logoPath: "/images/logo-ocac.jpg",
    badges: ["HTML5", "CSS3", "JavaScript"],
    achievement: "Led UI improvements for Hotel Management modules",
    stats: [
      { label: "Pages", value: "12" },
      { label: "Bug fixes", value: "30+" },
    ],
    responsibilities: [
      "Developed UI pages for the Hotel Management System using HTML, CSS & JavaScript.",
      "Improved UX and visual consistency across booking and admin modules.",
      "Assisted the testing team by identifying and resolving front-end issues.",
    ],
  },

  {
    title: "Student Organizer · Tech Lead · Developer · UTSAAH (GITA College)",
    companyShort: "UTSAAH",
    date: "Jan 2024 – Feb 2024 · On-site",
    imgPath: "/images/exp-utsaah.jpg",
    logoPath: "/images/logo-utsaah.jpg",
    badges: ["React", "Google Sheets", "Team Lead"],
    achievement: "Increased event traffic from 800 → 1500 with new web UX",
    stats: [
      { label: "Attendees", value: "1500" },
      { label: "Team size", value: "5" },
    ],
    responsibilities: [
      "Built the complete event website with registration, schedules, results, and gallery pages.",
      "Increased event traffic from 800 → 1500 through improved UI and visibility.",
      "Coordinated with event coordinators and managed a 5-member student tech team.",
    ],
  },
];

const expLogos = [
  { name: "EvA", imgPath: "/images/logo-eva.jpg" },
  { name: "HashedBit", imgPath: "/images/logo-hashedbit.jpg" },
  { name: "OCAC", imgPath: "/images/logo-ocac.jpg" },
  { name: "UtsaaH", imgPath: "/images/logo-utsaah.jpg" },
];

const educationCards = [
  {
    title: "Gandhi Institute Of Technology and Advancement (GITA)",
    logoPath: "/images/logos/gita.png",
    course: "Bachelor of Technology - BTech, Computer Science and Engineering",
    grade: "GRADE: 9.2 CGPA",
    duration: "2021-25",
  },
  {
    title: "Sainik School Bhubaneswar",
    logoPath: "/images/logos/ssb.png",
    course: "CBSE (XII), Science with Computer",
    grade: "GRADE: 83%",
    duration: "2020-21",
  },
  {
    title: "Sainik School Bhubaneswar",
    logoPath: "/images/logos/ssb.png",
    course: "CBSE (X), Science with Computer",
    grade: "GRADE: 83%",
    duration: "2018-19",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    link: "https://www.instagram.com/er.aryan35",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/aryank35/",
  },
];


export {
  words,
  abilities,
  counterItems,
  expCards,
  expLogos,
  educationCards,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
