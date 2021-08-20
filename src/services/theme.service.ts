import { Injectable } from '@angular/core';
import { Theme } from '../models/Theme';
import { ThemeTemplate } from '../models/ThemeTemplate';
import { JSONLib } from '../assets/jsonLibrary';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  public theme: Theme
  private readonly themeStorage: string = 'usertheme'

  // private readonly lightTheme: ThemeTemplate = JSONLib.toClass(ThemeTemplate, '{"name":"light blue","primaryPalette":{"name":"custom_blue","colors":[{"name":"50","hex":"#e7eaec","darkContrast":true},{"name":"100","hex":"#c4cad0","darkContrast":true},{"name":"200","hex":"#9da6b0","darkContrast":true},{"name":"300","hex":"#768290","darkContrast":true},{"name":"400","hex":"#586879","darkContrast":false},{"name":"500","hex":"#3b4d61","darkContrast":false},{"name":"600","hex":"#354659","darkContrast":false},{"name":"700","hex":"#2d3d4f","darkContrast":false},{"name":"800","hex":"#263445","darkContrast":false},{"name":"900","hex":"#192533","darkContrast":false},{"name":"A100","hex":"#76b2ff","darkContrast":true},{"name":"A200","hex":"#4395ff","darkContrast":true},{"name":"A400","hex":"#1078ff","darkContrast":false},{"name":"A700","hex":"#006bf6","darkContrast":false}]},"accentPalette":{"name":"custom_yellow","colors":[{"name":"50","hex":"#fef9e2","darkContrast":true},{"name":"100","hex":"#fdf1b7","darkContrast":true},{"name":"200","hex":"#fce887","darkContrast":true},{"name":"300","hex":"#fbdf57","darkContrast":true},{"name":"400","hex":"#fad833","darkContrast":true},{"name":"500","hex":"#f9d10f","darkContrast":true},{"name":"600","hex":"#f8cc0d","darkContrast":true},{"name":"700","hex":"#f7c60b","darkContrast":true},{"name":"800","hex":"#f6c008","darkContrast":true},{"name":"900","hex":"#f5b504","darkContrast":true},{"name":"A100","hex":"#ffffff","darkContrast":true},{"name":"A200","hex":"#fff8e8","darkContrast":true},{"name":"A400","hex":"#ffe9b5","darkContrast":true},{"name":"A700","hex":"#ffe29c","darkContrast":true}]},"warnPalette":{"name":"$mat-deep-orange","colors":[{"name":"50","hex":"#ffebe4","darkContrast":true},{"name":"100","hex":"#ffcdbd","darkContrast":true},{"name":"200","hex":"#ffab91","darkContrast":true},{"name":"300","hex":"#fe8964","darkContrast":true},{"name":"400","hex":"#fe7043","darkContrast":true},{"name":"500","hex":"#fe5722","darkContrast":true},{"name":"600","hex":"#fe4f1e","darkContrast":false},{"name":"700","hex":"#fe4619","darkContrast":false},{"name":"800","hex":"#fe3c14","darkContrast":false},{"name":"900","hex":"#fd2c0c","darkContrast":false},{"name":"A100","hex":"#ffffff","darkContrast":true},{"name":"A200","hex":"#fff5f4","darkContrast":true},{"name":"A400","hex":"#ffc7c1","darkContrast":true},{"name":"A700","hex":"#ffb0a7","darkContrast":true}]},"dark":false}');
  private readonly lightTheme: ThemeTemplate = JSONLib.toClass(ThemeTemplate, '{"name":"portfolio light","primaryPalette":{"name":"$mat-amber","colors":[{"name":"50","hex":"#fff8e1","darkContrast":true},{"name":"100","hex":"#ffecb5","darkContrast":true},{"name":"200","hex":"#ffe083","darkContrast":true},{"name":"300","hex":"#fed451","darkContrast":true},{"name":"400","hex":"#feca2c","darkContrast":true},{"name":"500","hex":"#fec107","darkContrast":true},{"name":"600","hex":"#febb06","darkContrast":true},{"name":"700","hex":"#feb305","darkContrast":true},{"name":"800","hex":"#feab04","darkContrast":true},{"name":"900","hex":"#fd9e02","darkContrast":true},{"name":"A100","hex":"#ffffff","darkContrast":true},{"name":"A200","hex":"#fff9f1","darkContrast":true},{"name":"A400","hex":"#ffe3be","darkContrast":true},{"name":"A700","hex":"#ffd9a4","darkContrast":true}]},"accentPalette":{"name":"$mat-blue","colors":[{"name":"50","hex":"#e4f2fe","darkContrast":true},{"name":"100","hex":"#bce0fb","darkContrast":true},{"name":"200","hex":"#90cbf9","darkContrast":true},{"name":"300","hex":"#64b6f7","darkContrast":true},{"name":"400","hex":"#42a6f5","darkContrast":true},{"name":"500","hex":"#2196f3","darkContrast":false},{"name":"600","hex":"#1d8ef1","darkContrast":false},{"name":"700","hex":"#1883ef","darkContrast":false},{"name":"800","hex":"#1479ed","darkContrast":false},{"name":"900","hex":"#0b68ea","darkContrast":false},{"name":"A100","hex":"#ffffff","darkContrast":true},{"name":"A200","hex":"#e1ecff","darkContrast":true},{"name":"A400","hex":"#aeccff","darkContrast":true},{"name":"A700","hex":"#95bcff","darkContrast":true}]},"warnPalette":{"name":"$mat-pink","colors":[{"name":"50","hex":"#fce4ec","darkContrast":true},{"name":"100","hex":"#f9bcd0","darkContrast":true},{"name":"200","hex":"#f58fb1","darkContrast":true},{"name":"300","hex":"#f06292","darkContrast":true},{"name":"400","hex":"#ed407a","darkContrast":false},{"name":"500","hex":"#ea1e63","darkContrast":false},{"name":"600","hex":"#e71a5b","darkContrast":false},{"name":"700","hex":"#e41651","darkContrast":false},{"name":"800","hex":"#e11247","darkContrast":false},{"name":"900","hex":"#db0a35","darkContrast":false},{"name":"A100","hex":"#ffffff","darkContrast":true},{"name":"A200","hex":"#ffd2d9","darkContrast":true},{"name":"A400","hex":"#ff9faf","darkContrast":true},{"name":"A700","hex":"#ff859a","darkContrast":true}]},"dark":false}')
  // private readonly darkTheme: ThemeTemplate = JSONLib.toClass(ThemeTemplate, '{"name":"dark red","primaryPalette":{"name":"custom_teal","colors":[{"name":"50","hex":"#e2eced","darkContrast":true},{"name":"100","hex":"#b8d1d1","darkContrast":true},{"name":"200","hex":"#88b2b3","darkContrast":true},{"name":"300","hex":"#589394","darkContrast":true},{"name":"400","hex":"#357b7d","darkContrast":false},{"name":"500","hex":"#116466","darkContrast":false},{"name":"600","hex":"#0f5c5e","darkContrast":false},{"name":"700","hex":"#0c5253","darkContrast":false},{"name":"800","hex":"#0a4849","darkContrast":false},{"name":"900","hex":"#053638","darkContrast":false},{"name":"A100","hex":"#6ffbff","darkContrast":true},{"name":"A200","hex":"#3cfaff","darkContrast":true},{"name":"A400","hex":"#09f9ff","darkContrast":true},{"name":"A700","hex":"#00e9ef","darkContrast":true}]},"accentPalette":{"name":"custom_hide","colors":[{"name":"50","hex":"#faf6f1","darkContrast":true},{"name":"100","hex":"#f4e7dd","darkContrast":true},{"name":"200","hex":"#ecd8c6","darkContrast":true},{"name":"300","hex":"#e4c8af","darkContrast":true},{"name":"400","hex":"#dfbc9d","darkContrast":true},{"name":"500","hex":"#d9b08c","darkContrast":true},{"name":"600","hex":"#d5a984","darkContrast":true},{"name":"700","hex":"#cfa079","darkContrast":true},{"name":"800","hex":"#ca976f","darkContrast":true},{"name":"900","hex":"#c0875c","darkContrast":true},{"name":"A100","hex":"#ffffff","darkContrast":true},{"name":"A200","hex":"#fffaf6","darkContrast":true},{"name":"A400","hex":"#ffdcc3","darkContrast":true},{"name":"A700","hex":"#ffcdaa","darkContrast":true}]},"warnPalette":{"name":"custom_blue","colors":[{"name":"50","hex":"#f9fcfc","darkContrast":true},{"name":"100","hex":"#f1f8f6","darkContrast":true},{"name":"200","hex":"#e8f4f1","darkContrast":true},{"name":"300","hex":"#dfefeb","darkContrast":true},{"name":"400","hex":"#d8ebe6","darkContrast":true},{"name":"500","hex":"#d1e8e2","darkContrast":true},{"name":"600","hex":"#cce5df","darkContrast":true},{"name":"700","hex":"#c6e2da","darkContrast":true},{"name":"800","hex":"#c0ded6","darkContrast":true},{"name":"900","hex":"#b5d8cf","darkContrast":true},{"name":"A100","hex":"#ffffff","darkContrast":true},{"name":"A200","hex":"#ffffff","darkContrast":true},{"name":"A400","hex":"#ffffff","darkContrast":true},{"name":"A700","hex":"#ffffff","darkContrast":true}]},"dark":true}')
  private readonly darkTheme: ThemeTemplate = JSONLib.toClass(ThemeTemplate, '{"name":"portfolio dark","primaryPalette":{"name":"$mat-purple","colors":[{"name":"50","hex":"#f3e5f5","darkContrast":true},{"name":"100","hex":"#e1bfe7","darkContrast":true},{"name":"200","hex":"#ce94d7","darkContrast":true},{"name":"300","hex":"#ba69c7","darkContrast":true},{"name":"400","hex":"#ab48bb","darkContrast":false},{"name":"500","hex":"#9c28af","darkContrast":false},{"name":"600","hex":"#9424a8","darkContrast":false},{"name":"700","hex":"#8a1e9f","darkContrast":false},{"name":"800","hex":"#801896","darkContrast":false},{"name":"900","hex":"#6e0f86","darkContrast":false},{"name":"A100","hex":"#efb8ff","darkContrast":true},{"name":"A200","hex":"#e485ff","darkContrast":true},{"name":"A400","hex":"#d952ff","darkContrast":true},{"name":"A700","hex":"#d338ff","darkContrast":false}]},"accentPalette":{"name":"$mat-green","colors":[{"name":"50","hex":"#eaf5ea","darkContrast":true},{"name":"100","hex":"#c9e7cb","darkContrast":true},{"name":"200","hex":"#a6d7a9","darkContrast":true},{"name":"300","hex":"#82c786","darkContrast":true},{"name":"400","hex":"#67bb6c","darkContrast":true},{"name":"500","hex":"#4caf52","darkContrast":true},{"name":"600","hex":"#45a84b","darkContrast":false},{"name":"700","hex":"#3c9f41","darkContrast":false},{"name":"800","hex":"#339638","darkContrast":false},{"name":"900","hex":"#248628","darkContrast":false},{"name":"A100","hex":"#c5ffc8","darkContrast":true},{"name":"A200","hex":"#92ff97","darkContrast":true},{"name":"A400","hex":"#5fff66","darkContrast":true},{"name":"A700","hex":"#46ff4d","darkContrast":true}]},"warnPalette":{"name":"$mat-amber","colors":[{"name":"50","hex":"#fff8e1","darkContrast":true},{"name":"100","hex":"#ffecb5","darkContrast":true},{"name":"200","hex":"#ffe083","darkContrast":true},{"name":"300","hex":"#fed451","darkContrast":true},{"name":"400","hex":"#feca2c","darkContrast":true},{"name":"500","hex":"#fec107","darkContrast":true},{"name":"600","hex":"#febb06","darkContrast":true},{"name":"700","hex":"#feb305","darkContrast":true},{"name":"800","hex":"#feab04","darkContrast":true},{"name":"900","hex":"#fd9e02","darkContrast":true},{"name":"A100","hex":"#ffffff","darkContrast":true},{"name":"A200","hex":"#fff9f1","darkContrast":true},{"name":"A400","hex":"#ffe3be","darkContrast":true},{"name":"A700","hex":"#ffd9a4","darkContrast":true}]},"dark":true}')

  constructor() {
    this.theme = Theme[localStorage.getItem(this.themeStorage)];

    if(this.theme == undefined) {
      this.setTheme(environment.defaultTheme)
    } else {
      this.setTheme(this.theme)
    }
  }

  setTheme(theme: Theme) {
    this.theme = theme
    localStorage.setItem(this.themeStorage, Theme[this.theme])

    switch(theme) {
      case Theme.Light: this.applyTheme(this.lightTheme); break
      case Theme.Dark: this.applyTheme(this.darkTheme); break
    }
  }

  private applyTheme(themeTemplate: ThemeTemplate) {

    //set primary colors
    for (const color of themeTemplate.primaryPalette.colors) {
      const key1 = `--theme-primary-${color.name}`;
      const value1 = color.hex;
      const key2 = `--theme-primary-contrast-${color.name}`;
      const value2 = color.darkContrast ? 'rgba(black, 0.87)' : 'white';
      document.documentElement.style.setProperty(key1, value1);
      document.documentElement.style.setProperty(key2, value2);
    }

    //set accent colors
    for (const color of themeTemplate.accentPalette.colors) {
      const key1 = `--theme-accent-${color.name}`;
      const value1 = color.hex;
      const key2 = `--theme-accent-contrast-${color.name}`;
      const value2 = color.darkContrast ? 'rgba(black, 0.87)' : 'white';
      document.documentElement.style.setProperty(key1, value1);
      document.documentElement.style.setProperty(key2, value2);
    }

    //set warn colors
    for (const color of themeTemplate.warnPalette.colors) {
      const key1 = `--theme-warn-${color.name}`;
      const value1 = color.hex;
      const key2 = `--theme-warn-contrast-${color.name}`;
      const value2 = color.darkContrast ? 'rgba(black, 0.87)' : 'white';
      document.documentElement.style.setProperty(key1, value1);
      document.documentElement.style.setProperty(key2, value2);
    }

    //set dark/light class
    const bodyElement = document.body;

    if (bodyElement) {
      bodyElement.classList.remove('dynamic-light-theme');
      bodyElement.classList.remove('dynamic-dark-theme');

      if (themeTemplate.dark) {
        bodyElement.classList.add('dynamic-dark-theme');
      } else {
        bodyElement.classList.add('dynamic-light-theme');
      }
    }
  }

}