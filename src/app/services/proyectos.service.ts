import { Component, OnInit , Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

import { GLOBAL } from './global';
import { Proyecto } from '../models/proyecto';


@Injectable()
export class ProyectosService {
  public url: string;

  constructor(private _http: Http) { 
    // this.url = GLOBAL.url;
    this.url = 'https://gitlab.geo.gob.bo/api/v4/projects/';
    
  }
  getProyectos(){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    // headers.append('Authorization', pin);
    // let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url).map(res => res.json());
    
  }

}
