import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';
import { EmployesComponent } from './employes/employes.component';
import { EntreprisesService } from './entreprises.service';
import { HttpClientModule, HttpClient  } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EntreprisesComponent,
    EmployesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EntreprisesService, EntreprisesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
