import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from './material.module';
import { ImageLazyComponent } from './regular-components/image-lazy/image-lazy.component';
import { ScrollupComponent } from './regular-components/scrollup/scrollup.component';

@NgModule({
  declarations: [
      ImageLazyComponent,
      ScrollupComponent,
  ],
  imports: [
      CommonModule,
      MaterialModule,
      MatButtonModule,
  ],
  exports: [
      ImageLazyComponent,
      ScrollupComponent,
  ]
})
export class RegularModule { }