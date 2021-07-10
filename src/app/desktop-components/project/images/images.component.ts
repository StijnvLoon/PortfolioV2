import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/models/Image';
import { LanguageService } from 'src/services/language.service';
import { imageTransitionAnimLtoR, imageTransitionAnimRtoL } from 'src/animations/imageTransitionAnim';
import { trigger, transition } from '@angular/animations';

@Component({
  selector: 'desktop-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
  animations: [
    trigger('animSlider', [
      transition(':increment', imageTransitionAnimRtoL),
      transition(':decrement', imageTransitionAnimLtoR),
    ]),
  ]
})
export class ImagesComponent implements OnInit {

  //TODO
  //picture drawer (little pictures with current selected picture)
  //left/right button faded away if unable to go that way
  //picture title somewhere
  //button to open picture in seperate window (so people can zoom in)

  @Input() images: Image[]
  public currentIndex: number = 0

  constructor(
    public languageService: LanguageService
  ) { }

  ngOnInit(): void {
  }

  isCurrent(image: Image): boolean {
      return this.images.indexOf(image) == this.currentIndex
  }

  nextImage() {
    if(this.currentIndex < this.images.length-1) {
      this.currentIndex++
    }
  }

  previousImage() {
    if(this.currentIndex > 0) {
      this.currentIndex--
    }
  }
}
