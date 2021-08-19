import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TextValue } from 'src/models/Dictionary';
import { LanguageService } from 'src/services/language.service';

export interface DialogData {
    title: string | TextValue
}

@Component({
    selector: 'confirm-dialog',
    templateUrl: './confirm.dialog.html',
    styleUrls: ['../dialog.scss']
})
export class ConfirmDialog {

    constructor(
        public dialogRef: MatDialogRef<ConfirmDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
        public languageService: LanguageService
    ) { }

    close(): void {
        this.dialogRef.close(false)
    }

    submit() {
        this.dialogRef.close(true)
    }
}