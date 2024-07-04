import {
  FifthCard,
  FirstCard,
  FourthCard,
  SecondCard,
  SixthCard,
  ThirdCard,
} from "../ProjectCards/PhotoCard";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];
export const projects = [
  {
    id: 1,
    title: "BrainRush 2K24",
    des: "A web-based platform designed to streamline the organization and management of offline events with an integrated quiz portal. It provides essential features such as user registration, Google authentication, hall ticket generation, offline payment processing, and event management. It also includes an admin portal for event coordination and logistics.",
    card: FirstCard,
    link: "https://github.com/ishika-ghosh/brainrush-2k24-test",
    color: "#3532ea33",
    imageUrl: "./projects/img3.png",
    liveLink: "https://brainrushtest.vercel.app/login",
    iconLists: [
      "./tech/mongodb.png",
      "./tech/nextjs.svg",
      "./tech/tailwind.png",
      "./tech/redux.png",
    ],
  },
  {
    id: 2,
    title: "TreasuredTales",
    des: "TreasuredTales is a captivating web app designed to help you store, share, and cherish your most treasured memories and stories with others. The app allows you to connect and collaborate with other users by creating groups, enabling you to share and celebrate common memories together. ",
    card: SecondCard,
    link: "https://github.com/ishika-ghosh/TreasuredTales",
    color: "#d138f737",
    imageUrl: "./projects/img1.png",
    liveLink: "https://treasured-tales-5998.vercel.app/",
    iconLists: [
      "./tech/re.svg",
      "./tech/nodejs.png",
      "./tech/mongodb.png",
      "./tech/express.svg",
    ],
  },
  {
    id: 3,
    title: "Pragati 2K23",
    des: "A website for a college winter tech fest, ensuring that it met all necessary requirements.Done the routing and logical rendering of different pages. Which was a great success and got overwhelmingly positive feedback from the organizing committee.",
    card: ThirdCard,
    link: "https://github.com/ishika-ghosh/PRAGATI",
    color: "#f7389437",
    imageUrl: "./projects/img2.png",
    liveLink: "https://pragati-2023.web.app/",
    iconLists: ["./tech/re.svg"],
  },
  // {
  //   id: 4,
  //   title: "Animated Apple Iphone 3D Website",
  //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
  //   card: FourthCard,
  //   link: "/ui.apple.com",
  //   color: "#38c1f737",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1517476417305-21d49f984355?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTg0MzUzM3w&ixlib=rb-4.0.3&q=85&w=2160",
  // },
  // {
  //   id: 5,
  //   title: "Animated Apple Iphone 3D Website",
  //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
  //   card: FifthCard,
  //   link: "/ui.apple.com",
  //   color: "#38f73e37",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1517476417305-21d49f984355?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTg0MzUzM3w&ixlib=rb-4.0.3&q=85&w=2160",
  // },
  // {
  //   id: 6,
  //   title: "Animated Apple Iphone 3D Website",
  //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
  //   card: SixthCard,
  //   link: "/ui.apple.com",
  //   color: "#fb772b37",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1517476417305-21d49f984355?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTg0MzUzM3w&ixlib=rb-4.0.3&q=85&w=2160",
  // },
];
export const experiences = [
  {
    title: "Technical Intern",
    company_name: "Tutoraj (Tamil Nadu, India)",
    date: "Sep 2020 - Nov 2020",
    points: "Developing and maintaining web applications using React.js ",
    tech: ["MySql", "PHP", "Wordpress", "Javascript"],
  },
  {
    title: "Backend Developer",
    company_name: "SwiftSku (California, United States)",
    date: "Jul 2022 - Sep 2022",
    points: "Developing and maintaining web applications using React.js ",
    tech: ["Python", "FAST API", "Salesforce API"],
  },
  {
    title: "Software Engineer Intern",
    company_name: "GeoTech Infoservices Pvt Ltd. (Kolkata, India)",
    date: "Jan 2023 - Jun 2023",
    points: "Developing and maintaining web applications using React.js ",
    tech: ["Java", "SpringBoot", "React", " AWS"],
  },
  {
    title: "Software Engineer",
    company_name: "GeoTech Infoservices Pvt Ltd. ",
    date: "Apr 2024 - Present",
    points: "Developing and maintaining web applications using React.js ",
    tech: ["Microservice", "GRPC", "Rabbit MQ ", "REST API"],
  },
];
export const data = [
  {
    title: "About Me",
    speed: 0.6,
  },
  {
    title: "My name is Purnadip Manna. I am a Software Engineer at ",
    speed: 0.8,
  },
  {
    title:
      "GeoTech Infoservices Private Limited. I am from Howrah, West Bengal, India. ",
    speed: 0.7,
  },
  {
    title: "I have completed my B.Tech (in Computer Science & Engineering)",
    speed: 0.8,
  },
  {
    title:
      "in 2023 from Techno International New Town, Kolkata.I'm a software engineer who loves bringing ideas to life by building applications from",
    speed: 0.9,
  },
  {
    title:
      " scratch.I find it rewarding to design strong foundations for these applications, making them efficient and adaptable as they grow. ",
    speed: 0.9,
  },
  {
    title:
      "I write clear, well-organized code that's easy for everyone to understand, including myself and my teammates. ",
    speed: 1,
  },
];
export const socialMedia = [
  {
    id: 1,
    icon: LuGithub,
    link: "https://github.com/ishika-ghosh",
  },
  {
    id: 2,
    icon: FaLinkedinIn,
    link: "https://github.com/ishika-ghosh",
  },
  {
    id: 3,
    icon: FaTwitter,
    link: "https://github.com/ishika-ghosh",
  },
];
export const technologies = [
  {
    name: "HTML 5",
    icon: "./tech/html.png",
  },
  {
    name: "CSS 3",
    icon: "./tech/css.png",
  },
  {
    name: "JavaScript",
    icon: "./tech/javascript.png",
  },
  {
    name: "TypeScript",
    icon: "./tech/typescript.png",
  },
  {
    name: "React JS",
    icon: "./tech/reactjs.png",
  },
  {
    name: "Redux Toolkit",
    icon: "./tech/redux.png",
  },
  {
    name: "Tailwind CSS",
    icon: "./tech/tailwind.png",
  },
  {
    name: "Node JS",
    icon: "./tech/nodejs.png",
  },
  {
    name: "MongoDB",
    icon: "./tech/mongodb.png",
  },
  {
    name: "Three JS",
    icon: "./tech/threejs.svg",
  },
  {
    name: "git",
    icon: "./tech/git.png",
  },
];
