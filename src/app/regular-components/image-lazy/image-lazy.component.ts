import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'img-lazy',
  templateUrl: './image-lazy.component.html',
  styleUrls: ['./image-lazy.component.scss']
})
export class ImageLazyComponent {

  @Input() src: string
  isLoading: boolean = true
  hasError: boolean = false

  constructor() { }

  onLoadingFinished() {
    this.isLoading = false
  }

  onError() {
    this.hasError = true
  }

  showError() {
    console.log('Error while loading image: ' + this.src)
  }

}
