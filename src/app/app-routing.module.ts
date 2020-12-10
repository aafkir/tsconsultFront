import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployesComponent } from './employes/employes.component';

const routes: Routes = [
  {path: "employes/:url", component: EmployesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
