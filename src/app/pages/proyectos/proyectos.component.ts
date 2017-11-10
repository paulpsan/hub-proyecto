import { Component, OnInit , Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';

import { Proyecto } from '../../models/proyecto';
import { ProyectosService } from '../../services/proyectos.service';

@Component({
  selector: 'hub-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  public proyecto : ProyectosService;
  public projects;
  constructor(private _proyectosService: ProyectosService) {
    
   }
  ngOnInit() {
    this._proyectosService.getProyectos().subscribe(
      result =>{
        this.projects=result;
        console.log (result);

      }
    )
  }
}