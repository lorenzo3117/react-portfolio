import { ILinkTypes, IProject } from "../types/project.type";

export const PROJECTS: IProject[] = [
  {
    id: 1,
    image: "./react.png",
    name: "Intership MyGamePlan.ai",
    description:
      "For five months, I did an internship MyGamePlan.ai. With the web application built with React and Typescript, football clubs can analyze and plan their matches. The players can use the mobile application, developed with React Native, to see their stats and improve themselves. At this internship I learned advanced React, Typescript, NodeJS, ExpressJS, MongoDB and React Native. Working in a team was also a new experience for me.",
    links: [
      {
        type: ILinkTypes.WEBSITE,
        url: "https://www.mygameplan.ai/",
      },
    ],
  },
  {
    id: 2,
    image: "./svelte.png",
    name: "Svelte playground",
    description:
      "Simple website created to learn Svelte. Currently there is only a TODO list. More to come!",
    links: [
      {
        type: ILinkTypes.WEBSITE,
        url: "https://github.com/lorenzo3117/svelte-playground",
      },
      {
        type: ILinkTypes.GITHUB,
        url: "https://svelte-playground-rho.vercel.app/",
      },
    ],
  },
  {
    id: 3,
    image: "./python.png",
    name: "Multipurpose Python website",
    description:
      "Small website made with Flask and Bootstrap to refresh my Python. It allows you to show your own projects in a table, have personalized passwords generated and see all kinds of information about a text file.",
    links: [
      {
        type: ILinkTypes.GITHUB,
        url: "https://github.com/lorenzo3117/multipurpose-python-website",
      },
    ],
  },

  {
    id: 4,
    image: "./python.png",
    name: "Python tekst zoeker",
    description:
      "This script will search for text that you can type in. It zan in all txt files in the current folder and all its subfolders. If any files containing the text are found, you can copy them into a folder of your choice if you wish. This was just a small personal project.",
    links: [
      {
        type: ILinkTypes.GITHUB,
        url: "https://github.com/lorenzo3117/python-text-finder",
      },
    ],
  },
  {
    id: 5,
    image: "./saskia-kapsalon.png",
    name: "Saskia Kapsalon",
    description:
      "Semester project for my first year in college. We had to create a simple static website for a small business. Me and my teammates choose 'Saskia Hair Salon', a hair salon in my town.",
    links: [
      {
        type: ILinkTypes.WEBSITE,
        url: "https://lorenzo3117.github.io/saskia-kapsalon/",
      },
      {
        type: ILinkTypes.GITHUB,
        url: "https://github.com/lorenzo3117/saskia-kapsalon",
      },
    ],
  },
  {
    id: 6,
    image: "./python.png",
    name: "Python sortering scripts",
    description:
      "During my senior year in high school, we had to make a paper related to mathematics. I then decided to research sorting algorithms because it would give me a good foundation for when I went to college. These algorithms were created in Python. The research was very interesting and fun to do. I also got a good grade for it, win-win situation!",
    links: [
      {
        type: ILinkTypes.GITHUB,
        url: "https://github.com/lorenzo3117/python-sorting-scripts",
      },
    ],
  },
];
