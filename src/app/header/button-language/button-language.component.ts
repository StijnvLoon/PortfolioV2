import { Component, OnInit } from '@angular/core';
import { changeAnim } from 'src/animations/changeAnim';
import { LanguageService } from 'src/services/language.service';

@Component({
  selector: 'app-button-language',
  templateUrl: './button-language.component.html',
  styleUrls: ['./button-language.component.scss'],
  animations: [
    changeAnim
  ]
})
export class ButtonLanguageComponent implements OnInit {

  constructor(
    public languageService: LanguageService
  ) { }

  ngOnInit(): void {
  }

}
