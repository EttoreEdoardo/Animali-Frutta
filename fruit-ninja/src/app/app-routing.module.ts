import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalsComponent } from './animals/animals.component';
import { FruitsComponent } from './fruits/fruits.component';
import { GenericComponent } from './generic/generic.component';

const routes: Routes = [
  { path: 'animals', component: AnimalsComponent},
  {path: '', redirectTo: '/animals', pathMatch: 'full'},
  { path: 'fruits', component: FruitsComponent},
  { path: 'generic/:id', component: GenericComponent }]; //<- Qui vanno inserite tutte le route che desideriamo creare

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
