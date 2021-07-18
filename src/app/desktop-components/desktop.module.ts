import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

import { ImageLoaderComponent } from '../regular-components/image-loader/image-loader.component';

import { AboutComponent } from './about/about.component';
import { LobbyComponent } from './lobby/lobby.component';
import { ProjectComponent } from './project/project.component';
import { ParagraphComponent } from './project/paragraph/paragraph.component';
import { CoverComponent } from './project/cover/cover.component';
import { ImagesComponent } from './project/images/images.component';
import { TitleComponent } from './project/title/title.component';
import { UrlsComponent } from './project/urls/urls.component';

@NgModule({
  declarations: [
    ImageLoaderComponent,
    AboutComponent,
    LobbyComponent,
    ProjectComponent,
    ParagraphComponent,
    CoverComponent,
    ImagesComponent,
    TitleComponent,
    UrlsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
})
export class DesktopModule { }
