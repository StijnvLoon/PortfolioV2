import { Language, languageArray } from './Dictionary'
import { Project } from './Project'

export class ProjectEditor {

    public selectedLanguage: Language

    constructor(
        public project?: Project
    ) {
        if (!this.project) {
            this.project = {
                id: "",
                title: {},
                logos: [],
                colors: [],
                content: [],
                status: {},
                coverImage: "",
                keywords: [],
                images: [],
                urls: [],
                questions: []
            }
        }
        this.selectedLanguage = Language[languageArray()[0]]
    }

    getTitle(): string {
        return this.project.title[Language[this.selectedLanguage]]
    }

    setTitle(string: string) {
        this.project.title[Language[this.selectedLanguage]] = string
    }

    getStatus(): string {
        return this.project.status[Language[this.selectedLanguage]]
    }

    setStatus(string: string) {
        this.project.status[Language[this.selectedLanguage]] = string
    }
}