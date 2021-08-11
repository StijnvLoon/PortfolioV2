import { Routes } from '@angular/router';

import { LobbyComponent } from './lobby/lobby.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { ErrorComponent } from '../regular-components/error/error.component';

export const desktopRoutes: Routes = [
    { path: '', component: LobbyComponent },
    { path: 'Error', component: ErrorComponent},
    { path: 'About', component: AboutComponent },
    { path: 'project/:url', component: ProjectComponent },
    { path: 'project/:url/edit', component: EditProjectComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
]