import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';

import { AboutComponent } from 'src/app/mobile-components/about/about.component';
import { LobbyComponent } from 'src/app/mobile-components/lobby/lobby.component';



@NgModule({
  declarations: [
    AboutComponent,
    LobbyComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class MobileModule { }
