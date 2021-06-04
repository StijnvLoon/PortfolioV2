import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  //TODO fixennn

  public searchText: string = ''
  public focussed: boolean = false

  constructor() { }

  ngOnInit(): void { }

  onFocus(event: FocusEvent) {
    this.focussed = true
  }

  onInput(event) {
    this.searchText = event
  }

  clearInput() {
    this.searchText = ''
  }

}
