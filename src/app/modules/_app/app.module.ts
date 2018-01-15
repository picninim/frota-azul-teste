import { environment } from './../../../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppRoutingModule } from './routing/app.routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '../_shared/shared.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
