import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { desktopRoutes } from './desktop-components/desktop-routes';
import { mobileRoutes } from './mobile-components/mobile-routes';

//TODO wanneer mobile?
const mobile: boolean = window.innerWidth < 1200

@NgModule({
  imports: [RouterModule.forRoot(mobile ? mobileRoutes : desktopRoutes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
