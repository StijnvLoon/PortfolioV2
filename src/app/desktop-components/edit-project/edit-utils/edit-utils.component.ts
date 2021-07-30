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

  openUrl(url: string) {
    window.open(url, '_blank').focus();
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

  setColor(index: number, value: string) {
    this.projectEditor.project.colors[index] = value
  }

  deleteColor(index: number) {
    this.projectEditor.project.colors.splice(index, 1)
  }

  getUrlName(index: number) {
    return this.projectEditor.getUrlName(index)
  }

  setUrlName(index: number, value: string) {
    this.projectEditor.setUrlName(index, value)
  }

  deleteUrl(index: number) {
    this.projectEditor.project.urls.splice(index, 1)
  }

  addUrl() {
    this.projectEditor.project.urls.push({ name: {}, url: "" })
  }

  getImageTitle(index: number) {
    return this.projectEditor.getImageTitle(index)
  }

  setImageTitle(index: number, value: string) {
    this.projectEditor.setImageTitle(index, value)
  }

  deleteImage(index: number) {
    this.projectEditor.project.images.splice(index, 1)
  }

  addImage() {
    this.projectEditor.project.images.push({ title: {}, url: "" })
  }
}
