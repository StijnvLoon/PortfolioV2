import { Component, Input, OnInit } from '@angular/core';
import { TextValue, Language } from 'src/models/Dictionary';
import { Question } from 'src/models/Project';
import { LanguageService } from 'src/services/language.service';

@Component({
  selector: 'desktop-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  @Input() questions: Question[]
  @Input() projectTitle: TextValue

  constructor(
    public languageService: LanguageService
  ) { }

  ngOnInit(): void {
  }

  sendMail() {
    var target: string, subject: string, body: string

    switch (this.languageService.language) {
      case Language.EN:
        target = 'stijnvanloon@home.nl'
        subject = 'Question about ' + this.languageService.get(this.projectTitle)
        body = ''
        break;
      case Language.NL:
        target = 'stijnvanloon@home.nl'
        subject = 'Vraag over ' + this.languageService.get(this.projectTitle)
        body = ''
        break
      default:
        target = 'stijnvanloon@home.nl'
        subject = 'Question about ' + this.languageService.get(this.projectTitle)
        body = ''
        break
    }

    window.location.href = `mailto:${target}?subject=${subject}&body=${body}`
  }

}
