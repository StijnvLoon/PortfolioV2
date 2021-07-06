import { Route } from '@angular/compiler/src/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Project } from 'src/models/Project';
import { LanguageService } from 'src/services/language.service';
import { LoaderService } from 'src/services/loader.service';
import { ProjectService } from 'src/services/project.service';

@Component({
  selector: 'desktop-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy {

  private routeSub: Subscription;
  public project: Project;

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
          this.project = result;
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

}
