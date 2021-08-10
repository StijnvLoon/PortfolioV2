import { Component, OnInit } from '@angular/core';
import { changeAnim } from 'src/animations/changeAnim';
import { Theme } from 'src/models/Theme';
import { LanguageService } from 'src/services/language.service';
import { ThemeService } from 'src/services/theme.service';

@Component({
  selector: 'app-button-theme',
  templateUrl: './button-theme.component.html',
  styleUrls: ['./button-theme.component.scss'],
  animations: [
    changeAnim
  ]
})
export class ButtonThemeComponent implements OnInit {

  constructor(
    public themeService: ThemeService,
    public languageService: LanguageService
  ) { }

  ngOnInit(): void {
  }

  toggleTheme() {
    if(this.themeService.theme == Theme.Light) {
      this.themeService.setTheme(Theme.Dark)
    } else {
      this.themeService.setTheme(Theme.Light)
    }
  }

}
