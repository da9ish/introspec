import { Project } from "./Project";

export interface User {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  projects: Project[];
  token: string;
}
