import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialDemoComponent } from './material/material-demo/material-demo.component';
// import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'material-demo',
    component: MaterialDemoComponent
  },
  {
    path: 'inicio',
    component:InicioComponent
  }
  // {
  //   path: 'home',
  //   component: HomeComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
