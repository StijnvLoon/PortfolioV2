import { Component, Input } from '@angular/core';
import { Url } from 'src/models/Project';
import { LanguageService } from 'src/services/language.service';

@Component({
  selector: 'desktop-urls',
  templateUrl: './urls.component.html',
  styleUrls: ['./urls.component.scss']
})
export class UrlsComponent {

  @Input() urls: Url[]

  constructor(
    public languageService: LanguageService
  ) { }

  openUrl(url: string) {
    window.open(url, "_blank");
  }

}
