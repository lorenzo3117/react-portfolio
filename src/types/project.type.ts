export interface IProject {
  id: number;
  image: string;
  name: string;
  description: string;
  links: ILink[];
}

export enum ILinkTypes {
  WEBSITE = "WEBSITE",
  GITHUB = "GITHUB",
}

export interface ILink {
  type: ILinkTypes;
  url: string;
}
