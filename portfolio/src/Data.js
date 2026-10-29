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
    name: "Generative AI",
    category: "Artificial Intelligence",
    description: "Exploring LLMs and building AI-powered applications.",
    status: "Currently Learning",
    progress: 30,
  },
  {
    name: "Spring Boot",
    category: "Backend Development",
    description: "Practicing REST APIs, security, and backend architecture.",
    status: "Practicing",
    progress: 75,
  },
  {
    name: "React.js",
    category: "Frontend Development",
    description: "Building responsive and interactive web applications.",
    status: "Practicing",
    progress: 70,
  },
];

export { navItems, skillCategories, projects, socials, learningSkills };
