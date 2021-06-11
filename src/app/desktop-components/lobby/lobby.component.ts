import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/services/language.service';

@Component({
  selector: 'desktop-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  constructor(
    public languageService: LanguageService
  ) { }

  ngOnInit(): void {
  }

}
