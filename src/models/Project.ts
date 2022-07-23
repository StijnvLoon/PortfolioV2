import { TextValue } from "./Dictionary";

export interface Project {
    id: string
    title: TextValue
    logos: string[]         //logo urls
    colors: string[]        //color hex codes
    content: Paragraph[]
    status: TextValue
    coverImage: string
    keywords: TextValue[]
    images: Image[]
    urls: Url[]
    questions: Question[],
    creationDate: Date
}

export interface Paragraph {
    title: TextValue
    text: TextValue
    content?: Paragraph[]
}

export interface Image {
    title: TextValue
    url: string
}

export interface Url {
    name: TextValue
    url: string
}

export interface Question {
    question: TextValue
    answer: TextValue
}