import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearchComponent } from './header/search/search.component';
import { ButtonThemeComponent } from './header/button-theme/button-theme.component';
import { ButtonLanguageComponent } from './header/button-language/button-language.component';
import { HeaderComponent } from './header/header.component';
import { DesktopModule } from './desktop-components/desktop.module';
import { MobileModule } from './mobile-components/mobile.module';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    ButtonThemeComponent,
    ButtonLanguageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    DesktopModule,
    MobileModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
