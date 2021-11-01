import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { titleFloatAnim } from 'src/animations/titleFloatAnim';

@Component({
  selector: 'mobile-floating-title',
  templateUrl: './floating-title.component.html',
  styleUrls: ['./floating-title.component.scss'],
  animations: [titleFloatAnim]
})
export class FloatingTitleComponent implements OnInit, AfterViewInit {

  @Input() text: string
  @Input() scrollElement: Element
  @ViewChild('realTitle') realTitle: ElementRef
  isFloating: boolean = false
  realTitleNotVisibleScrollTop: number

  private onScrollListener: () => void = () => {
    this.isFloating = this.scrollElement.scrollTop > this.realTitleNotVisibleScrollTop
  }

  constructor() { }

  ngOnInit(): void {
    this.scrollElement.addEventListener('scroll', this.onScrollListener)
  }

  ngAfterViewInit(): void {
    this.realTitleNotVisibleScrollTop = this.realTitle.nativeElement.offsetTop + this.realTitle.nativeElement.clientHeight
  }

  ngOnDestroy(): void {
    this.scrollElement.removeEventListener('scroll', this.onScrollListener, true)
  }
}