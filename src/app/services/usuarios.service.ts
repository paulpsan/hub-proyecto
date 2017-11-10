import { Component, Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { GLOBAL } from './global';
import { Usuario }from '../models/usuario'

@Injectable()
export class UsuariosService {
  private url: string;
  constructor(private _http: Http) { 
    this.url = GLOBAL.url;
    // this.url ='https://test.adsib.gob.bo/api_backend/api/usuarios';
    
  }
  obtener():Observable<Usuario[]>{
    let headers = new Headers({ 'Content-Type': 'application/json' });

    return this._http.get(this.url+'usuarios')
    .map((res:Response)=>res.json().datos)
    .catch((error:any)=>Observable.throw(error.json().error || 'Server error'))
  }
  adicionar(usuario:Usuario):Observable<Usuario[]>{
    return this._http.post(this.url+'usuarios', usuario)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }
  // obtener(){
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   // headers.append('Authorization', pin);
  //   // let options = new RequestOptions({ headers: headers });
  //   return this._http.get(this.url).map(res => res.json());
  // }
}
