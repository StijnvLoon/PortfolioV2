import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'desktop-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  emailString: string = "stijnvanloon@home.nl"
  discordString: string = "DerpDroid#9627"
  githubString: string = "https://github.com/StijnvLoon"
  gitlabString: string = "https://gitlab.com/StijnvLoon"
  linkedinString: string = "https://www.linkedin.com/in/stijn-van-loon-1395491a3"

  constructor() { }

  ngOnInit(): void {
  }

}
