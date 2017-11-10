import { UsuariosService } from './services/usuarios.service';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { UsuariosModule } from './pages/usuarios/usuarios.module';
import { ProyectosService } from './services/proyectos.service';
import { platformCoreDynamic } from '@angular/compiler';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {CdkTableModule} from '@angular/cdk/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { OrganizacionesComponent } from './pages/organizaciones/organizaciones.component';
// import { AdicionarComponent } from './pages/usuarios/adicionar/adicionar.component';
// import { EditarComponent } from './pages/usuarios/editar/editar.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProyectosComponent,
    OrganizacionesComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule,
    MaterialModule,
    UsuariosModule
  ],
  exports: [
    CdkTableModule
  ],
  providers: [ProyectosService,UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule {}
  platformBrowserDynamic().bootstrapModule(AppModule);

