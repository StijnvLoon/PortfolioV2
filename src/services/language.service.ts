import { Injectable } from '@angular/core';
import { Dictionary, Language } from '../models/dict/Dictionary';
import { TextValue } from "../models/dict/TextValue";
import { environment } from 'src/environments/environment';
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
      this.setLanguage(environment.defaultLanguage)
    }
  }

  setLanguage(lang: Language) {
    this.language = lang
    localStorage.setItem(this.languageStorage, Language[this.language])
  }

  getUpper(identifier: string | TextValue): string {
    let translation = this.get(identifier)
    return translation.charAt(0).toUpperCase() + translation.slice(1)
  }

  get(identifier: string | TextValue): string {
    let translation: string;

    if(typeof identifier == 'string') {
      translation = this.retrieveFromString(identifier)
    } else {
      translation = this.retrieveFromTextValue(identifier)
    }

    if(translation !== undefined) {
      return translation
    } else {
      return this.retrieveFromString('translation_not_found')
    }
  }

  private retrieveFromString(string: string): string {
    return this.dict()[string]
  }

  private retrieveFromTextValue(textValue: TextValue): string {
    return textValue[Language[this.language]]
  }

  private dict(): Dictionary {
    switch(this.language) {
      case Language.EN: return en
      case Language.NL: return nl
    }
  }
}