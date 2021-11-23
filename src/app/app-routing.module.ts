import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartementsComponent } from './departements/departements.component';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { UpdateDepartementComponent } from './services/update-departement/update-departement.component';

const routes: Routes = [
  {path: "departements", component : DepartementsComponent},
  {path: "add-departement", component : AddDepartementComponent},
  {path: "updateDepartement/:id", component: UpdateDepartementComponent},
  { path: "", redirectTo: "departements", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
