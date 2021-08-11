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

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { ErrorComponent } from './regular-components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    ButtonThemeComponent,
    ButtonLanguageComponent,
    PageLoaderComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    DesktopModule,
    MobileModule,
    DialogModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
