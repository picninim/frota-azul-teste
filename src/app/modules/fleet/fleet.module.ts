import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FleetComponent } from './fleet.component';

import { FleetRoutingModule } from './routing/fleet.routing.module';
import { SharedModule } from '../_shared/shared.module';
import { ImageCustomViewComponent } from './components/image-custom-view/image-custom-view.component';
import { CurrencyViewComponent } from './components/currency-view/currency-view.component';

@NgModule({
  imports: [
    CommonModule,
    FleetRoutingModule,
    SharedModule
  ],
  declarations: [FleetComponent]
})
export class FleetModule { }
