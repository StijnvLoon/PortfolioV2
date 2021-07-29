import { Component, Input, OnInit } from '@angular/core';
import { Language } from 'src/models/Dictionary';
import { ProjectEditor } from 'src/models/ProjectEditor';
import { DialogService } from 'src/services/dialog.service';

@Component({
  selector: 'desktop-edit-utils',
  templateUrl: './edit-utils.component.html',
  styleUrls: ['./edit-utils.component.scss']
})
export class EditUtilsComponent implements OnInit {

  @Input() projectEditor: ProjectEditor

  constructor(
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
  }

  getCurrentLanguageString() {
    return Language[this.projectEditor.selectedLanguage]
  }

  trackByFn(index) {
    return index;
  }

  getKeyword(index: number) {
    return this.projectEditor.getKeyword(index)
  }

  setKeyword(index: number, value: string) {
    this.projectEditor.setKeyword(index, value)
  }

  deleteKeyword(index: number) {
    this.projectEditor.project.keywords.splice(index, 1)
  }

  addKeyword() {
    this.projectEditor.project.keywords.push({})
  }

  addColor() {
    this.projectEditor.project.colors.push("#000000")
  }

  updateColor(index: number, value: string) {
    this.projectEditor.project.colors[index] = value
  }

  deleteColor(index: number) {
    this.projectEditor.project.colors.splice(index, 1)
  }
}
