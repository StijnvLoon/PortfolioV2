import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/models/Project';
import { LanguageService } from 'src/services/language.service';
import { TextValue } from 'src/models/TextValue';
import { SearchbarService } from 'src/services/searchbar.service';

@Component({
  selector: 'desktop-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  @Input() project: Project

  constructor(
    public languageService: LanguageService,
    private searchbarService: SearchbarService
  ) {

  }

  ngOnInit(): void {
  }

  searchKeyword(keyword: TextValue) {
    this.searchbarService.setSearchText(keyword.get(this.languageService.language));
  }

}
