import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { Meta, Title } from '@angular/platform-browser';
import { routeTransitionAnim } from 'src/animations/routeTransitionAnim';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
  animations: [routeTransitionAnim]
})
export class AppComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private dateAdapter: DateAdapter<any>
  ) { }

  ngOnInit(): void {
    this.dateAdapter.setLocale('nl')

    if(environment.production) {
      this.titleService.setTitle(environment.title)
      this.metaService.addTags([
        {name: 'keywords', content: environment.keywords},
        {name: 'description', content: environment.description},
        {name: 'robots', content: environment.robots}
      ])
    }
  }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

}
