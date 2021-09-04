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
    console.log('scrolling')
    this.isPresent = this.scrollElement.scrollTop > 20
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.scrollElement)
    this.scrollElement.addEventListener('scroll', this.onScrollListener)
  }

  ngOnDestroy(): void {
    this.scrollElement.removeEventListener('scroll', this.onScrollListener, true)
    console.log('destroyed')
  }


  scrollup() {
    this.scrollElement.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}
