import { Component, Input, OnInit } from '@angular/core';
import { Url } from 'src/models/Project';
import { LanguageService } from 'src/services/language.service';

@Component({
  selector: 'mobile-urls',
  templateUrl: './urls.component.html',
  styleUrls: ['./urls.component.scss']
})
export class UrlsComponent implements OnInit {

  @Input() urls: Url[]

  constructor(
    public languageService: LanguageService
  ) { }

  ngOnInit(): void {
  }

  openUrl(url: string) {
    window.open(url, "_blank");
  }

}
