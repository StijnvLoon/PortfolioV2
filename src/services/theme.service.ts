import { Injectable } from '@angular/core';
import { Theme } from '../models/enums/Theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  public theme: Theme

  private readonly themeStorage: string = 'usertheme'

  constructor() {
    this.theme = Theme[localStorage.getItem(this.themeStorage)];

    if(this.theme == undefined) {
      this.setTheme(Theme.Light)
    }
  }

  setTheme(theme: Theme) {
    this.theme = theme
    localStorage.setItem(this.themeStorage, Theme[this.theme])
  }
}