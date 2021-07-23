import { Language, languageArray } from './Dictionary'
import { Project } from './Project'

export class ProjectEditor {

    public selectedLanguage: Language
    
    constructor(
        public project: Project
    ) {
        this.selectedLanguage = Language[languageArray()[0]]
    }

    getTitle(): string {
        return this.project.title[Language[this.selectedLanguage]]
    }

    setTitle(string: string) {
        this.project.title[Language[this.selectedLanguage]] = string
    }
}