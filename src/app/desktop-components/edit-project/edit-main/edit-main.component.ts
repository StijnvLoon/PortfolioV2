import { Component, Input, OnInit } from '@angular/core';
import { Language } from 'src/models/Dictionary';
import { ProjectEditor } from 'src/models/ProjectEditor';
import { DialogService } from 'src/services/dialog.service';

@Component({
  selector: 'desktop-edit-main',
  templateUrl: './edit-main.component.html',
  styleUrls: ['./edit-main.component.scss']
})
export class EditMainComponent implements OnInit {

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

  pickImage() {
    this.dialogService.showImagePickerDialog(
      (url: string) => {
        if (url) {
          this.projectEditor.project.coverImage = url
        }
      }
    )
  }

  addLogo() {
    this.projectEditor.project.logos.push("")
  }

  updateLogo(index: number, value: string) {
    this.projectEditor.project.logos[index] = value
  }

  deleteLogo(index: number) {
    this.projectEditor.project.logos.splice(index, 1)
  }

}
