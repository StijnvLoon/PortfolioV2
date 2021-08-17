import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TextValue } from 'src/models/Dictionary';
import { LanguageService } from 'src/services/language.service';
import { FileService } from 'src/services/file.service';
import { Folder } from 'src/models/Folder';
import { Item } from 'src/models/Item';
import { itemsListAnim } from 'src/animations/itemsListAnim';
import { LoaderService } from 'src/services/loader.service';

export interface DialogData {
    title: string | TextValue,
    path: string[]
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

    public folders: Folder[] = []
    public items: Item[] = []

    //TODO
    //create/edit/delete folder?
    //extention filter

    constructor(
        public dialogRef: MatDialogRef<FilePickerDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
        public languageService: LanguageService,
        public fileService: FileService,
        private loaderService: LoaderService
    ) {
        this.refresh('')
    }

    close(): void {
        this.dialogRef.close()
    }

    submit(downloadUrl: string) {
        this.dialogRef.close(downloadUrl)
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
                this.folders = folders
                this.items = items
                this.data.path = path.split('/').filter((part) => part !== '')
            },
            (error) => {

            }
        )
    }

    uploadItem($event) {
        this.loaderService.startLoading()

        const file = $event.target.files[0]
        this.fileService.uploadItem(
            file,
            this.formPathFromIndex() + '/' + file.name,
            (item: Item) => {
                this.items.push(item)
                this.loaderService.stopLoading()
            },
            (error) => {
                this.loaderService.stopLoading(error)
            }
        )
    }
}