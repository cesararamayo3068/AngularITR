import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './inicio/inicio.component';
import { MascotasService } from './mascotas.service';
import { HttpClientModule } from '@angular/common/http';
import { MascotasListarComponent } from './mascotas-listar/mascotas-listar.component';

import { MascotasAgregarComponent } from './components/mascotas-agregar/mascotas-agregar.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MascotasListarComponent,
    MascotasAgregarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [MascotasService],
  bootstrap: [AppComponent]
})
export class AppModule { }


