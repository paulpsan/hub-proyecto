import { HubInterceptor } from '../../common/interceptor/hub.interceptor';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Usuario } from '../../models/usuario';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'hub-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {

  private usuarios:Usuario[];
  private respuesta: any;

  constructor(private _usuariosService: UsuariosService,private router : Router,private dialog:   MatDialog ) {
    
   }

  ngOnInit() {
    this.obtenerUsuarios();
  }

  // obtenerUsuarios(){
  //   this._usuariosService.obtener().subscribe(
  //     result =>{
  //       this.usuarios=result.datos;
  //       console.log (result);
  //     },
  //     err =>{
  //       console.log(err);
  //     }
  //   )
  // }
  // Recibe de respuesta un objeto de tipo Usuarios
  obtenerUsuarios(){
    this._usuariosService.obtener().subscribe(
      result =>{
        this.respuesta=result;
        this.usuarios=this.respuesta.datos;
        console.log (this.respuesta.datos);
      },
      err =>{
        console.log(err);
      }
    )
  }
  irUsuario(usuario){
    if (usuario) {
      this.router.navigate(['/usuarios/', usuario._id]);
    } 
  }

  editarUsuario(usuario:Usuario){
    console.log(usuario);
    if (usuario) {
      this.router.navigate(['/usuarios/editar', usuario._id]);
    } 
  }
 
  adicionarUsuario(){
      this.router.navigate(['/usuarios/adicionar']);
  }

  eliminarUsuario(usuario:Usuario):void{
    console.log(usuario);
    let dialogRef = this.dialog.open(ModalEliminarUsuario, {
      width: '350px',
      data: usuario 
    });

    dialogRef.afterClosed().subscribe(result => {

      this._usuariosService.eliminarId(result._id).subscribe(
            res => {
              //AQUI colocamos las notificaciones!!
              setTimeout(()=>
              { 
                this.obtenerUsuarios();
              }, 1000);
              console.log('done');
            }
      );
    });
  }
}

@Component({
  selector: 'modal-eliminar-usuario',
  templateUrl: 'modal-eliminar-usuario.html',
})
export class ModalEliminarUsuario {

  constructor(
    public dialogRef: MatDialogRef<ModalEliminarUsuario>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  cancelarClick(): void {
    this.dialogRef.close();
  }

}