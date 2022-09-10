import { Component, Input, OnInit } from '@angular/core';
import { LanguageService } from 'src/services/language.service';
import { imageTransitionAnimLtoR, imageTransitionAnimRtoL } from 'src/animations/imageTransitionAnim';
import { trigger, transition } from '@angular/animations';
import { ProjectImage } from "src/models/project/Image";

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

  @Input() images: ProjectImage[]
  public currentIndex: number = 0

  constructor(
    public languageService: LanguageService
  ) { }

  ngOnInit(): void {
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
