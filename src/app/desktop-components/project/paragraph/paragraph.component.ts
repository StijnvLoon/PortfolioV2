import { Component, Input, OnInit } from '@angular/core';
import { Paragraph } from 'src/models/Project';
import { LanguageService } from 'src/services/language.service';

@Component({
  selector: 'desktop-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent implements OnInit {

  @Input() paragraph: Paragraph
  @Input() level: number = 0

  constructor(
    public languageService: LanguageService
  ) { }

  ngOnInit(): void {
    console.log(this.paragraph)
  }

}
