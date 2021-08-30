import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/services/language.service';
import { environment } from 'src/environments/environment';
import { ThemeService } from 'src/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    public languageService: LanguageService,
    // initialization themeservice
    public themeService: ThemeService
  ) { }

  isMobile(): boolean {
    return environment.isMobile
  }

}
