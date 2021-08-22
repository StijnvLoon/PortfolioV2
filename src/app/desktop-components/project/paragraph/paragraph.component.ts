import { Component, Input, OnInit } from '@angular/core';
import { Paragraph } from 'src/models/Project';
import { Theme } from 'src/models/Theme';
import { LanguageService } from 'src/services/language.service';
import { ThemeService } from 'src/services/theme.service';

@Component({
  selector: 'desktop-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent {

  @Input() paragraph: Paragraph
  @Input() level: number = 0

  constructor(
    public languageService: LanguageService,
    private themeService: ThemeService
  ) { }

  isLightTheme(): boolean {
    return this.themeService.theme == Theme.Light
  }
}
