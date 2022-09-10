import { TextValue, TextValueData } from "../dict/TextValue";
import { ProjectImage, ProjectImageData } from "./Image";
import { ProjectQuestion, ProjectQuestionData } from "./Question";
import { ProjectUrl, ProjectUrlData } from "./Url";

export interface ProjectData {
    id: string
    title: TextValueData
    logos: string[]         // logo urls
    content: string         // Quill object
    status: TextValueData
    coverImage: string
    keywords: TextValueData[]
    images: ProjectImageData[]
    urls: ProjectUrlData[]
    questions: ProjectQuestionData[]
    creationDate: string
}

export class Project {
    id: string
    title: TextValue
    logos: string[]         // logo urls
    content: object[]
    status: TextValue
    coverImage: string
    keywords: TextValue[]
    images: ProjectImage[]
    urls: ProjectUrl[]
    questions: ProjectQuestion[]
    creationDate: Date

    constructor(data: ProjectData) {
        this.id = data.id
        this.title = new TextValue(data.title)
        this.logos = data.logos
        this.content = JSON.parse(data.content)
        this.status = new TextValue(data.status)
        this.coverImage = data.coverImage
        this.keywords = data.keywords.map((data) => new TextValue(data))
        this.images = data.images.map((data) => new ProjectImage(data))
        this.urls = data.urls.map((data) => new ProjectUrl(data))
        this.questions = data.questions.map((data) => new ProjectQuestion(data))
        this.creationDate = new Date(data.creationDate)
    }
}

