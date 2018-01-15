import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../app.component';
import { CLIENT_PATHS } from './../../../config/paths';

export const APP_ROUTES: Routes = [
    { path: '', redirectTo: CLIENT_PATHS.START, pathMatch: 'full' },
    { path: CLIENT_PATHS.START, loadChildren: 'app/modules/start/start.module#StartModule' },
    { path: CLIENT_PATHS.FLEET, loadChildren: 'app/modules/fleet/fleet.module#FleetModule' },
    { path: '**', redirectTo: CLIENT_PATHS.START, pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
