import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';

import { AboutComponent } from 'src/app/mobile-components/about/about.component';
import { LobbyComponent } from 'src/app/mobile-components/lobby/lobby.component';
import { ProjectComponent } from 'src/app/mobile-components/project/project.component';
import { RegularModule } from '../regular.module';
import { TitleComponent } from './project/title/title.component';
import { ParagraphComponent } from './project/paragraph/paragraph.component';
import { UrlsComponent } from './project/urls/urls.component';
import { FaqComponent } from './project/faq/faq.component';
import { FloatingTitleComponent } from './floating-title/floating-title.component';

@NgModule({
  declarations: [
    AboutComponent,
    LobbyComponent,
    ProjectComponent,
    TitleComponent,
    ParagraphComponent,
    UrlsComponent,
    FaqComponent,
    FloatingTitleComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RegularModule
  ]
})
export class MobileModule { }
