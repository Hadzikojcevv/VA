export interface NavLinkType {
    label: string,
    link: string
}

export interface Project {
    id: number,
    title: string,
    date: string,
    location: string,
    desc1: string,
    desc2?: string,
    desc3?: string
    gallery: string[]
}