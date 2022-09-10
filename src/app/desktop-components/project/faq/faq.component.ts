import { Component, Input, OnInit } from '@angular/core';
import { Language } from 'src/models/dict/Dictionary';
import { TextValue } from "src/models/dict/TextValue";
import { ProjectQuestion } from "src/models/project/Question";
import { LanguageService } from 'src/services/language.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'desktop-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {

  @Input() questions: ProjectQuestion[]
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
