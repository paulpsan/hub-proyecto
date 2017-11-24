import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../models/usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  selector: 'hub-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  id: number;
  acciones:string;
  usuario: Usuario;
  private sub:any;
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private userService: UsuariosService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
 
    if (this.id) { //edit form
      this.userService.buscarId(this.id).subscribe(
        resp => {
            this.id = resp._id;
            this.usuario=resp;
            console.log(this.usuario);
         },error => {
          console.log(error);
         }
      );
    }
  }
}
