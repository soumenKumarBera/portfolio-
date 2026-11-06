import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
} from "@tabler/icons-react";
import { Braces, Code2, Database, Layers3, Mail } from "lucide-react";

const navItems = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["LearningNew", "#learning"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

const skillCategories = [
  { title: "Programming", skills: ["Java", "OOP", "Collections", "Java 8"] },
  {
    title: "Backend Development",
    skills: ["Spring Boot", "Spring Security", "JWT", "REST APIs"],
  },
  {
    title: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "TypeScript"],
  },
  { title: "Database", skills: ["MySQL", "SQL"] },
  {
    title: "Tools & Styling",
    skills: ["Git", "GitHub", "Tailwind CSS", "Bootstrap", "Mantine UI"],
  },
  // { title: "Problem Solving", skills: ["DSA", "LeetCode", "Problem Solving"] },
];

const projects = [
  {
    number: "01",
    name: "JobHook",
    type: "FULL-STACK JOB PORTAL",
    description:
      "A full-stack job portal that connects job seekers with employment opportunities. Built with secure authentication and a responsive user interface.",
    stack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "React",
      "TypeScript",
      "MongoDB",
      "Tailwind CSS",
    ],
      image:"https://res.cloudinary.com/iyodz61y/image/upload/v1793979669/Screenshot_2026-11-06_210955.png",
  },
  // {
  //   number: '02',
  //   name: 'VillageJobs',
  //   type: 'RURAL EMPLOYMENT PLATFORM',
  //   description: 'A concept for helping local workers discover nearby opportunities across agriculture, dairy, fishing, and other rural jobs.',
  //   stack: ['React', 'Tailwind CSS', 'Spring Boot', 'JWT'],
  //   link: 'https://Code2.com/soumenKumarBera',
  //   accent: 'from-sky-300/20 via-blue-400/5 to-transparent',
  //   mark: 'VJ',
  // },
  // {
  //   number: '03',
  //   name: 'JWT Refresh Flow',
  //   type: 'BACKEND LEARNING PROJECT',
  //   description: 'A hands-on authentication flow exploring access-token creation, refresh-token validation, and issuing a new access token.',
  //   stack: ['Java', 'Spring Boot', 'Spring Security', 'JWT'],
  //   link: 'https://Code2.com/soumenKumarBera',
  //   accent: 'from-violet-300/20 via-fuchsia-400/5 to-transparent',
  //   mark: 'JWT',
  // },
];

const socials = [
  {
    label: "Linedin",
    href: "https://linkedin.com/in/soumen-kumar-bera",
    icon: IconBrandLinkedinFilled,
  },
  {
    label: "Github",
    href: "https://github.com/soumenKumarBera",
    icon: IconBrandGithubFilled,
  },
  { label: "Email", href: "mailto:your.email@example.com", icon: Mail },
];

const learningSkills = [
  {
    name: "Spring AI",
    category: "AI Development",
    description: "Learning to integrate AI models into Java applications.",
    status: "Currently Learning",
    progress: 40,
  },
  {
  name: "SOLID Principles",
  category: "Software Design",
  description: "Learning the five SOLID principles to write clean, maintainable, scalable, and loosely coupled Java applications.",
  status: "Currently Learning",
  progress: 70,
},

{
  name: "Microservices",
  category: "Backend Development",
  description: "Learning to design and build scalable, distributed applications using microservices architecture with Java and Spring Boot.",
  status: "Currently Learning",
  progress: 70,
},
  
  
  
];

export { navItems, skillCategories, projects, socials, learningSkills };
