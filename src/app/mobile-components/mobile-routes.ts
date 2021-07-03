import { Routes } from '@angular/router';

import { LobbyComponent } from './lobby/lobby.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';

export const mobileRoutes: Routes = [
    { path: '', component: LobbyComponent },
    { path: 'About', component: AboutComponent },
    { path: 'project/:url', component: ProjectComponent},
    { path: '**', pathMatch: 'full', redirectTo: '' }
]