import { ProyectosService } from './services/proyectos.service';
import { platformCoreDynamic } from '@angular/compiler';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CdkTableModule} from '@angular/cdk/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { OrganizacionesComponent } from './pages/organizaciones/organizaciones.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProyectosComponent,
    UsuariosComponent,
    OrganizacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CdkTableModule
  ],
  providers: [ProyectosService],
  bootstrap: [AppComponent]
})
export class AppModule {
  // platformCoreDynamic().bootstrapModule(AppModule);
}
