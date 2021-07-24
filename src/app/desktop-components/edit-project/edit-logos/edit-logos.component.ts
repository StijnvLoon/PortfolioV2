import { Component, Input, OnInit } from '@angular/core';
import { ProjectEditor } from 'src/models/ProjectEditor';

@Component({
  selector: 'desktop-edit-logos',
  templateUrl: './edit-logos.component.html',
  styleUrls: ['./edit-logos.component.scss']
})
export class EditLogosComponent implements OnInit {

  @Input() projectEditor: ProjectEditor

  constructor() { }

  ngOnInit(): void {
  }

  removeLogo(logo: string) {
    this.projectEditor.project.logos.splice(this.projectEditor.project.logos.indexOf(logo), 1)
  }

  addLogo() {

  }
}
