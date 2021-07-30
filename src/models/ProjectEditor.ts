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

    getKeyword(index: number): string {
        return this.project.keywords[index][Language[this.selectedLanguage]]
    }

    setKeyword(index: number, string: string) {
        this.project.keywords[index][Language[this.selectedLanguage]] = string
    }

    getUrlName(index: number): string {
        return this.project.urls[index].name[Language[this.selectedLanguage]]
    }

    setUrlName(index: number, string: string) {
        this.project.urls[index].name[Language[this.selectedLanguage]] = string
    }

    getImageTitle(index: number): string {
        return this.project.images[index].title[Language[this.selectedLanguage]]
    }

    setImageTitle(index: number, string: string) {
        this.project.images[index].title[Language[this.selectedLanguage]] = string
    }

    getQuestionQuestion(index: number): string {
        return this.project.questions[index].question[Language[this.selectedLanguage]]
    }

    setQuestionQuestion(index: number, string: string) {
        this.project.questions[index].question[Language[this.selectedLanguage]] = string
    }

    getQuestionAnswer(index: number): string {
        return this.project.questions[index].answer[Language[this.selectedLanguage]]
    }

    setQuestionAnswer(index: number, string: string) {
        this.project.questions[index].answer[Language[this.selectedLanguage]] = string
    }
}