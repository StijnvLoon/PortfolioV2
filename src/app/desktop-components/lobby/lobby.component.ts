import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Project } from 'src/models/project/Project';
import { LanguageService } from 'src/services/language.service';
import { ProjectService } from 'src/services/project.service';
import { lobbyListAnim } from 'src/animations/lobbyListAnim';
import { Router } from '@angular/router';
import { LoaderService } from 'src/services/loader.service';
import { MatRadioChange } from '@angular/material/radio';
import { changeAnim } from 'src/animations/changeAnim';

@Component({
  selector: 'desktop-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss'],
  animations: [
    lobbyListAnim,
    changeAnim
  ]
})
export class LobbyComponent implements OnInit {

  @ViewChild('sortButton') sortButton: ElementRef

  public projects: Project[];
  public showSort: boolean = false
  public currentSortingFunction: (a: Project, b: Project) => number

  constructor(
    private router: Router,
    private loaderService: LoaderService,
    public languageService: LanguageService,
    private projectService: ProjectService,
  ) { }

  ngOnInit(): void {
    this.currentSortingFunction = this.projectService.sortFunctions[0].function
    this.loaderService.startLoading()
    this.projectService.get(
      (result) => {
        this.loaderService.stopLoading()
        this.projects = result.sort(this.currentSortingFunction)
      },
      (error) => {
        this.loaderService.stopLoading(error)
      }
    )
  }

  navigateProject(project: Project) {
    this.router.navigate([`/project/${this.projectService.getUrl(project)}`])
  }

  getSorterDimensions() {
    return {
      top: this.sortButton.nativeElement.getBoundingClientRect().top + 'px',
      left: (this.sortButton.nativeElement.getBoundingClientRect().right + 10) + 'px'
    }
  }

  onSortChange(event: MatRadioChange) {
    this.projects = []
    setTimeout(() => {
      this.projectService.sortProjects(event.value)
      this.projectService.get(
        (result) => {
          this.loaderService.stopLoading()
          this.projects = result.sort(this.currentSortingFunction)
        },
        (error) => {
          this.loaderService.stopLoading(error)
        }
      )
    }, 400);
  }
}
