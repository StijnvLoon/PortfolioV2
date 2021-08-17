import { Component, Input, OnInit } from '@angular/core';
import { Language } from 'src/models/Dictionary';
import { ProjectEditor } from 'src/models/ProjectEditor';
import { DialogService } from 'src/services/dialog.service';
import { LanguageService } from 'src/services/language.service';

@Component({
  selector: 'desktop-edit-main',
  templateUrl: './edit-main.component.html',
  styleUrls: ['./edit-main.component.scss']
})
export class EditMainComponent implements OnInit {

  @Input() projectEditor: ProjectEditor

  constructor(
    private dialogService: DialogService,
    public languageService: LanguageService
  ) { }

  ngOnInit(): void {
  }

  getCurrentLanguageString() {
    return Language[this.projectEditor.selectedLanguage]
  }

  pickImage() {
    this.dialogService.showFilePickerDialog(
      'file_picker_choose_image',
      '',
      (url: string) => {
        if (url) {
          this.projectEditor.project.coverImage = url
        }
      }
    )
  }

}
