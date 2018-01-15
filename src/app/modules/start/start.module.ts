import { SharedModule } from './../_shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartRoutingModule } from './routing/start.routing.module';
import { StartComponent } from './start.component';

@NgModule({
  imports: [
    CommonModule,
    StartRoutingModule,
    SharedModule
  ],
  declarations: [StartComponent]
})
export class StartModule { }
