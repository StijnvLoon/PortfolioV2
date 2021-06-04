import { Routes } from '@angular/router';

import { LobbyComponent } from './lobby/lobby.component';
import { AboutComponent } from './about/about.component';

export const desktopRoutes: Routes = [
    { path: '', component: LobbyComponent },
    { path: 'About', component: AboutComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
]