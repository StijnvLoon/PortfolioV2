import { Component, OnInit } from '@angular/core';
import { ChangeAnim } from 'src/animations/changeAnim';
import { ThemeService, Theme } from 'src/services/theme.service';

@Component({
  selector: 'app-button-theme',
  templateUrl: './button-theme.component.html',
  styleUrls: ['./button-theme.component.scss'],
  animations: [
    ChangeAnim
  ]
})
export class ButtonThemeComponent implements OnInit {

  constructor(
    public themeService: ThemeService
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
