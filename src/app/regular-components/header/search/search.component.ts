import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { Router } from '@angular/router';
import { changeAnim } from 'src/animations/changeAnim';
import { Project } from 'src/models/Project';
import { LanguageService } from 'src/services/language.service';
import { ProjectService } from 'src/services/project.service';
import { SearchbarService } from 'src/services/searchbar.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [ changeAnim ]
})
export class SearchComponent {

  @ViewChild('searchInput') searchInput: ElementRef

  public results: Project[] = []
  public searching: boolean = false
  public typedWhileSearching: boolean = false

  constructor(
    private router: Router,
    public projectService: ProjectService,
    public languageService: LanguageService,
    public searchbarService: SearchbarService
  ) {
    this.searchbarService.onSearchTextChange((text: string) => {
      this.searchInput.nativeElement.click();
      this.onInput();
    })
  }

  onInput() {
    if (this.searching) {
      this.typedWhileSearching = true
    } else {
      this.searching = true
      this.updateResults()
    }
  }

  //needed so autocomplete is activated
  //https://github.com/angular/components/issues/3106
  onSearchBarClick() {
    setTimeout(() => {
      this.searchInput.nativeElement.focus();
    }, 1);
  }

  private updateResults() {
    this.projectService.search(
      this.searchbarService.searchText,
      this.languageService.language,
      (projects: Project[]) => {
        if (this.typedWhileSearching) {
          this.typedWhileSearching = false
          this.updateResults()
        } else {
          this.results = projects
          this.searching = false
        }
      },
      (error: string) => { }
    )
  }

  clearInput() {
    this.searchbarService.clearSearchText();
  }

  navigateProject(project: Project) {
    this.router.navigate([`/project/${this.projectService.getUrl(project)}`]);
  }
}
