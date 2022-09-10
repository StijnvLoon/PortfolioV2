import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TextValue } from "src/models/dict/TextValue";
import { LanguageService } from 'src/services/language.service';
import { FileService } from 'src/services/file.service';
import { StorageItem } from 'src/models/storage/StorageItem';
import { itemsListAnim } from 'src/animations/itemsListAnim';
import { LoaderService } from 'src/services/loader.service';
import { AuthService } from 'src/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogService } from 'src/services/dialog.service';
import { StorageFolder } from 'src/models/storage/StorageFolder';

export interface DialogData {
    title: string | TextValue,
    path: string[],
}

@Component({
    selector: 'file-picker-dialog',
    templateUrl: './file-picker.dialog.html',
    styleUrls: ['./file-picker.dialog.scss', '../dialog.scss'],
    animations: [
        itemsListAnim
    ]
})
export class FilePickerDialog {

    public folders: StorageFolder[] = []
    public items: StorageItem[] = []
    public nameFilter: string = ''

    //TODO
    //create/edit/delete folder?

    constructor(
        public dialogRef: MatDialogRef<FilePickerDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
        public languageService: LanguageService,
        public fileService: FileService,
        private loaderService: LoaderService,
        private authService: AuthService,
        private dialogService: DialogService
    ) {
        this.refresh('')
    }

    close(): void {
        this.dialogRef.close()
    }

    submit(downloadUrl: string) {
        this.dialogRef.close(downloadUrl)
    }

    getFilteredItems(): StorageItem[] {
        return this.items.filter(
            (item) => item.name.toLowerCase().includes(this.nameFilter.toLowerCase())
        )
    }

    formPathFromIndex(index: number = this.data.path.length): string {
        let path: string = ''

        const parts: string[] = this.data.path.slice(0, index).filter((part) => part !== '')
        parts.forEach(part => {
            path += part + '/'
        });

        return path
    }

    refresh(path: string) {
        this.fileService.getItems(
            path,
            (folders, items) => {
                this.folders = folders.sort((a, b) => a.name > b.name ? 1 : -1)
                this.items = items.sort((a, b) => a.name > b.name ? 1 : -1)
                this.data.path = path.split('/').filter((part) => part !== '')
            },
            (error) => { }
        )
    }

    uploadItem($event) {
        if(this.authService.isLoggedIn()) {
            this.loaderService.startLoading()

            const file = $event.target.files[0]
            this.fileService.uploadItem(
                file,
                this.formPathFromIndex() + '/' + file.name,
                (item: StorageItem) => {
                    this.items.push(item)
                    this.loaderService.stopLoading()
                },
                (error) => {
                    this.loaderService.stopLoading(error)
                }
            )
        } else {
            this.dialogService.showLoginDialog()
        }
    }
}