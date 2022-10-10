import { Component, Input, OnInit } from '@angular/core';
import { Language } from 'src/models/dict/Dictionary';
import { TextValue } from 'src/models/dict/TextValue';
import { Project } from 'src/models/project/Project';
import { DialogService } from 'src/services/dialog.service';
import { LanguageService } from 'src/services/language.service';

@Component({
    selector: 'app-edit-general',
    templateUrl: './edit-general.component.html',
    styleUrls: ['./edit-general.component.scss']
})
export class EditGeneralComponent {

    @Input() project: Project
    @Input() lang: string

    constructor(
        public languageService: LanguageService,
        private dialogService: DialogService
    ) { }

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

}
