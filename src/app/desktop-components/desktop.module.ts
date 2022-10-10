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
import { EditParagraphComponent } from './edit-project/edit-paragraph/edit-paragraph.component';
import { FloatingTitleComponent } from './floating-title/floating-title.component';
import { RegularModule } from '../regular.module';
import { EditProject2Component } from './edit-project2/edit-project2.component';
import { EditGeneralComponent } from './edit-project2/edit-general/edit-general.component';
import { EditUtilsComponent } from './edit-project2/edit-utils/edit-utils.component';
import { EditQuestionsComponent } from './edit-project2/edit-questions/edit-questions.component';
import { EditContentComponent } from './edit-project2/edit-content/edit-content.component';

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
    EditProject2Component,
    EditGeneralComponent,
    EditUtilsComponent,
    EditQuestionsComponent,
    EditContentComponent,
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
