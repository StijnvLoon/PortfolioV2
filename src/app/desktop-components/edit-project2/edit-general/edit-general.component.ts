import { Component, Input, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Language } from 'src/models/dict/Dictionary';
import { TextValue } from 'src/models/dict/TextValue';
import { Project } from 'src/models/project/Project';
import { DialogService } from 'src/services/dialog.service';
import { LanguageService } from 'src/services/language.service';
import { ProjectService } from 'src/services/project.service';

@Component({
    selector: 'app-edit-general',
    templateUrl: './edit-general.component.html',
    styleUrls: ['./edit-general.component.scss']
})
export class EditGeneralComponent implements OnInit {

    @Input() project: Project
    @Input() lang: string

    public availableStatusses: TextValue[]

    constructor(
        private projectService: ProjectService,
        public languageService: LanguageService,
        private dialogService: DialogService
    ) { }

    ngOnInit(): void {
        this.projectService.get((projects: Project[]) => {
            this.availableStatusses = projects.map((p) => p.status)
            console.log(this.availableStatusses)
        }, (error: string) => {

        })
    }

    pickImage() {
        this.dialogService.showFilePickerDialog(
            'file_picker_choose_image',
            '',
            (url: string) => {
                if (url) {
                    this.project.coverImage = url
                }
            }
        )
    }

    test($event: MatAutocompleteSelectedEvent) {
        console.log($event)
    }
}
