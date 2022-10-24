import { Component, OnInit } from '@angular/core';
import { changeAnim } from 'src/animations/changeAnim';
import { Language, languageArray } from 'src/models/dict/Dictionary';
import { Project } from 'src/models/project/Project';
import { LanguageService } from 'src/services/language.service';
import { ProjectService } from 'src/services/project.service';

@Component({
    selector: 'desktop-edit-project',
    templateUrl: './edit-project2.component.html',
    styleUrls: ['./edit-project2.component.scss'],
})
export class EditProject2Component implements OnInit {

    public project: Project
    private selectedTab: number = 0
    public selectedLanguage: string
    public languages: string[]

    constructor(
        private projectService: ProjectService,
        public languageService: LanguageService
    ) { 
        this.project = Project.EMPTY()
        this.languages = languageArray()
        this.selectedLanguage = this.languages[0]
    }

    ngOnInit(): void {
    }

    changeTab(index: number) {
        this.selectedTab = index
    }

    tabSelected(index: number) {
        return this.selectedTab == index
    }

    test() {
        console.log(this.project)
    }

}
