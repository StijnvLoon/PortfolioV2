import { Component, Input, OnInit } from '@angular/core';
import { TextValue } from 'src/models/TextValue';
import { LanguageService } from 'src/services/language.service';
import { SearchbarService } from 'src/services/searchbar.service';

@Component({
  selector: 'desktop-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() title: TextValue
  @Input() status: TextValue
  @Input() keywords: TextValue[]

  constructor(
    public languageService: LanguageService,
    private searchbarService: SearchbarService
  ) { }

  ngOnInit(): void {
  }

  searchKeyword(keyword: TextValue) {
    this.searchbarService.setSearchText(keyword.get(this.languageService.language));
  }

}
