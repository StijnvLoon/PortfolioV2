import { Component, Input, OnInit } from '@angular/core';
import { TextValue, Language } from 'src/models/Dictionary';
import { Question } from 'src/models/Project';
import { LanguageService } from 'src/services/language.service';
import { environment } from 'src/environments/environment';

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
    const target = environment.ownerEmail
    const subject = this.languageService.getUpper('mail_question_subject') + ' ' + this.languageService.get(this.projectTitle)
    const body = ''

    window.location.href = `mailto:${target}?subject=${subject}&body=${body}`
  }

}
