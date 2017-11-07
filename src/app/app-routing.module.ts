import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { OrganizacionesComponent } from './pages/organizaciones/organizaciones.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AppComponent } from './app.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'proyectos',
    component: ProyectosComponent
  },
  {
    path: 'usuarios',
    component: UsuariosComponent
  },
  {
    path: 'organizaciones',
    component: OrganizacionesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
