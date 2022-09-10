import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { TextValue } from "src/models/dict/TextValue";
import { LanguageService } from 'src/services/language.service';
import { SearchbarService } from 'src/services/searchbar.service';

@Component({
  selector: 'mobile-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() title: TextValue
  @Input() status: TextValue
  @Input() keywords: TextValue[]
  @Input() scrollElement: ElementRef

  constructor(
    public languageService: LanguageService,
    private searchbarService: SearchbarService
  ) { }

  ngOnInit(): void {
  }

  searchKeyword(keyword: TextValue) {
    this.searchbarService.setSearchText(this.languageService.get(keyword));
  }

}
