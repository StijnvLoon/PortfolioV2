import { Component } from '@angular/core';
import { routeTransitionAnim } from 'src/animations/routeTransitionAnim';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
  animations: [routeTransitionAnim]
})
export class AppComponent {

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

}
