import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private listeners: ScrollListener[] = []

  constructor() { }

  addScrollListener(listener: ScrollListener) {
    this.listeners.push(listener)
  }

  triggerScroll(event) {
    this.listeners.forEach(listener => {
      listener.onScroll(event)
    })
  }
}

export interface ScrollListener {
  onScroll(event)
}
