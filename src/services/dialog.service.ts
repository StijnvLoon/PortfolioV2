import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialog } from '../app/dialogs/confirm/confirm.dialog';
import { TextValue } from '../models/Dictionary';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private readonly dialogWidth: string = '80%'

  constructor(
    private dialog: MatDialog
  ) { }

  showConfirmDialog(titleIdentifier: string | TextValue, onResult: (confirmed: boolean) => void) {
    const dialogRef = this.dialog.open(ConfirmDialog, {
      width: this.dialogWidth,
      data: { title: titleIdentifier }
    })

    dialogRef.afterClosed().subscribe(async confirmed => {
      onResult(confirmed)
    })
  }

  showImagePickerDialog(onResult: (url: string) => void) {
    //TODO

    // const dialogRef = this.dialog.open(ImagePickerDialog, {
    //   width: this.dialogWidth
    // })

    // dialogRef.afterClosed().subscribe(async data => {
    //   if(data.confirmed) {
    //     onResult(data.url)
    //   } else {
    //     onResult(undefined)
    //   }
    // })
  }
}
