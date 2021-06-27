import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

import { ImageLoaderComponent } from '../image-loader/image-loader.component';

import { AboutComponent } from './about/about.component';
import { LobbyComponent } from './lobby/lobby.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    ImageLoaderComponent,
    AboutComponent,
    LobbyComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
})
export class DesktopModule { }
