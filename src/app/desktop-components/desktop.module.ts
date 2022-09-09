import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

import { AboutComponent } from './about/about.component';
import { LobbyComponent } from './lobby/lobby.component';
import { ProjectComponent } from './project/project.component';
import { ParagraphComponent } from './project/paragraph/paragraph.component';
import { ImagesComponent } from './project/images/images.component';
import { TitleComponent } from './project/title/title.component';
import { UrlsComponent } from './project/urls/urls.component';
import { FaqComponent } from './project/faq/faq.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { EditLanguageComponent } from './edit-project/edit-language/edit-language.component';
import { EditMainComponent } from './edit-project/edit-main/edit-main.component';
import { EditUtilsComponent } from './edit-project/edit-utils/edit-utils.component';
import { EditParagraphComponent } from './edit-project/edit-paragraph/edit-paragraph.component';
import { FloatingTitleComponent } from './floating-title/floating-title.component';
import { RegularModule } from '../regular.module';
import { EditProject2Component } from './edit-project2/edit-project2.component';

@NgModule({
  declarations: [
    AboutComponent,
    LobbyComponent,
    ProjectComponent,
    ParagraphComponent,
    ImagesComponent,
    TitleComponent,
    UrlsComponent,
    FaqComponent,
    EditProjectComponent,
    EditProject2Component,
    EditLanguageComponent,
    EditMainComponent,
    EditUtilsComponent,
    EditParagraphComponent,
    FloatingTitleComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RegularModule
  ],
})
export class DesktopModule { }
