import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/services/language.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    public languageService: LanguageService,
  ) { }

  isMobile(): boolean {
    return environment.isMobile
  }

}
