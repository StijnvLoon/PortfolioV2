import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-loader',
  templateUrl: './image-loader.component.html',
  styleUrls: ['./image-loader.component.scss']
})
export class ImageLoaderComponent implements OnInit {

  @Input() imageWidth: string = 'auto'
  @Input() imageHeight: string = 'auto'
  @Input() url: string

  public isLoading: boolean = true
  public error: boolean = false

  constructor() { }

  ngOnInit(): void {
    console.log(this.url)
  }

  onError() {
    this.error = true
    this.isLoading = false
  }

  onLoadingFinished() {
    this.isLoading = false
  }

}
