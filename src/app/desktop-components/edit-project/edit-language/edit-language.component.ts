import { Component, Input, OnInit } from '@angular/core';
import { Language, languageArray } from 'src/models/enums/Language';
import { ProjectEditor } from 'src/models/ProjectEditor';

@Component({
  selector: 'desktop-edit-language',
  templateUrl: './edit-language.component.html',
  styleUrls: ['./edit-language.component.scss']
})
export class EditLanguageComponent implements OnInit {

  @Input() projectEditor: ProjectEditor

  constructor() { }

  ngOnInit(): void {
  }

  getAvailableLanguages(): string[] {
    return languageArray()
  }

  getIndex(langString: Language) {
    return Language[langString]
  }


}
