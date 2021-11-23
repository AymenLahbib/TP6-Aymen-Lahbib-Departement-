import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartementsComponent } from './departements/departements.component';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { FormsModule } from '@angular/forms';
import { UpdateDepartementComponent } from './services/update-departement/update-departement.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartementsComponent,
    AddDepartementComponent,
    UpdateDepartementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
