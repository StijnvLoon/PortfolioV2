import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Project } from 'src/models/Project';
import { LanguageService } from 'src/services/language.service';
import { ProjectService } from 'src/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy {

  private routeSub: Subscription;
  public project: Project;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    public languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      const id = params['id'];
      this.projectService.getById(id,
        result => {
          this.project = result;
          console.log(result)
        },
        error => {
          //TODO 
        }
      )
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

}