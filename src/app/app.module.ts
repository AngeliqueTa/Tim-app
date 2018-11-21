import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
import {RouterModule} from '@angular/router';

import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './Nav/Nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule,
    AppRoutingModule
  ],
  exports: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
