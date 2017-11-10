import { Usuario } from '../../../models/usuario';
import { UsuariosService } from '../../../services/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'hub-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css'],
  providers:[UsuariosService]
})
export class AdicionarComponent implements OnInit {

  userForm: FormGroup;
  private usuario:Usuario[];
  private sub: any;

  emailFormControl = new FormControl('', [
    Validators.required,  
    Validators.email, 
  ]); 

  constructor(private _usuariosService: UsuariosService,private router : Router) {}
    


    // if (this.id) { //edit form
    //   this.userService.findById(this.id).subscribe(
    //     user => {
    //       this.id = user.id;
    //       this.userForm.patchValue({
    //         firstName: user.firstName,
    //         lastName: user.lastName,
    //         email: user.email,
    //       });
    //     },error => {
    //       console.log(error);
    //     }
    //   );
    // } 
 

  ngOnInit() {
    this.userForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      email : new FormControl(),
     
    });
  }
  onSubmit(){
    let usuario: Usuario = new Usuario(
      null,
      this.userForm.controls['nombre'].value,
      this.userForm.controls['email'].value,
      '','','','');
      this._usuariosService.adicionar(usuario).subscribe(res=>this.usuario=res);
      this.userForm.reset();
      this.router.navigate(['/usuarios'])
  }
  adicionar(){
    let usuario: Usuario = new Usuario(
      null,
      this.userForm.controls['nombre'].value,
      this.userForm.controls['email'].value,
      '','','','');
      this._usuariosService.adicionar(usuario).subscribe(res=>{this.sub=res;
      console.log(this.sub.target.value);});
      this.userForm.reset();
      this.router.navigate(['/usuarios'])
  }


}
