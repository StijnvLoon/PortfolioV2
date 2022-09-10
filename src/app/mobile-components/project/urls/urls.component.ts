import { Component, Input, OnInit } from '@angular/core';
import { ProjectUrl } from "src/models/project/Url";
import { LanguageService } from 'src/services/language.service';

@Component({
  selector: 'mobile-urls',
  templateUrl: './urls.component.html',
  styleUrls: ['./urls.component.scss']
})
export class UrlsComponent implements OnInit {

  @Input() urls: ProjectUrl[]

  constructor(
    public languageService: LanguageService
  ) { }

  ngOnInit(): void {
  }

  openUrl(url: string) {
    window.open(url, "_blank");
  }

}
