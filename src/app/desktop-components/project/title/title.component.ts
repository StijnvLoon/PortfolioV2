import { Component, Input } from '@angular/core';
import { TextValue } from 'src/models/Dictionary';
import { LanguageService } from 'src/services/language.service';
import { SearchbarService } from 'src/services/searchbar.service';

@Component({
  selector: 'desktop-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {

  @Input() title: TextValue
  @Input() status: TextValue
  @Input() keywords: TextValue[]

  constructor(
    public languageService: LanguageService,
    private searchbarService: SearchbarService
  ) { }

  searchKeyword(keyword: TextValue) {
    this.searchbarService.setSearchText(this.languageService.get(keyword));
  }

}
