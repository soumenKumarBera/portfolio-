import { IconBrandGithubFilled, IconBrandLinkedinFilled } from "@tabler/icons-react";
import { Braces, Code2, Database, Layers3, Mail } from "lucide-react";

 const navItems = [
    ['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Contact', '#contact'],
  ]

  const skills = [
  { name: 'Java', detail: 'Core Java · OOP · Collections', icon: Code2 },
  { name: 'Spring Boot', detail: 'REST APIs · Spring Security · JWT', icon: Braces },
  { name: 'React', detail: 'React.js · TypeScript · Tailwind CSS', icon: Layers3 },
  { name: 'Databases', detail: 'MySQL · MongoDB · SQL', icon: Database },
]

const projects = [
  {
    number: '01',
    name: 'JobHook',
    type: 'FULL-STACK JOB PORTAL',
    description: 'A job portal connecting applicants and employers, with authentication, job discovery, and role-based workflows.',
    stack: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'React', 'MongoDB'],
    link: 'https://jobportal-frontend-jd13.onrender.com',
    gitHub:'https://github.com/soumenKumarBera/jobPortal-frontend',
    accent: 'from-lime-300/20 via-emerald-400/5 to-transparent',
    mark: 'JH',
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
]

const socials = [
  { label: 'Linedin', href: 'https://linkedin.com/in/soumen-kumar-bera', icon: IconBrandLinkedinFilled },
  { label: 'Github', href: 'https://github.com/soumenKumarBera', icon: IconBrandGithubFilled },
  { label: 'Email', href: 'mailto:your.email@example.com', icon: Mail },
]


  

  export {navItems, skills, projects, socials};