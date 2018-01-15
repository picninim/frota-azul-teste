import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { FleetComponent } from '../fleet.component';

export const FLEET_ROUTES: Routes = [
  { path: '', component: FleetComponent },
];

@NgModule({
    imports: [RouterModule.forChild(FLEET_ROUTES)],
    exports: [RouterModule]
})

export class FleetRoutingModule { }
