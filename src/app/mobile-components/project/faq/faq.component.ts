import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TextValue } from 'src/models/Dictionary';
import { Question } from 'src/models/Project';
import { LanguageService } from 'src/services/language.service';

@Component({
  selector: 'mobile-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {

  @Input() questions: Question[]
  @Input() projectTitle: TextValue

  constructor(
    public languageService: LanguageService
  ) { }

  sendMail() {
    const target = environment.ownerEmail
    const subject = this.languageService.getUpper('mail_question_subject') + ' ' + this.languageService.get(this.projectTitle)
    const body = ''

    window.location.href = `mailto:${target}?subject=${subject}&body=${body}`
  }

}
