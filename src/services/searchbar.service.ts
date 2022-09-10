import { Injectable } from '@angular/core';
import { Project } from 'src/models/project/Project';

@Injectable({
  providedIn: 'root'
})
export class SearchbarService {

  public searchText: string = ''
  private searchTextChangeListeners: {(text: string): void;}[] = []

  constructor() { }

  clearSearchText() {
    const interval = setInterval(() => {
      if (this.searchText.length == 0) {
        clearInterval(interval)
      }

      this.searchText = this.searchText.slice(0, -1)
    }, 20)
  }

  setSearchText(text: string) {
    this.searchText = text;
    this.searchTextChangeListeners.forEach((listener) => listener(this.searchText));
  }

  onSearchTextChange(listener: (text: string) => void) {
    this.searchTextChangeListeners.push(listener)
  }
}
