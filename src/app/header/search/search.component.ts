import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/models/Project';
import { LanguageService } from 'src/services/language.service';
import { ProjectService } from 'src/services/project.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchText: string = ''
  public results: Project[] = []
  public searching: boolean = false
  public typedWhileSearching: boolean = false

  constructor(
    private router: Router,
    private projectService: ProjectService,
    public languageService: LanguageService
    ) { }

  ngOnInit(): void { }

  onInput(event) {
    this.searchText = event

    if(this.searching) {
      this.typedWhileSearching = true
    } else {
      this.searching = true
      this.updateResults()
    }
  }

  private updateResults() {
    this.projectService.search(
      this.searchText,
      this.languageService.language,
      (projects: Project[]) => {
        if(this.typedWhileSearching) {
          this.typedWhileSearching = false
          this.updateResults()
        } else {
          this.results = projects
          this.searching = false
        }
      },
      (error: string) => {}
    )
  }

  clearInput() {
    const interval = setInterval(() => {
      if(this.searchText.length == 0) {
        clearInterval(interval)
      }

      this.searchText = this.searchText.slice(0, -1)
    }, 20)
  }

  navigateProject(id: string) {
    this.router.navigate([`/project/${id}`])
  }

}
