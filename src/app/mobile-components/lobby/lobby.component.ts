import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lobbyListAnim } from 'src/animations/lobbyListAnim';
import { Project } from 'src/models/Project';
import { LanguageService } from 'src/services/language.service';
import { LoaderService } from 'src/services/loader.service';
import { ProjectService } from 'src/services/project.service';

@Component({
  selector: 'mobile-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss'],
  animations: [
    lobbyListAnim
  ]
})
export class LobbyComponent implements OnInit {

  public projects: Project[]

  constructor(
    private router: Router,
    private loaderService: LoaderService,
    public languageService: LanguageService,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.loaderService.startLoading()
    this.projectService.get(
      (result) => {
        this.loaderService.stopLoading();
        this.projects = result
       },
      (error) => {
        this.loaderService.stopLoading();
      }
    )
  }

  navigateProject(project: Project) {
    this.router.navigate([`/project/${ this.projectService.getUrl(project) }`])
  }

}
