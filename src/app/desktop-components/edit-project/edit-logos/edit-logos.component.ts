import { Component, Input, OnInit } from '@angular/core';
import { ProjectEditor } from 'src/models/ProjectEditor';
import { DialogService } from 'src/services/dialog.service';

@Component({
  selector: 'desktop-edit-logos',
  templateUrl: './edit-logos.component.html',
  styleUrls: ['./edit-logos.component.scss']
})
export class EditLogosComponent implements OnInit {

  @Input() projectEditor: ProjectEditor

  constructor(
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
  }

  removeLogo(logo: string) {
    this.dialogService.showConfirmDialog('confirm_delete_logo', (confirmed: boolean) => {
      if(confirmed) {
        this.projectEditor.project.logos.splice(this.projectEditor.project.logos.indexOf(logo), 1)
      }
    })
  }

  addLogo() {

  }
}