import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';

import { ConfirmDialog } from './confirm/confirm.dialog'

@NgModule({
  declarations: [
      ConfirmDialog
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
})
export class DialogModule { }