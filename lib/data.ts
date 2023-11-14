import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiAmazonaws,
  SiSupabase,
  SiFirebase,
  SiRedux,
  SiGit,
  SiDocker,
  SiBootstrap,
  SiSanity,
  SiPrisma,
  SiFlutter,
  SiMysql,
  SiTailwindcss,
  SiPhp,
  SiGithub,
  SiUml,
  SiC,
  SiAssemblyscript,
  SiLaravel,
  SiVercel,
  SiCisco,
  SiNpm,
  SiLinux,
  SiApple,
  SiWindows,
  SiInstagram
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { title } from "process";
import { link } from "fs";

export const skills = [
  {
    icon: SiTypescript,
    text: "TypeScript",
  },
  {
    icon: SiJavascript,
    text: "JavaScript",
  },
  {
    icon: SiReact,
    text: "React",
  },
  {
    icon: SiNextdotjs,
    text: "Next",
  },
  {
    icon: SiTailwindcss,
    text: "Tailwind",
  },
  {
    icon: SiLaravel,
    text: "Laravel",
  },
  {
    icon: SiVercel,
    text: "Vercel",
  },
  {
    icon: SiHtml5,
    text: "HTML5",
  },
  {
    icon: SiCss3,
    text: "CSS3",
  },
  {
    icon: SiNodedotjs,
    text: "Node",
  },
  {
    icon: SiExpress,
    text: "Express",
  },
  {
    icon: SiPython,
    text: "Python",
  },
  {
    icon: BiLogoPostgresql,
    text: "PostgreSQL",
  },
  {
    icon: SiMongodb,
    text: "MongoDB",
  },
  {
    icon: SiNpm,
    text: "npm",
  },
  {
    icon: SiMysql,
    text: "MySQL",
  },
  {
    icon: SiPhp,
    text: "PHP",
  },
  {
    icon: SiC,
    text: "C",
  },
  {
    icon: SiGit,
    text: "Git",
  },
  {
    icon: SiGithub,
    text: "Github",
  },
  {
    icon: SiLinux,
    text: "Linux",
  },
  {
    icon: SiWindows,
    text: "Windows",
  },
  {
    icon: SiApple,
    text: "MacOS",
  },
  {
    icon: SiUml,
    text: "UML",
  },
  {
    icon: SiPrisma,
    text: "Prisma",
  },
  {
    icon: SiBootstrap,
    text: "Bootstrap",
  },
  {
    icon: SiSanity,
    text: "Sanity",
  },
];

export interface Project {
  title: string;
  description: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "Pea-archive",
    description: "Web shop made in Next.js 14 and Sanity to organize the products. Stripe purchase API for shop the products.",
    link: "https://pea-iota.vercel.app",
  },
  {
    title: "Votion",
    description: "This is my personal Notion free clone made with Next.js 13 with Auth and more APIs. Try it and tell me what do you think!",
    link: "https://votion-weld.vercel.app",
  },
  {
    title: "ewentus.com",
    description: "This project is my first frontend application in real context. Is a usefull web application made with a friend using standard front-end stack and js, in PHP framework and MySQL database.",
    link: "https://ewentus.com/",
  },
  {
    title: "Github",
    description: "This is my github profile!",
    link: "https://github.com/leovurchio01",
  }
];



export interface WorkExperience {
  company: string;

  position: string;
  description: string;
  years: string;
}

export const workExperiences: WorkExperience[] = [

  {
    company: "Università degli Studi di Milano",
   
    position: "Student",
    description:
      "Actually studying cyber security for computer systems & networks",
    years: "Sep,2021 - Today",
  },
  {
    company: "Cisco",
   
    position: "Student",
    description:
      "Cisco CCNA degree for Networks architecture",
    years: "Sep,2021 - 2023",
  },
  {
    company: "IIS Leonardo da Vinci, Carate Brianza",
   
    position: "Student",
    description:
      "High school degree in ICT ( Information & Computer Technologies)",
    years: "Sep,2015 - 2021",
  },
];

export const aboutYou = {
  name: "Leonardo Vurchio",
  description:
    "👋  Hi there! I am a software developer who enjoys building amazing applications with code. My journey into software development began with a simple curiosity. I craved a deeper understanding of how things work behind the scenes. Currently, my primary focus is on participating in the vibrant Web3 ecosystem. I am eager to connect with like-minded developers and collaborate on projects that leverage technology to improve our society. Building great software that makes a positive impact is my ultimate goal.I’m always open to new opportunities and challenges, so feel free to reach out if you share a passion for technology and a drive to create meaningful solutions.",
  yearsOfExperience: "5 years",
  location: "Monza, IT",
  email: "leovurchio01@gmail.com",
};

export const logoText = "@leovurchio";

export const marketingHeadlines = {
  mainHeadline: "Welcome to my Portfolio 👨🏽‍💻",
  subHeadline: "Hello there! This portfolio is not just a showcase of my projects and career journey but a testament to my commitment to building secure and robust web solutions.I am actively seeking collaborations with fellow web developers who share a passion for creating secure and reliable web solutions. If you have a project or idea, let's join forces to bring it to life. My cybersecurity background ensures that the solutions we build are not only functional but also resilient against potential threats. Encountering issues with your web development projects? Whether it's a security vulnerability, performance optimization, or debugging challenge, I thrive on problem-solving. With a solid foundation in both web development and cybersecurity, I bring a unique perspective to troubleshoot and fortify your digital presence. Ready to discuss a collaboration or need assistance with a web development challenge? Feel free to reach out. I'm always open to new opportunities, partnerships, and interesting projects.",
};

export const websiteMetadata = {
  title: "Leonardo Vurchio | Web Developement",
  description: "👋 Hey you! Welcome to my portflio.",
};

