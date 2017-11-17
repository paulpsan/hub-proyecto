import { HttpService } from '../../services/http.service';

import { HubInterceptor } from '../../common/interceptor/hub.interceptor';
import { MaterialModule } from '../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CrearEditarComponent } from './crear-editar/crear-editar.component';
import { ModalEliminarProyecto, ProyectosComponent } from './proyectos.component';
import { ProyectosRoutingModule } from './proyectos-routing.module';
import { ProyectosService } from '../../services/proyectos.service';
import { ProyectoComponent } from './proyecto/proyecto.component';

@NgModule({ 
  declarations:[
    ModalEliminarProyecto,
    CrearEditarComponent,
    ProyectosComponent,
    ProyectoComponent,
  ],
  imports:[
    CommonModule,
    MaterialModule,
    ProyectosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  exports:[
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HubInterceptor,
      multi: true
    },
    ProyectosService,
    HttpService
  ],
  entryComponents: [ModalEliminarProyecto]
})
export class ProyectosModule   {
}
