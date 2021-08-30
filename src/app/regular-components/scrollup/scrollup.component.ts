import { Component, Input, OnInit } from '@angular/core';
import { changeAnim } from 'src/animations/changeAnim';

@Component({
  selector: 'app-scrollup',
  templateUrl: './scrollup.component.html',
  styleUrls: ['./scrollup.component.scss'],
  animations: [ changeAnim ]
})
export class ScrollupComponent implements OnInit {

  @Input() scrollElement: Element
  isPresent: boolean = false

  constructor() { }

  ngOnInit(): void {
    this.scrollElement.addEventListener('scroll', (event) => {
      this.isPresent = this.scrollElement.scrollTop > 20
    })
  }

  scrollup() {
    this.scrollElement.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}
