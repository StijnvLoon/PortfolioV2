import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProjectEditor } from 'src/models/ProjectEditor';
import { LanguageService } from 'src/services/language.service';
import { LoaderService } from 'src/services/loader.service';
import { ProjectService } from 'src/services/project.service';

@Component({
  selector: 'desktop-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {

  private routeSub: Subscription;
  public projectEditor: ProjectEditor;

  constructor(
    private route: ActivatedRoute,
    private loaderService: LoaderService,
    private projectService: ProjectService,
    public languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.loaderService.startLoading()
      const url = params['url'];
      this.projectService.getByUrl(url,
        result => {
          this.loaderService.stopLoading()
          if (result == undefined) {
            this.projectEditor = new ProjectEditor()
          } else {
            this.projectEditor = new ProjectEditor(JSON.parse(JSON.stringify(result)))
          }
        },
        error => {
          this.loaderService.stopLoading()
          //TODO 
        }
      )
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  addParagraph() {
    this.projectEditor.project.content.push({ title: {}, text: {} })
  }
}
