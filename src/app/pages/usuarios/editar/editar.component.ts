import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { Usuario }from '../../../models/usuario'
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  selector: 'hub-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
  providers: [UsuariosService]
})
export class EditarComponent implements OnInit {

  private id : number;
  private sub : any;
  usuario: Usuario;
  private userForm : FormGroup;

  emailFormControl = new FormControl('', [
    Validators.required,  
    Validators.email, 
  ]); 

  constructor(private _route: ActivatedRoute,
    private router: Router,
    private _usuariosService: UsuariosService) {

   }

  ngOnInit() {
    this.sub = this._route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.userForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])
    });


    this._usuariosService.findById(this.id).subscribe(
      result =>{
        this.id = result._id;
        this.userForm.patchValue({
        nombre: result.nombre,
        email: result.email
      });
      err =>{
        console.log(err);
      }
    }
    );
  }
  onSubmit(){
    let usuario: Usuario = new Usuario(
      this.id,
      this.userForm.controls['nombre'].value,
      this.userForm.controls['email'].value,
      '','','','');
      console.log(usuario);
    this._usuariosService.editar(usuario).subscribe();
    this.userForm.reset();
    this.router.navigate(['/usuarios'])
  }

}
