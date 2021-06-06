import { Injectable } from '@angular/core';
import { Language } from '../models/enums/Language';
import { Dictionary } from '../models/interfaces/Dictionary';
import { en } from 'src/lang/en';
import { nl } from 'src/lang/nl';

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

  dict(): Dictionary {
    switch(this.language) {
      case Language.EN: return en
      case Language.NL: return nl
    }
  }

  toUpper(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  get(string: string): string {
    const translation = this.search(string)
    return translation ? translation : this.search('error')
  }

  getUpper(string: string) {
    const translation = this.search(string)

    if(translation) {
      return translation.charAt(0).toUpperCase() + translation.slice(1)
    } else {
      return this.search('error')
    }
  }

  private search(string: string): string {
    switch(this.language) {
      case Language.EN: return en[string]
      case Language.NL: return nl[string]
    }
  }
}