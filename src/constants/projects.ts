import { ILinkTypes, IProject } from "../types/project.type";

export const PROJECTS: IProject[] = [
  {
    id: 1,
    image: "./svelte.png",
    name: "Svelte playground",
    description:
      "Simpele website gemaakt om Svelte te leren. Momenteel is er enkel een TOOD lijstje.",
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
    id: 2,
    image: "./python.png",
    name: "Multipurpose Python website",
    description:
      "Kleine website gemaakt met Flask en Bootstrap om mijn Python te verbetering. Je kan er je eigen projecten tonen in een tabel, gepersonaliseerde wachtwoorden laten generen en allerlei informatie over een tekstbestand zien.",
    links: [
      {
        type: ILinkTypes.GITHUB,
        url: "https://github.com/lorenzo3117/multipurpose-python-website",
      },
    ],
  },

  {
    id: 3,
    image: "./python.png",
    name: "Python tekst zoeker",
    description:
      "Deze script zal naar tekst zoeken die u kan intypen. Het zan in all txt-bestanden in de huidige map en al zijn submappen. Als er bestanden met de tekst gevonden wordt, kunt u deze desgewenst kopiëren in een map naar keuze. Dit was gewoon een klein persoonlijk project.",
    links: [
      {
        type: ILinkTypes.GITHUB,
        url: "https://github.com/lorenzo3117/python-text-finder",
      },
    ],
  },
  {
    id: 4,
    image: "./saskia-kapsalon.png",
    name: "Saskia Kapsalon",
    description:
      "Semester project voor mijn eerste jaar op hogeschool. We moesten een eenvoudige statische website maken voor een klein bedrijf. Ik en mijn teamgenoten kiezen voor 'Saskia Kapsalon', een kapper in mijn stad.",
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
    id: 5,
    image: "./python.png",
    name: "Python sortering scripts",
    description:
      "Tijdens het laatste jaar op de middelbare school moesten we een paper maken in verband met wiskunde. Ik besloot toen om sorteeralgoritmen te onderzoeken, omdat het me een goede basis zou geven voor als ik zou gaan studeren. Deze algoritmen zijn gemaakt in Python. Het onderzoek was erg interessant en leuk om te doen. Ik kreeg er ook een goed cijfer voor, win-win situatie!",
    links: [
      {
        type: ILinkTypes.GITHUB,
        url: "https://github.com/lorenzo3117/python-sorting-scripts",
      },
    ],
  },
];
