import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';

import { AboutComponent } from 'src/app/mobile-components/about/about.component';
import { LobbyComponent } from 'src/app/mobile-components/lobby/lobby.component';
import { ProjectComponent } from 'src/app/mobile-components/project/project.component';
import { RegularModule } from '../regular.module';
import { TitleComponent } from './project/title/title.component';

@NgModule({
  declarations: [
    AboutComponent,
    LobbyComponent,
    ProjectComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RegularModule
  ]
})
export class MobileModule { }
