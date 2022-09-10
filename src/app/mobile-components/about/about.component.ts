import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Language } from 'src/models/dict/Dictionary';
import { LanguageService } from 'src/services/language.service';

@Component({
  selector: 'mobile-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  discordString: string = "https://discordapp.com/users/380422746368245771/"
  githubString: string = "https://github.com/StijnvLoon"
  gitlabString: string = "https://gitlab.com/StijnvLoon"
  linkedinString: string = "https://www.linkedin.com/in/stijn-van-loon-1395491a3"
  cvNlString: string = "https://onedrive.live.com/embed?cid=6F36019D15A2D26B&resid=6F36019D15A2D26B%211915&authkey=APmX2U_YcC6FB90&em=2"
  cvENString: string = "https://onedrive.live.com/embed?cid=6F36019D15A2D26B&resid=6F36019D15A2D26B%211917&authkey=AIJmKlzkrqlT5wU&em=2"

  constructor(
    public languageService: LanguageService
  ) { }

  ngOnInit(): void {
  }

  openUrl(url: string) {
    window.open(url, '_blank').focus();
  }

  openMail() {
    const target = environment.ownerEmail
    const subject = this.languageService.getUpper('mail_contact_subject')
    const body = ''

    window.location.href = `mailto:${target}?subject=${subject}&body=${body}`
  }

  openCv() {
    switch (this.languageService.language) {
      case Language.EN:
        this.openUrl(this.cvENString)
        break
      case Language.NL:
        this.openUrl(this.cvNlString)
        break
    }
  }
}
