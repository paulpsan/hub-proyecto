import { ModalEliminarUsuario } from './usuarios.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';

import { MaterialModule } from '../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { EditarComponent } from './editar/editar.component';
import { AdicionarComponent } from './adicionar/adicionar.component';

@NgModule({ 
  declarations:[
    AdicionarComponent,
    EditarComponent,
    ModalEliminarUsuario 
  ],
  imports:[
    CommonModule,
    MaterialModule,
    UsuariosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  exports:[
  ],
  entryComponents: [ModalEliminarUsuario]
})
export class UsuariosModule   {
}
