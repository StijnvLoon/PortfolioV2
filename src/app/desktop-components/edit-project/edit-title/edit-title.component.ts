import { Component, Input, OnInit } from '@angular/core';
import { ProjectEditor } from 'src/models/ProjectEditor';
import { DialogService } from 'src/services/dialog.service';

@Component({
  selector: 'desktop-edit-title',
  templateUrl: './edit-title.component.html',
  styleUrls: ['./edit-title.component.scss']
})
export class EditTitleComponent implements OnInit {

  @Input() projectEditor: ProjectEditor

  constructor(
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
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

  getTitle() {
    return this.projectEditor.getTitle()
  }

  addLogo() {
    this.projectEditor.project.logos.push("")
  }

  updateTitle(title: string) {
    this.projectEditor.setTitle(title)
  }

  updateLogo(index: number, value: string) {
    this.projectEditor.project.logos[index] = value
  }

  deleteLogo(index: number) {
    this.projectEditor.project.logos.splice(index, 1)
  }

}
