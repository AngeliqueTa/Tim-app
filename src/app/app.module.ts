import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
import {RouterModule} from '@angular/router';

import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './Nav/Nav.component';
import { GISComponent } from './gis/gis.component';
import { ITComponent } from './it/it.component';
import { GraphicComponent } from './graphic/graphic.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    GISComponent,
    ITComponent,
    GraphicComponent,
    ArchitectureComponent,
    ContactsComponent
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
