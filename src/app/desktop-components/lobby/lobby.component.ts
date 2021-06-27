import { Component, OnInit } from '@angular/core';
import { Project } from 'src/models/Project';
import { LanguageService } from 'src/services/language.service';
import { ProjectService } from 'src/services/project.service';
import { lobbyListAnim } from 'src/animations/lobbyListAnim';
import { Router } from '@angular/router';

@Component({
  selector: 'desktop-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss'],
  animations: [
    lobbyListAnim
  ]
})
export class LobbyComponent implements OnInit {

  public projects: Project[];

  constructor(
    private router: Router,
    public languageService: LanguageService,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.projectService.get(
      (result) => { this.projects = result },
      (error) => {
        //TODO
      }
    )
  }

  navigateProject(id: string) {
    this.router.navigate([`/project/${id}`])
  }

}
