import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesktopComponent } from './desktop-components/desktop/desktop.component';
import { MobileComponent } from './mobile-components/mobile/mobile.component';

//TODO wanneer mobile?
const mobile: boolean = window.innerWidth < 1200

const mobileRoutes: Routes = [
  { path: '', component: MobileComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
]

const desktopRoutes: Routes = [
  { path: '', component: DesktopComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
]

@NgModule({
  imports: [RouterModule.forRoot(mobile ? mobileRoutes : desktopRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
