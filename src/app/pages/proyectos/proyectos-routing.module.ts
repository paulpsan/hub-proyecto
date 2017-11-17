import { ProyectoComponent } from './proyecto/proyecto.component';
import { CrearEditarComponent } from './crear-editar/crear-editar.component'
import { ProyectosComponent } from './proyectos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {path: 'proyectos', component: ProyectosComponent},
  {path: 'proyectos/adicionar', component: CrearEditarComponent},
  {path: 'proyectos/editar/:id', component: CrearEditarComponent},
  {path: 'proyectos/proyecto/:id', component: ProyectoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectosRoutingModule { }