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
import { FaqComponent } from './project/faq/faq.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { EditLanguageComponent } from './edit-project/edit-language/edit-language.component';
import { EditTitleComponent } from './edit-project/edit-title/edit-title.component';
import { EditLogosComponent } from './edit-project/edit-logos/edit-logos.component';

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
    UrlsComponent,
    FaqComponent,
    EditProjectComponent,
    EditLanguageComponent,
    EditTitleComponent,
    EditLogosComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
})
export class DesktopModule { }
