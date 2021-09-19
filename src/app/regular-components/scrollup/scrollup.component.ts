import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { changeAnim } from 'src/animations/changeAnim';

@Component({
  selector: 'app-scrollup',
  templateUrl: './scrollup.component.html',
  styleUrls: ['./scrollup.component.scss'],
  animations: [ changeAnim ]
})
export class ScrollupComponent implements OnInit, OnDestroy {

  @Input() scrollElement: Element
  isPresent: boolean = false

  private onScrollListener: () => void = () => {
    this.isPresent = this.scrollElement.scrollTop > 20
  }

  constructor() { }

  ngOnInit(): void {
    this.scrollElement.addEventListener('scroll', this.onScrollListener)
  }

  ngOnDestroy(): void {
    this.scrollElement.removeEventListener('scroll', this.onScrollListener, true)
  }


  scrollup() {
    this.scrollElement.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}
