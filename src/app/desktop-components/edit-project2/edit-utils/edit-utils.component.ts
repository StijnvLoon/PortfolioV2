import { Component, Input, OnInit } from '@angular/core';
import { languageArray } from 'src/models/dict/Dictionary';
import { TextValue } from 'src/models/dict/TextValue';
import { Project } from 'src/models/project/Project';
import { ProjectUrl } from 'src/models/project/Url';
import { DialogService } from 'src/services/dialog.service';
import { LanguageService } from 'src/services/language.service';
import { ProjectService } from 'src/services/project.service';

@Component({
    selector: 'app-edit-utils',
    templateUrl: './edit-utils.component.html',
    styleUrls: ['./edit-utils.component.scss'],
})
export class EditUtilsComponent implements OnInit {

    @Input() project: Project
    @Input() lang: string

    public availableKeywords: TextValue[] = []
    public languages: string[]

    constructor(
        private dialogService: DialogService,
        public languageService: LanguageService,
        private projectService: ProjectService
    ) { }

    ngOnInit(): void {
        this.projectService.get((projects: Project[]) => {
            projects.forEach((p) => {
                this.availableKeywords = this.availableKeywords.concat(p.keywords)
            })
        }, (error: string) => { })
        this.languages = languageArray()
    }

    pickLogo() {
        this.dialogService.showFilePickerDialog(
            'file_picker_choose_image',
            '',
            (url: string) => {
                if (url) this.project.logos.push(url)
            }
        )
    }

    removeLogo(index: number) {
        this.project.logos.splice(index, 1)
    }

    addKeyword() {
        this.project.keywords.push(new TextValue({}))
    }

    removeKeyword(index: number) {
        this.project.keywords.splice(index, 1)
    }

    addUrl() {
        this.project.urls.push(new ProjectUrl({
            name: new TextValue({}),
            url: ''
        }))
    }

    removeUrl(index: number) {
        this.project.urls.splice(index, 1)
    }

}
