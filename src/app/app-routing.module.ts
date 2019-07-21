import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GISComponent } from './gis/gis.component';
import { ITComponent } from './it/it.component';
import { GraphicComponent } from './graphic/graphic.component';
import { ArchitectureComponent } from './architecture/architecture.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'gis', component: GISComponent},
  {path: 'it', component: ITComponent},
  {path: 'graphic', component: GraphicComponent},
  {path: 'architecture', component: ArchitectureComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
