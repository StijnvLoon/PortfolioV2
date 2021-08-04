import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Language } from 'src/models/Dictionary';
import { Paragraph } from 'src/models/Project';
import { ProjectEditor } from 'src/models/ProjectEditor';
import { LanguageService } from 'src/services/language.service';

@Component({
  selector: 'desktop-edit-paragraph',
  templateUrl: './edit-paragraph.component.html',
  styleUrls: ['./edit-paragraph.component.scss']
})
export class EditParagraphComponent implements OnInit {

  @Input() projectEditor: ProjectEditor
  @Input() paragraph: Paragraph
  @Input() level: number = 0
  @Output() onRemoveSubparagraph = new EventEmitter<Paragraph>();

  constructor(
    public languageService: LanguageService
  ) { }

  ngOnInit(): void {
  }

  getCurrentLanguageString() {
    return Language[this.projectEditor.selectedLanguage]
  }

  getTitle(): string {
    return this.paragraph.title[Language[this.projectEditor.selectedLanguage]]
  }

  getContent(): string {
    return this.paragraph.text[Language[this.projectEditor.selectedLanguage]]
  }

  setTitle(value: string) {
    this.paragraph.title[Language[this.projectEditor.selectedLanguage]] = value
  }

  setContent(value: string) {
    this.paragraph.text[Language[this.projectEditor.selectedLanguage]] = value
  }

  addSubParagraph() {
    if(this.paragraph.content == undefined) {
      this.paragraph.content = []
    }
    this.paragraph.content.push({ title: {}, text: {} })
  }

  removeParagraph() {
    this.onRemoveSubparagraph.emit(this.paragraph)
  }

  removeSubparagraph(subparagraph: Paragraph) {
    const index = this.paragraph.content.indexOf(subparagraph)
    this.paragraph.content.splice(index, 1)
  }

}
