import { Injectable } from '@angular/core';
import { Language } from '../models/enums/Language';


@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  public language: Language

  private readonly languageStorage: string = 'userlanguage'

  constructor() {
    this.language = Language[localStorage.getItem(this.languageStorage)];

    if(this.language == undefined) {
      this.setLanguage(Language.NL)
    }
  }

  setLanguage(lang: Language) {
    this.language = lang
    localStorage.setItem(this.languageStorage, Language[this.language])
  }
}