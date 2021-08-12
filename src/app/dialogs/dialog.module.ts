import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';

import { ConfirmDialog } from './confirm/confirm.dialog'
import { FilePickerDialog } from './file-picker/file-picker.dialog';

@NgModule({
  declarations: [
      ConfirmDialog,
      FilePickerDialog
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
})
export class DialogModule { }