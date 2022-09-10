import { Component, ElementRef, Input } from '@angular/core';
import { TextValue } from "src/models/dict/TextValue";
import { LanguageService } from 'src/services/language.service';
import { SearchbarService } from 'src/services/searchbar.service';

@Component({
  selector: 'desktop-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {

  @Input() title: TextValue
  @Input() creationDate: Date
  @Input() status: TextValue
  @Input() keywords: TextValue[]
  @Input() scrollElement: ElementRef

  constructor(
    public languageService: LanguageService,
    private searchbarService: SearchbarService
  ) { }

  searchKeyword(keyword: TextValue) {
    this.searchbarService.setSearchText(this.languageService.get(keyword));
  }

  getDateString() {
    return `${this.creationDate.getDate()}-${this.creationDate.getMonth()+1}-${this.creationDate.getFullYear()}`
  }

}
