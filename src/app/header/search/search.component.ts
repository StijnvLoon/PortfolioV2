import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchText: string = ''

  constructor() { }

  ngOnInit(): void { }

  onInput(event) {
    this.searchText = event
  }

  clearInput() {
    const interval = setInterval(() => {
      if(this.searchText.length == 0) {
        clearInterval(interval)
      }

      this.searchText = this.searchText.slice(0, -1)
    }, 20)
  }

}
