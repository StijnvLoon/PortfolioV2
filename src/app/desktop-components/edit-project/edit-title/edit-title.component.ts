import { Component, Input, OnInit } from '@angular/core';
import { ProjectEditor } from 'src/models/ProjectEditor';

@Component({
  selector: 'desktop-edit-title',
  templateUrl: './edit-title.component.html',
  styleUrls: ['./edit-title.component.scss']
})
export class EditTitleComponent implements OnInit {

  @Input() projectEditor: ProjectEditor

  constructor() { }

  ngOnInit(): void {
  }

  getTitle() {
    return this.projectEditor.getTitle()
  }

  updateTitle(title: string) {
    this.projectEditor.setTitle(title)
  }

}
