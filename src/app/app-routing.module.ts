import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { desktopRoutes } from './desktop-components/desktop-routes';
import { mobileRoutes } from './mobile-components/mobile-routes';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [RouterModule.forRoot(environment.isMobile ? mobileRoutes : desktopRoutes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
