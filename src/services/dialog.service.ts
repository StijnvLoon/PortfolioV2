import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilePickerDialog } from 'src/app/dialogs/file-picker/file-picker.dialog';
import { LoginDialog } from 'src/app/dialogs/login/login.dialog';
import { ConfirmDialog } from '../app/dialogs/confirm/confirm.dialog';
import { TextValue } from "../models/dict/TextValue";

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

  showLoginDialog() {
    this.dialog.open(LoginDialog, {
      width: this.dialogWidth,
      data: { title: 'login_first' }
    })
  }

  showFilePickerDialog(
    titleIdentifier: string | TextValue,
    path: string = '',
    onResult: (url: string) => void
  ) {
    const dialogRef = this.dialog.open(FilePickerDialog, {
      width: this.dialogWidth,
      height: '80%',
      data: { title: titleIdentifier, path: path }
    })

    dialogRef.afterClosed().subscribe(async data => {
      onResult(data)
    })
  }

}
