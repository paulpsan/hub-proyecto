import { UsuariosComponent } from './usuarios.component';
import { EditarComponent } from './editar/editar.component';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'usuarios/adicionar', component: AdicionarComponent},
  {path: 'usuarios/editar', component: EditarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }