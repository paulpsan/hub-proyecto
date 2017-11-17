
import { HubInterceptor } from '../../common/interceptor/hub.interceptor';
import { MaterialModule } from '../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CrearEditarComponent } from './crear-editar/crear-editar.component';
import { ModalEliminarUsuario, UsuariosComponent } from './usuarios.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosService } from '../../services/usuarios.service';

@NgModule({ 
  declarations:[
    ModalEliminarUsuario,
    CrearEditarComponent,
    UsuariosComponent,
  ],
  imports:[
    CommonModule,
    MaterialModule,
    UsuariosRoutingModule,
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
    UsuariosService
  ],
  entryComponents: [ModalEliminarUsuario]
})
export class UsuariosModule   {
}
