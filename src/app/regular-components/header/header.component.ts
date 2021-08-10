import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/services/language.service';
import { environment } from 'src/environments/environment';
import { ScrollService } from 'src/services/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  smallHeader: boolean = false

  constructor(
    public languageService: LanguageService,
    private scrollService: ScrollService
  ) { }

  isMobile(): boolean {
    return environment.isMobile
  }

  ngOnInit() {
    this.scrollService.addScrollListener({
      onScroll: (event) => {
        const element: HTMLElement = event.srcElement
        
        if(element.scrollTop >= 5) {
          this.smallHeader = true
        } else {
          this.smallHeader = false
        }
      }
    })
  }

}
