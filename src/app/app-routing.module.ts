import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// component added to routes
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeroesComponent } from './heroes/heroes.component';
import {FormFieldComponent} from './form-field/form-field.component';

const routes: Routes = [
  { path: '', component: NavBarComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'form', component: FormFieldComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
