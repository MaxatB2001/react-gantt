import { Resource } from "./Resource";

export interface Project {
    id: string,
    title: string,
    users: Resource[]
    isOpen: boolean
}