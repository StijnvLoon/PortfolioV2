import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImageLazyComponent } from './regular-components/image-lazy/image-lazy.component';

@NgModule({
  declarations: [
      ImageLazyComponent
  ],
  imports: [
      CommonModule,
  ],
  exports: [
      ImageLazyComponent
  ]
})
export class RegularModule { }