import { Component, OnInit } from '@angular/core';
import { ProjectEditor2 } from 'src/models/ProjectEditor2';
import { ProjectService } from 'src/services/project.service';

@Component({
    selector: 'app-edit-project2',
    templateUrl: './edit-project2.component.html',
    styleUrls: ['./edit-project2.component.scss']
})
export class EditProject2Component implements OnInit {

    public projectEditor: ProjectEditor2

    constructor(
        private projectService: ProjectService
    ) { }

    ngOnInit(): void {
        this.projectEditor = new ProjectEditor2()
    }

}
