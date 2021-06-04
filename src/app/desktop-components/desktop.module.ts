import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

import { AboutComponent } from './about/about.component';
import { LobbyComponent } from './lobby/lobby.component';

@NgModule({
  declarations: [
    AboutComponent,
    LobbyComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
})
export class DesktopModule { }
