import { Language, languageArray } from './enums/Language'
import { Project } from './Project'

export class ProjectEditor {

    public selectedLanguage: Language
    
    constructor(
        public project: Project
    ) {
        this.selectedLanguage = Language[languageArray()[0]]
    }

    getTitle(): string {
        return this.project.title.get(this.selectedLanguage)
    }

    setTitle(string: string) {
        this.project.title.set(this.selectedLanguage, string)
    }
}