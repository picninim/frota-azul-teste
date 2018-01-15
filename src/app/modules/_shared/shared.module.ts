import { CurrencyViewComponent } from './../fleet/components/currency-view/currency-view.component';
import { ImageCustomViewComponent } from './../fleet/components/image-custom-view/image-custom-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { SafeHtmlPipe } from './pipes/safe-html/safe-html.pipe';
import { UserSessionService } from './services/user-session/user-session.service';
import { LocalPaginationComponent } from './components/local-pagination/local-pagination.component';
import { VehiclesService } from './services/server-api/vehicles/vehicles.service';
import { LoopAsObjectPipe } from './pipes/loop-as-object/loop-as-object.pipe';
import { LcCustomViewComponent, AppCustomViewDirective } from './components/local-pagination/lc-custom-view/lc-custom-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SvgIconComponent,
    SafeHtmlPipe,
    LocalPaginationComponent,
    LoopAsObjectPipe,
    LcCustomViewComponent,
    AppCustomViewDirective,
    ImageCustomViewComponent,
    CurrencyViewComponent
  ],
  exports: [
    SvgIconComponent,
    SafeHtmlPipe,
    LocalPaginationComponent,
    LoopAsObjectPipe,
    FormsModule,
    ReactiveFormsModule,
    LcCustomViewComponent,
    ImageCustomViewComponent,
    AppCustomViewDirective,
    CurrencyViewComponent
  ],
  entryComponents: [
    ImageCustomViewComponent,
    CurrencyViewComponent
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        UserSessionService,
        VehiclesService
      ]
    };
  }
 }
