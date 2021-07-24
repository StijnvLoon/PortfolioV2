import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearchComponent } from './regular-components/header/search/search.component';
import { ButtonThemeComponent } from './regular-components/header/button-theme/button-theme.component';
import { ButtonLanguageComponent } from './regular-components/header/button-language/button-language.component';
import { HeaderComponent } from './regular-components/header/header.component';
import { PageLoaderComponent } from './regular-components/page-loader/page-loader.component';
import { DesktopModule } from './desktop-components/desktop.module';
import { MobileModule } from './mobile-components/mobile.module';
import { MaterialModule } from './material.module';
import { DialogModule } from './dialogs/dialog.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    ButtonThemeComponent,
    ButtonLanguageComponent,
    PageLoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    DesktopModule,
    MobileModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
