import { Component, OnInit } from '@angular/core';
import { Project } from 'src/models/Project';
import { LanguageService } from 'src/services/language.service';
import { ProjectService } from 'src/services/project.service';
import { lobbyListAnim } from 'src/animations/lobbyListAnim';

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
    public languageService: LanguageService,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.projectService.get(
      (result) => { this.projects = result },
      (error) => { }
    )
  }

}
