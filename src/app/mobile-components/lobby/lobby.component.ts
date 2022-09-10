import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { Router } from '@angular/router';
import { changeAnim } from 'src/animations/changeAnim';
import { lobbyListAnim } from 'src/animations/lobbyListAnim';
import { Project } from 'src/models/project/Project';
import { LanguageService } from 'src/services/language.service';
import { LoaderService } from 'src/services/loader.service';
import { ProjectService } from 'src/services/project.service';

@Component({
  selector: 'mobile-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss'],
  animations: [
    lobbyListAnim,
    changeAnim
  ]
})
export class LobbyComponent implements OnInit {

  @ViewChild('sortButton') sortButton: ElementRef

  public projects: Project[]
  public showSort: boolean = false
  public currentSortingFunction: (a: Project, b: Project) => number

  constructor(
    private router: Router,
    private loaderService: LoaderService,
    public languageService: LanguageService,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.currentSortingFunction = this.projectService.sortFunctions[0].function
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

  getSorterDimensions() {
    return {
      top: (this.sortButton.nativeElement.getBoundingClientRect().bottom + 10) + 'px',
      left: this.sortButton.nativeElement.getBoundingClientRect().left + 'px'
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
