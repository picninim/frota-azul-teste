import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent } from '../start.component';

export const START_ROUTES: Routes = [
  { path: '', component: StartComponent },
];

@NgModule({
    imports: [RouterModule.forChild(START_ROUTES)],
    exports: [RouterModule]
})

export class StartRoutingModule { }
