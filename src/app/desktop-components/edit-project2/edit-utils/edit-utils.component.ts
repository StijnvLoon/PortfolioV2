import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/models/project/Project';
import { DialogService } from 'src/services/dialog.service';
import { LanguageService } from 'src/services/language.service';

@Component({
    selector: 'app-edit-utils',
    templateUrl: './edit-utils.component.html',
    styleUrls: ['./edit-utils.component.scss'],
})
export class EditUtilsComponent implements OnInit {

    @Input() project: Project
    @Input() lang: string

    constructor(
        private dialogService: DialogService,
        public languageService: LanguageService
    ) { }

    ngOnInit(): void {
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

}
