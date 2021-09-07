import { User } from "./User";

export interface Project {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  description: string;
  status: "Draft" | "Published";
  apiEndpoint: string;
  apiConfig: any;
  themeConfig: any;
  visibility: boolean;
  domainConfig: any;
  owner: User;
}

export interface CreateProjectInput {
  name: string;
  description?: string;
  apiEndpoint: string;
  apiConfig: any;
  themeConfig: any;
  visibility: boolean;
  domainConfig: any;
}
