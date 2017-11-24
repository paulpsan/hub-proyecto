
import { HubInterceptor } from '../../common/interceptor/hub.interceptor';
import { MaterialModule } from '../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CrearEditarComponent } from './usuario/crear-editar/crear-editar.component';
import { ModalEliminarUsuario, UsuariosComponent } from './usuarios.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosService } from '../../services/usuarios.service';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({ 
  declarations:[
    ModalEliminarUsuario,
    CrearEditarComponent,
    UsuariosComponent,
    UsuarioComponent,
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
