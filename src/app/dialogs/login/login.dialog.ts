import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TextValue } from 'src/models/Dictionary';
import { AuthService } from 'src/services/auth.service';
import { LanguageService } from 'src/services/language.service';

export interface DialogData {
    title: string | TextValue
}

@Component({
    selector: 'login-dialog',
    templateUrl: './login.dialog.html',
    styleUrls: ['../dialog.scss']
})
export class LoginDialog {

    loginForm = new FormGroup({
        usernameControl: new FormControl('', [
            Validators.required,
        ]),
        passwordControl: new FormControl('', [
            Validators.required,
        ])
    })
    isLoading: boolean = false

    constructor(
        public dialogRef: MatDialogRef<LoginDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
        public languageService: LanguageService,
        public authService: AuthService
    ) { }

    close(): void {
        this.dialogRef.close(false)
    }

    submit() {
        this.isLoading = true
        this.authService.login(
            this.loginForm.value.usernameControl,
            this.loginForm.value.passwordControl,
            () => {
                this.isLoading = false
                this.dialogRef.close(true)
            },
            () => {
                this.isLoading = false

            }
        )
    }
}