import { Tag } from "./tag";

export interface Project {
    id: number;
    name: string;
    summary: string;
    description: string;
    projectLink: string;
    pictures: Tag[];
    tags: Tag[];

}